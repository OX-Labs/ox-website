import React, { useState, useEffect } from 'react';
import { Button, Input, Icon } from 'antd';
import { SwapOutlined } from '@ant-design/icons'
import { getUserTokenBalance } from '@/utils'
import { getTokens, INITIAL_ALLOWED_SLIPPAGE } from '@/constants/trade';
import { useConnectWallet } from '@/components/ConnectWallet';
import styles from './styles.less';
import CurrencyCard from '@/components/CurrencyCard';
import AcyDescriptions from '@/components/AcyDescriptions'
import ComponentButton from '@/components/ComponentButton'
import TokenSelectorDrawer from '@/components/TokenSelectorDrawer';

export default function TradeComponent(props) {
  const {
    token0,
    token1,
    onSelectToken0,
    onSelectToken1,
    isLockedToken1 = false,
    account,
    library,
    chainId,
    setFavTokens,
  } = props;

  const tokenlist = getTokens(chainId)

  const [visible, setVisible] = useState(null);
  const [before, setBefore] = useState(true);
  const [token0Balance, setToken0Balance] = useState('0');
  const [token1Balance, setToken1Balance] = useState('0');
  const [token0Amount, setToken0Amount] = useState('');
  const [token1Amount, setToken1Amount] = useState('');
  const [token0BalanceShow, setToken0BalanceShow] = useState(false);
  const [token1BalanceShow, setToken1BalanceShow] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [slippageTolerance, setSlippageTolerance] = useState(INITIAL_ALLOWED_SLIPPAGE / 100);
  const [inputSlippageTol, setInputSlippageTol] = useState(INITIAL_ALLOWED_SLIPPAGE / 100);
  const [slippageError, setSlippageError] = useState('');
  const [deadline, setDeadline] = useState(0);

  useEffect(() => {
    if (!tokenlist) return
    setVisible(null);
    setBefore(true);
    setToken0Balance('0');
    setToken1Balance('0');
    setToken0Amount('');
    setToken1Amount('');
    setToken0BalanceShow(false);
    setToken1BalanceShow(false);
    setSlippageTolerance(INITIAL_ALLOWED_SLIPPAGE / 100);
    setInputSlippageTol(INITIAL_ALLOWED_SLIPPAGE / 100);
    setSlippageError('');
    setDeadline();
    setShowDescription(false);
  }, [chainId])

  useEffect(() => {
    if (!account || !chainId || !library) {
      setToken0BalanceShow(false);
      setToken1BalanceShow(false);
      return;
    }
    const _token0 = tokenlist[0];
    const _token1 = tokenlist[3];
    onSelectToken0(_token0);
    onSelectToken1(_token1);
    async function refreshBalances() {
      setToken0Balance(await getUserTokenBalance(_token0, chainId, account, library).catch(e => console.log("refrersh balances error", e)));
      setToken0BalanceShow(true);
      setToken1Balance(await getUserTokenBalance(_token1, chainId, account, library).catch(e => console.log("refrersh balances error", e)));
      setToken1BalanceShow(true);
    }
    try {
      refreshBalances();
    } catch {
      e => console.log("refrersh balances error", e)
    }
  }, [account, tokenlist]);

  // token1Amount is changed according to token0Amount
  const t0Changed = async (e) => {

  }

  // token0Amount is changed according to token1Amount
  const t1Changed = async (e) => {

  }

  useEffect(async () => {
    // console.log("t0change")
    await t0Changed(token0Amount);
  }, [token0, token1, slippageTolerance, chainId, library, account]);

  useEffect(async () => {
    // console.log("t1change")
    await t1Changed(token1Amount);
  }, [token0, token1, slippageTolerance, chainId, library, account]);

  const onCoinClick = async token => {
    setVisible(false)
    if (before) {
      onSelectToken0(token);
      setToken0Balance(await getUserTokenBalance(token, chainId, account, library));
      setToken0BalanceShow(true);
    } else {
      onSelectToken1(token);
      setToken1Balance(await getUserTokenBalance(token, chainId, account, library));
      setToken1BalanceShow(true);
    }
  };

  const connectWalletByLocalStorage = useConnectWallet();

  const onConfirmationClick = () => {
    if (!account) {
      connectWalletByLocalStorage();
    } else {

    }
  }

  const getPrimaryText = () => {
    if (!account) {
      return 'Connect Wallet'
    }
    return 'Trade'
  }

  return (
    <div>
      <CurrencyCard
        title={token0BalanceShow && `Balance: ${parseFloat(token0Balance).toFixed(3)}`}
        coin={(token0 && token0) || 'Select'}
        logoURI={token0 && token0.logoURI}
        token={token0Amount}
        showBalance={token0BalanceShow}
        onChoseToken={() => {
          setVisible(true);
          setBefore(true);
        }}
        onChangeToken={e => {setShowDescription(true)}}
      />
      <div
        className={styles.arrow}
        disabled={isLockedToken1}
        onClick={() => {
          if (!isLockedToken1) {
            onSelectToken1(token0);
            setToken1Amount(token0Amount);
            setToken1Balance(token0Balance);

            onSelectToken0(token1);
            setToken0Amount(token1Amount);
            setToken0Balance(token1Balance);
          }
        }}
      >
        <SwapOutlined rotate={90} style={{ fontSize: '16px', color: '#ffffffb3' }} />
      </div>

      <CurrencyCard
        title={token1BalanceShow && `Balance: ${parseFloat(token1Balance).toFixed(3)}`}
        coin={(token1 && token1) || 'Select'}
        logoURI={token1 && token1.logoURI}
        token={token1Amount}
        showBalance={token1BalanceShow}
        onChoseToken={() => {
          setVisible(true);
          setBefore(false);
        }}
        onChangeToken={e => {setShowDescription(true)}}
        isLocked={isLockedToken1}
      />

      {showDescription ?
        <AcyDescriptions>
          <div className={styles.breakdownTopContainer}>
            <div className={styles.slippageContainer}>
              <span style={{ fontWeight: 600 }}>Slippage tolerance</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Input
                  className={styles.input}
                  value={inputSlippageTol || ''}
                  onChange={e => {
                    setInputSlippageTol(e.target.value);
                  }}
                  suffix={<strong>%</strong>}
                />
                <Button
                  type="primary"
                  style={{ marginLeft: '10px', background: '#0b0d11', borderColor: '#212429', borderRadius: 5 }}
                  onClick={() => {
                    if (isNaN(inputSlippageTol)) {
                      setSlippageError('Please input valid slippage value!');
                    } else {
                      setSlippageError('');
                      setSlippageTolerance(parseFloat(inputSlippageTol));
                    }
                  }}
                >
                  Set
                </Button>
              </div>
              {slippageError.length > 0 && (
                <span style={{ fontWeight: 600, color: '#c6224e' }}>{slippageError}</span>
              )}
            </div>
            <div className={styles.slippageContainer}>
              <span style={{ fontWeight: 600, marginBottom: '10px' }}>Transaction deadline</span>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: '33.6px',
                  marginTop: '10px',
                }}
              >
                <Input
                  className={styles.input}
                  type="number"
                  value={Number(deadline).toString()}
                  onChange={e => setDeadline(e.target.valueAsNumber || 0)}
                  placeholder={30}
                  suffix={<strong>minutes</strong>}
                />
              </div>
            </div>
          </div>
        </AcyDescriptions>
        : null}

      <div className={styles.centerButton}>
        <ComponentButton
          style={{ marginTop: '25px' }}
          // disabled={account && (token0Amount == '' || token1Amount == '')}
          onClick={onConfirmationClick}
        >
          {getPrimaryText()}
        </ComponentButton>
      </div>

      <TokenSelectorDrawer
        width={400}
        visible={visible}
        onCancel={()=>{setVisible(false)}}
        onCoinClick={onCoinClick}
        setFavTokens={setFavTokens}
        chainId={chainId}
      />

    </div>
  )
}