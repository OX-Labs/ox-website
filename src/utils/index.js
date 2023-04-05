import React, { useEffect, useRef } from "react";
import { format as formatDateFn } from "date-fns";
import { useWeb3React } from '@web3-react/core';
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

export async function getTokenPrice(token,chainId=56){
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
    (err)=>{
      return 0;
    }
  )
  return tokenPrice?tokenPrice.price:0;
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