import React, { useEffect, useRef } from "react";
import { format as formatDateFn } from "date-fns";
import { useWeb3React } from '@web3-react/core';
import { BigNumber } from '@ethersproject/bignumber';
import { formatUnits, parseUnits } from '@ethersproject/units';
import { Token, ETHER } from '@acyswap/sdk';
import { getAddress } from '@ethersproject/address';
import { AddressZero, MaxUint256 } from '@ethersproject/constants';
import { Contract } from '@ethersproject/contracts';
import { NATIVE_CURRENCY } from '@/constants/trade.js'
import ERC20ABI from '@/abis/ERC20.json'
import axios from 'axios';

const SELECTED_NETWORK_LOCAL_STORAGE_KEY = "chainId"
const DEFAULT_CHAIN_ID = 80001
const supportedChainIds = [56, 97, 137, 80001]

export const CHART_PERIODS = {
  "1m": 60,
  "5m": 60 * 5,
  "15m": 60 * 15,
  "30m": 60 * 30,
  "1h": 60 * 60,
  "2h": 60 * 60 * 2,
  "4h": 60 * 60 * 4,
  "1d": 60 * 60 * 24,
  "1w": 60 * 60 * 24 * 7
}

export class CustomError {
  getErrorText() {
    return this.errorText;
  }

  constructor(errorText) {
    this.errorText = errorText;
  }
}

export function formatDateTime(time) {
  return formatDateFn(time * 1000, "dd MMM yyyy, h:mm a");
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function isAddress(value) {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export function getProviderOrSigner(library, account) {
  return account ? library.getSigner(account).connectUnchecked() : library;
}

export function getContract(address, ABI, library, account) {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account));
}

export async function getUserTokenBalanceRaw(token, account, library) {
  if (token === ETHER) {
    return library.getBalance(account);
  }

  const contractToCheckForBalance = getContract(token.address, ERC20ABI, library, account);
  return contractToCheckForBalance.balanceOf(account);
}

export async function getUserTokenBalance(token, chainId, account, library) {
  let { address, symbol, decimals } = token;

  if (!token) return;
  let tokenIsETH = symbol === NATIVE_CURRENCY;

  return formatUnits(
    await getUserTokenBalanceRaw(
      tokenIsETH ? ETHER : new Token(chainId, address, decimals, symbol),
      account,
      library
    ),
    decimals
  );
}

export async function getTokenPrice(token, chainId = 56) {
  // return 0;
  // wait acy-stats add this API
  const tokenPrice = await axios.get(
    `https://stats.acy.finance/api/price?token=${token}&chainId=${chainId}`
  ).then(
    (result) => {
      const data = result.data;
      return data;
    }
  ).catch(
    (err) => {
      return 0;
    }
  )
  return tokenPrice ? tokenPrice.price : 0;
}

export const useChainId = () => {
  let { chainId } = useWeb3React();

  if (!chainId) {
    const chainIdFromLocalStorage = localStorage.getItem(SELECTED_NETWORK_LOCAL_STORAGE_KEY);
    if (chainIdFromLocalStorage) {
      chainId = parseInt(chainIdFromLocalStorage);
      if (!chainId) {
        // localstorage value is invalid
        localStorage.removeItem(SELECTED_NETWORK_LOCAL_STORAGE_KEY);
      }
    }
  }

  if (!chainId || !supportedChainIds.includes(chainId)) {
    chainId = DEFAULT_CHAIN_ID;
  }
  return { chainId };
}

export function sortAddress(text) {
  // 转为string
  text = text + "";
  const length = text.length;
  if (text.length > 10) {
    return text.substring(0, 4) + "..." + text.substring(length - 4, length);
  }
  else {
    return text;
  }
}

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export function isAntdPro() {
  return window.location.hostname === 'preview.pro.ant.design';
}

// return token allowance in BigNumber
export async function getAllowance(tokenAddress, owner, spender, library, account) {
  const tokenContract = getContract(tokenAddress, ERC20ABI, library, account);
  const allowance = await tokenContract.allowance(owner, spender);
  return allowance;
}

// return gas with 10% added margin in BigNumber
export function calculateGasMargin(value) {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000));
}

// approve an ERC-20 token
export async function approveNew(tokenAddress, requiredAmount, spenderAddress, library, account) {
  if (requiredAmount === '0') {
    console.log('Unncessary call to approve');
    return true;
  }

  let allowance = await getAllowance(
    tokenAddress,
    account, // owner
    spenderAddress, //spender
    library, // provider
    account // active account
  );

  if (allowance.lt(BigNumber.from(requiredAmount))) {
    let tokenContract = getContract(tokenAddress, ERC20ABI, library, account);
    let useExact = false;
    // try to get max allowance
    let estimatedGas = await tokenContract.estimateGas['approve'](spenderAddress, MaxUint256).catch(
      async () => {
        // general fallback for tokens who restrict approval amounts
        useExact = true;
        let result = await tokenContract.estimateGas.approve(
          spenderAddress,
          requiredAmount.raw.toString()
        );
        return result;
      }
    );

    let res = await tokenContract
      .approve(spenderAddress, useExact ? requiredAmount.raw.toString() : MaxUint256, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      .catch(() => {
        return false;
      });

    if (res == false) {
      return false;
    }

    let flag = false;

    while (1) {
      let newAllowance = await getAllowance(
        tokenAddress,
        account, // owner
        spenderAddress, //spender
        library, // provider
        account // active account
      );

      if (newAllowance.gte(BigNumber.from(requiredAmount))) {
        flag = true;
        break;
      }
    }
    if (flag) return true;
  } else {
    return true;
  }
}

export const limitDecimals = (amount, maxDecimals) => {
  let amountStr = amount.toString()
  if (maxDecimals === undefined) {
    return amountStr
  }
  if (maxDecimals === 0) {
    return amountStr.split(".")[0]
  }
  const dotIndex = amountStr.indexOf(".")
  if (dotIndex !== -1) {
    let decimals = amountStr.length - dotIndex - 1
    if (decimals > maxDecimals) {
      amountStr = amountStr.substr(0, amountStr.length - (decimals - maxDecimals))
    }
  }
  return amountStr
}

export const padDecimals = (amount, minDecimals) => {
  let amountStr = amount.toString()
  const dotIndex = amountStr.indexOf(".")
  if (dotIndex !== -1) {
    const decimals = amountStr.length - dotIndex - 1
    if (decimals < minDecimals) {
      amountStr = amountStr.padEnd(amountStr.length + (minDecimals - decimals), "0")
    }
  } else {
    amountStr = amountStr + ".0000"
  }
  return amountStr
}

export function numberWithCommas(x) {
  if (!x) { return "..." }
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export const formatAmount = (amount, tokenDecimals, displayDecimals, useCommas, defaultValue) => {

  if (!defaultValue) {
    defaultValue = "..."
  }

  if (amount === undefined || amount.toString().length === 0) {
    return defaultValue
  }

  if (displayDecimals === undefined) {
    displayDecimals = 4
  }
  let amountStr = ethers.utils.formatUnits(amount, tokenDecimals)
  amountStr = limitDecimals(amountStr, displayDecimals)

  if (displayDecimals !== 0) {
    amountStr = padDecimals(amountStr, displayDecimals)
  }

  if (useCommas) {
    return numberWithCommas(amountStr)
  }

  return amountStr
}