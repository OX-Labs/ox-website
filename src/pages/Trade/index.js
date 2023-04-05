import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';
import ComponentTabs from './components/ComponentTabs'
import SankeyGraph from './components/SankeyGraph'
import { TradeHistoryTable, PoolsActivityTable } from './components/TableComponents'
import AcySymbolNav from './components/AcySymbolNav'
import AcySymbol from './components/AcySymbol'
import ExchangeTVChart from './components/ExchangeTVChart/ExchangeTVChart'
import TradeComponent from './components/TradeComponent'
import styles from './styles.less'

const apiUrlPrefix = "https://stats.acy.finance/api"

const Trade = props => {

  // test on polygon
  const chainId = 137;
  const { account, library } = useWeb3React();

  const [tableContent, setTableContent] = useState('Trade History')
  const [tradeHistory, setTradeHistory] = useState([])
  const [activeToken0, setActiveToken0] = useState({ symbol: "USDT", address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f" })
  const [activeToken1, setActiveToken1] = useState({ symbol: "USDC", address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174" })
  const [showChart, setShowChart] = useState(true)
  const [favTokens, setFavTokens] = useState(JSON.parse(localStorage.getItem('tokens_symbol')))

  const test_poolsActivity = [
    {
      type: 'remove',
      token: 'BONE',
      tokenAmount: '22.11',
      poolAmount: '0.0125323',
      token_value: '$21.49',
    },
    {
      type: 'add',
      token: 'USDC',
      tokenAmount: '99.99',
      poolAmount: '0.0046699',
      token_value: '$8',
    },
    {
      type: 'add',
      token: 'SYN',
      tokenAmount: '4.427',
      poolAmount: '3.7',
      token_value: '$6346',
    },
  ]

  useEffect(() => {
    const getTradeHistory = async () => {
      let address0 = activeToken0.address < activeToken1.address ? activeToken0.address : activeToken1.address
      let address1 = activeToken0.address < activeToken1.address ? activeToken1.address : activeToken0.address
      let history = await axios.get(`${apiUrlPrefix}/rates?token0=${address0}&token1=${address1}&chainId=${chainId}`)
        .then((res) => res.data.rates)
        .catch((e) => [])
      setTradeHistory(history)
    }
    getTradeHistory()
  }, [activeToken0, activeToken1])

  return (
    <div className={styles.main}>
      <div className={styles.rowFlexContainer}>
        <div className={`${styles.colItem} ${styles.priceChart}`}>
          <div>
            <AcySymbolNav data={favTokens}
              onChange={item => {
                let idx = JSON.parse(localStorage.getItem('tokens_symbol')).findIndex(ele=>ele==item)
                setActiveToken0({
                  symbol: item,
                  address: JSON.parse(localStorage.getItem('token'))[idx],
                })
              }}
            />
            <AcySymbol
              activeToken0={activeToken0.symbol}
              activeToken1={activeToken1.symbol}
              latestPricePercentage={1}
              showChart={showChart}
              setShowChart={() => setShowChart(!showChart)}
            />

            <div style={{ borderTop: '0.75px solid #333333' }}>
              {showChart &&
                <div>
                  <ExchangeTVChart
                    chartTokenSymbol={activeToken1.symbol}
                    pageName="Trade"
                    fromToken={activeToken0.address < activeToken1.address ? activeToken0.address : activeToken1.address}
                    toToken={activeToken0.address < activeToken1.address ? activeToken1.address : activeToken0.address}
                    chainId={chainId}
                  />
                </div>
              }
            </div>
          </div>

          <div className={styles.bottomWrapper}>
            <div className={styles.chartTokenSelectorTab}>
              <ComponentTabs
                option={tableContent}
                options={['Routes', 'Trade History', 'Pools Activity']}
                onChange={item => { setTableContent(item) }}
              />
            </div>
            <div className={`${styles.colItem} ${styles.priceChart}`} style={{ padding: '10px', width: '100%', borderTop: '0.75px solid #333333' }}>
              <div className={styles.positionsTable}>
                {tableContent == 'Routes' && (
                  <SankeyGraph />
                )}
                {tableContent == 'Trade History' && (
                  <TradeHistoryTable
                    dataSource={tradeHistory}
                    token0={activeToken0.address < activeToken1.address ? activeToken0.symbol : activeToken1.symbol}
                    token1={activeToken0.address < activeToken1.address ? activeToken1.symbol : activeToken0.symbol} />
                )}
                {tableContent == 'Pools Activity' && (
                  <PoolsActivityTable dataSource={test_poolsActivity} pool="ETH" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.colItem} ${styles.swapComponent}`}>
          <div className={styles.trade} style={{ padding: '10px', border: 'none' }}>
            <TradeComponent
              token0={activeToken0}
              token1={activeToken1}
              onSelectToken0={token => { setActiveToken0(token); }}
              onSelectToken1={token => { setActiveToken1(token); }}
              account={account}
              library={library}
              chainId={chainId}
              setFavTokens={() => { setFavTokens(JSON.parse(localStorage.getItem('tokens_symbol'))) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trade