import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';
import { useChainId } from '@/utils';
import { PairsTable, OpenOrdersTable, OrderHistoryTable } from '@/components/TableComponents'
import AcySymbolNav from '@/components/AcySymbolNav'
import AcySymbol from '@/components/AcySymbol'
import ExchangeTVChart from '@/components/ExchangeTVChart/ExchangeTVChart'
import TradeComponent from '@/components/TradeComponent'
import OxTabs from '@/components/OxTabs'
import OrderBook from '@/components/OxOrderbook/OrderBook.js';
import styles from './styles.less'
import { random } from 'lodash';

const apiUrlPrefix = "https://stats.acy.finance/api"

const Trade = props => {

  const { account, active, library } = useWeb3React()
  const { chainId } = useChainId()

  const [topVolumePairs, setTopVolumePairs] = useState([])
  const [activeToken0, setActiveToken0] = useState({ "address": "0xeCDCB5B88F8e3C15f95c720C51c71c9E2080525d", "symbol": "BNB" })
  const [activeToken1, setActiveToken1] = useState({ "address": "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39", "symbol": "BUSD" })
  const [curPrice, setCurPrice] = useState(0);
  const [priceDeltaPercent, setPriceDeltaPercent] = useState(0);
  const [showChart, setShowChart] = useState(true)
  const [favTokens, setFavTokens] = useState(JSON.parse(localStorage.getItem('tokens_symbol')))

  // useEffect(async () => {
  //   let pairlist = await axios.get(`${apiUrlPrefix}/tokens-overview?chainId=${chainId}&orderBy=topvolume`).then(res => res.data).catch(e => { })
  //   let pairs = []
  //   for (let i = 0; i < pairlist?.length; i++) {
  //     pairs.push({
  //       name: pairlist[i].token0.replace('Wrapped ', 'W').replace('(PoS)', '') + '/' + pairlist[i].token1.replace('Wrapped ', 'W').replace('(PoS)', ''),
  //       address0: pairlist[i].token0Address,
  //       address1: pairlist[i].token1Address,
  //       price: (pairlist[i].token0Price / pairlist[i].token1Price).toPrecision(2),
  //       price_24h: pairlist[i].priceVariation,
  //       volume: parseFloat(pairlist[i].volumeUSD).toFixed(2),
  //       swaps: pairlist[i].txCount,
  //       liquidity: pairlist[i].liquidity,
  //       exchange: pairlist[i].exchange,
  //     })
  //   }
  //   setTopVolumePairs(pairs)
  // }, [])

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
    ]
  }

  const openOrders = [
    {
      name: 'QH/USDT',
      date: '2023/06/05 21:42',
      type: 'Limit',
      side: 'Buy',
      price: '0.0085300 USDT',
      filled: '1,234',
      all: '4,806 QH',
      total: '40.99518 USDT'
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 20:15',
      type: 'Limit',
      side: 'Sell',
      price: '0.0090400 USDT',
      filled: '1,040',
      all: '2,765 QH',
      total: '24.9956 USDT'
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 20:08',
      type: 'Limit',
      side: 'Sell',
      price: '0.0092680 USDT',
      filled: '0',
      all: '3,776 QH',
      total: '34.995968 USDT'
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 19:35',
      type: 'Limit',
      side: 'Sell',
      price: '0.0094690 USDT',
      filled: '2,641',
      all: '3,862 QH',
      total: '28.994078 USDT'
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 17:39',
      type: 'Limit',
      side: 'Buy',
      price: '0.0070880 USDT',
      filled: '3,017',
      all: '3,527 QH',
      total: '24.999376 USDT'
    },
  ]

  const orderHistory = [
    {
      name: 'QH/USDT',
      date: '2023/06/05 21:42',
      type: 'Limit',
      side: 'Buy',
      price: '0.0085300 USDT',
      filled: '1,234',
      all: '4,806 QH',
      avg: '0.0084687 USDT',
      filledAmount: '32.75684000 USDT',
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 20:15',
      type: 'Limit',
      side: 'Sell',
      price: '0.0090400 USDT',
      filled: '1,040',
      all: '2,765 QH',
      avg: '0.0085300 USDT',
      filledAmount: '23.99489000 USDT',
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 20:08',
      type: 'Limit',
      side: 'Sell',
      price: '0.0092680 USDT',
      filled: '0',
      all: '3,776 QH',
      avg: '0.0085053 USDT',
      filledAmount: '40.87658000 USDT',
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 19:35',
      type: 'Limit',
      side: 'Sell',
      price: '0.0094690 USDT',
      filled: '2,641',
      all: '3,862 QH',
      avg: '0.0084986 USDT',
      filledAmount: '29.88118000 USDT',
    },
    {
      name: 'QH/USDT',
      date: '2023/06/05 17:39',
      type: 'Limit',
      side: 'Buy',
      price: '0.0070880 USDT',
      filled: '3,017',
      all: '3,527 QH',
      avg: '0.83300 USDT',
      filledAmount: '26.99753 USDT',
    },
  ]

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
              activeToken={activeToken0}
              setActiveToken={setActiveToken0}
              latestPricePercentage={priceDeltaPercent}
              latestPrice={curPrice}
              showChart={showChart}
              setShowChart={() => setShowChart(!showChart)}
              setFavTokens={()=>{setFavTokens(JSON.parse(localStorage.getItem('tokens_symbol')))}}
            />

            <div style={{ borderTop: '1px solid black' }}>
              {showChart &&
                <div>
                  <ExchangeTVChart
                    chartTokenSymbol={activeToken0.symbol}
                    pageName="Trade"
                    fromToken={activeToken0.address}
                    chainId={chainId}
                  />
                </div>
              }
            </div>
          </div>

          <div className={styles.bottomWrapper}>
            <OxTabs>
              <div tab="Open Orders" key="1">
                <OpenOrdersTable dataSource={openOrders}/>
                {/* <PairsTable dataSource={topVolumePairs} /> */}
              </div>
              <div tab="Order History" key="2">
                <OrderHistoryTable dataSource={orderHistory} />
              </div>
              <div tab="Open Positions" key="3">
              </div>
              <div tab="Position History" key="4">
              </div>
              <div tab="Assets" key="5">
              </div>
              <div tab="Bots" key="6">
              </div>
            </OxTabs>
          </div>
        </div>
        <div className={`${styles.colItem} ${styles.orderBook}`}>
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
              active={active}
              library={library}
              chainId={chainId}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trade