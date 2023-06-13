import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useConnectWallet } from '@/components/ConnectWallet';
import ComponentButton from '@/components/ComponentButton';
import ComponentTabs from '@/components/ComponentTabs';

import styles from './styles.less';

const TradeComponent = props => {

  const {
    account,
    active,
    library,
    chainId,
    token0,
  } = props

  const connectWalletByLocalStorage = useConnectWallet()

  ///////////// read contract /////////////


  ///////////// for UI /////////////

  const optionMode = ['Buy', 'Sell']
  const [mode, setMode] = useState('Buy')
  const [orderType, setOrderType] = useState('Limit')
  const [limitPrice, setLimitPrice] = useState()
  const [amount, setAmount] = useState()
  const [usdValue, setUsdValue] = useState()

  const getPrimaryText = () => {
    if (!active) {
      return 'Connect Wallet'
    }
    return mode == 'Buy' ? 'Buy / Long' : 'Sell / Short'
  }

  ///////////// write contract /////////////

  const onClickPrimary = async () => {
    if (!account) {
      connectWalletByLocalStorage()
      return
    }

    if (orderType == 'Limit') {

    } else {

    }
  }

  return (
    <div className={styles.main}>
      <div style={{ backgroundColor: 'transparent', border: 'none', margin: '-8px' }}>
        <div className={styles.modeSelector}>
          <ComponentTabs
            option={mode}
            options={optionMode}
            onChange={(mode) => { setMode(mode) }}
          />
        </div>

        <div className={styles.rowFlexContainer}>
          <div style={{ padding: '0 5px' }}>
            <div style={{ marginBottom: 15 }}>
              <ComponentTabs
                option={orderType}
                options={['Limit', 'Market']}
                type="inline"
                onChange={e => { setOrderType(e) }}
              />
            </div>

            {orderType == "Limit" &&
              <div style={{ marginTop: 10 }}>
                <span>Price (USDT)</span>
                <div className={styles.inputContainer} style={{ display: 'flow-root', textAlignLast: 'right', padding: '8px 10px 6px 10px' }}>
                  <div style={{ display: 'flex', fontSize: '16px', marginBottom: '3px' }}>
                    <input
                      className={styles.optionInput}
                      style={{ width: '100%', background: 'transparent' }}
                      placeholder="Price"
                      value={limitPrice}
                      onChange={e => {
                        setLimitPrice(e.target.value)
                      }}
                    />
                    <span className={styles.inputLabel}>USDT</span>
                  </div>
                </div>
              </div>}
            {orderType == "Limit" &&
              <div style={{ marginTop: 10 }}>
                <span>Amount ({token0.symbol})</span>
                <div className={styles.inputContainer} style={{ display: 'flow-root', textAlignLast: 'right', padding: '8px 10px 6px 10px' }}>
                  <div style={{ display: 'flex', fontSize: '16px', marginBottom: '3px' }}>
                    <input
                      className={styles.optionInput}
                      style={{ width: '100%', background: 'transparent' }}
                      placeholder="Amount"
                      value={amount}
                      onChange={e => {
                        setAmount(e.target.value)
                      }}
                    />
                    <span className={styles.inputLabel}>{token0.symbol}</span>
                  </div>
                </div>
              </div>}
            <div style={{ marginTop: 10 }}>
              <span>Total (USDT)</span>
              <div className={styles.inputContainer} style={{ display: 'flow-root', textAlignLast: 'right', padding: '8px 10px 6px 10px' }}>
                <div style={{ display: 'flex', fontSize: '16px', marginBottom: '3px' }}>
                  <input
                    className={styles.optionInput}
                    style={{ width: '100%', background: 'transparent' }}
                    placeholder="Total"
                    value={usdValue}
                    onChange={e => {
                      setUsdValue(e.target.value)
                    }}
                  />
                  <span className={styles.inputLabel}>USDT</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 15 }}>
              <div>
                Available
                <span style={{color: 'white', marginLeft: 5}}>0.13 USDT</span>
              </div>
              <div>
                Max Buy
                <span style={{color: 'white', marginLeft: 5}}>0.0000533 BTC</span>
              </div>
            </div>
          </div>

          <ComponentButton
            style={{ margin: '25px 0 0 0', width: '100%' }}
            onClick={onClickPrimary}
            disabled={account && !(orderType == 'Market' || limitPrice != '' && limitPrice != '0')}
          >
            {getPrimaryText()}
          </ComponentButton>

        </div>

      </div>
    </div>
  );
}

export default TradeComponent