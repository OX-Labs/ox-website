import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';
import { useChainId } from '@/utils';
import SankeyGraph from './components/SankeyGraph'
import { PairsTable } from './components/TableComponents'
import AcySymbolNav from './components/AcySymbolNav'
import AcySymbol from './components/AcySymbol'
import ExchangeTVChart from './components/ExchangeTVChart/ExchangeTVChart'
import TradeComponent from './components/TradeComponent'
import OxTabs from '@/components/OxTabs'
import OrderBook from '@/components/OxOrderbook/OrderBook.js';
import styles from './styles.less'
import { random } from 'lodash';

const apiUrlPrefix = "https://stats.acy.finance/api"

const Trade = props => {

  const { account, library } = useWeb3React()
  const { chainId } = useChainId()

  const [topVolumePairs, setTopVolumePairs] = useState([])
  const [activeToken0, setActiveToken0] = useState({ "address": "0x70535f31070b83bc945fc2c0641658b140fb2a81", "symbol": "BNB" })
  const [activeToken1, setActiveToken1] = useState({ "address": "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39", "symbol": "BUSD" })
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

  const book = {
    asks: [
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
    ],
    bids: [
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
      {size: random(90,100,true), price: random(27380, 27480, true), amount: random(1,30,true)},
    ]
  }

  return (
    <div className={styles.main}>
      <div className={styles.rowFlexContainer}>
        <div className={`${styles.colItem} ${styles.priceChart}`}>
          <div style={{ borderBottom: '10px solid black' }}>
            <AcySymbolNav data={favTokens}
              onChange={item => {
                let idx = JSON.parse(localStorage.getItem('tokens_symbol')).findIndex(ele => ele == item)
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

            <div style={{ borderTop: '1px solid black' }}>
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
            <OxTabs>
              <div tab="Routes" key="1" style={{ textAlign: 'center', paddingTop: 20 }}>
                <SankeyGraph token0={activeToken0} token1={activeToken1} />
              </div>
              <div tab="Volume" key="2">
                <PairsTable dataSource={topVolumePairs} />
              </div>
            </OxTabs>
          </div>
        </div>
        <div className={`${styles.colItem} ${styles.swapComponent}`}>
          <OrderBook asks={book.asks} bids={book.bids} />
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