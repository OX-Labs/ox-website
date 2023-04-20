import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';
import { useChainId } from '@/utils';
import ComponentTabs from './components/ComponentTabs'
import SankeyGraph from './components/SankeyGraph'
import { PairsTable } from './components/TableComponents'
import AcySymbolNav from './components/AcySymbolNav'
import AcySymbol from './components/AcySymbol'
import ExchangeTVChart from './components/ExchangeTVChart/ExchangeTVChart'
import TradeComponent from './components/TradeComponent'
import styles from './styles.less'

const apiUrlPrefix = "https://stats.acy.finance/api"

const Trade = props => {

  const { account, library } = useWeb3React()
  const { chainId }= useChainId()

  const [tableContent, setTableContent] = useState('Routes')
  const [topVolumePairs, setTopVolumePairs] = useState([])
  const [activeToken0, setActiveToken0] = useState({"address": "0x70535f31070b83bc945fc2c0641658b140fb2a81", "symbol": "BNB"})
  const [activeToken1, setActiveToken1] = useState({"address": "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39", "symbol": "BUSD"})
  const [showChart, setShowChart] = useState(true)
  const [favTokens, setFavTokens] = useState(JSON.parse(localStorage.getItem('tokens_symbol')))

  useEffect(async () => {
    let pairlist = await axios.get(`${apiUrlPrefix}/tokens-overview?chainId=${chainId}&orderBy=topvolume`).then(res => res.data).catch(e => { })
    let pairs = []
    for (let i = 0; i < pairlist.length; i++) {
      pairs.push({
        name: pairlist[i].token0.replace('Wrapped ', 'W').replace('(PoS)', '') + '/' + pairlist[i].token1.replace('Wrapped ', 'W').replace('(PoS)', ''),
        address0: pairlist[i].token0Address,
        address1: pairlist[i].token1Address,
        price: (pairlist[i].token0Price / pairlist[i].token1Price).toPrecision(2),
        price_24h: pairlist[i].priceVariation,
        volume: parseFloat(pairlist[i].volumeUSD).toFixed(2),
        swaps: pairlist[i].txCount,
        liquidity: pairlist[i].liquidity,
        exchange: pairlist[i].exchange,
      })
    }
    setTopVolumePairs(pairs)
  }, [])

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
              activeToken0={activeToken0}
              activeToken1={activeToken1}
              onSelectToken0={token => { setActiveToken0(token); }}
              onSelectToken1={token => { setActiveToken1(token); }}
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
                options={['Routes', 'Volume']}
                onChange={item => { setTableContent(item) }}
              />
            </div>
            <div className={`${styles.colItem} ${styles.priceChart}`} style={{ padding: '10px', width: '100%', borderTop: '0.75px solid #333333', textAlign: 'center' }}>
              <div className={styles.positionsTable}>
                {tableContent == 'Routes' && (
                  <SankeyGraph token0={activeToken0} token1={activeToken1} />
                )}
                {tableContent == 'Volume' && (
                  <PairsTable dataSource={topVolumePairs} />
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