import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, Radio, Input } from 'antd'
import { Area } from '@ant-design/charts';
import { BankOutlined, BarChartOutlined, LineChartOutlined } from '@ant-design/icons'
import OxTabs from '@/components/OxTabs'
import { YearTable, TokenHoldingTable, FeesTable } from '@/components/TableComponents'
import eth from '@/assets/eth.svg'
import investIcon from '@/assets/invest_icon.png'
import styles from './styles.less'

const areaData = [
  {
    "Date": "2020-01",
    "scales": 1998
  },
  {
    "Date": "2020-02",
    "scales": 1850
  },
  {
    "Date": "2020-03",
    "scales": 1720
  },
  {
    "Date": "2020-04",
    "scales": 1818
  },
  {
    "Date": "2020-05",
    "scales": 1920
  },
  {
    "Date": "2020-06",
    "scales": 1802
  },
  {
    "Date": "2020-07",
    "scales": 1945
  },
  {
    "Date": "2020-08",
    "scales": 1856
  },
  {
    "Date": "2020-09",
    "scales": 2107
  },
  {
    "Date": "2020-10",
    "scales": 2140
  },
  {
    "Date": "2020-11",
    "scales": 2311
  },
  {
    "Date": "2020-12",
    "scales": 1972
  },
  {
    "Date": "2021-01",
    "scales": 1760
  },
  {
    "Date": "2021-02",
    "scales": 1824
  },
  {
    "Date": "2021-03",
    "scales": 1801
  },
  {
    "Date": "2021-04",
    "scales": 2001
  },
  {
    "Date": "2021-05",
    "scales": 1640
  },
  {
    "Date": "2021-06",
    "scales": 1502
  },
  {
    "Date": "2021-07",
    "scales": 1621
  },
  {
    "Date": "2021-08",
    "scales": 1480
  },
  {
    "Date": "2021-09",
    "scales": 1549
  },
  {
    "Date": "2021-10",
    "scales": 1390
  },
  {
    "Date": "2021-11",
    "scales": 1325
  },
  {
    "Date": "2021-12",
    "scales": 1250
  },
  {
    "Date": "2022-01",
    "scales": 1394
  },
  {
    "Date": "2022-02",
    "scales": 1406
  },
  {
    "Date": "2022-03",
    "scales": 1578
  },
  {
    "Date": "2022-04",
    "scales": 1465
  },
  {
    "Date": "2022-05",
    "scales": 1689
  },
  {
    "Date": "2022-06",
    "scales": 1755
  },
  {
    "Date": "2022-07",
    "scales": 1495
  },
  {
    "Date": "2022-08",
    "scales": 1508
  },
  {
    "Date": "2022-09",
    "scales": 1433
  },
  {
    "Date": "2022-10",
    "scales": 1344
  },
  {
    "Date": "2022-11",
    "scales": 1201
  },
  {
    "Date": "2022-12",
    "scales": 1065
  },
  {
    "Date": "2023-01",
    "scales": 1255
  },
  {
    "Date": "2023-02",
    "scales": 1429
  },
  {
    "Date": "2023-03",
    "scales": 1398
  },
  {
    "Date": "2023-04",
    "scales": 1678
  },
  {
    "Date": "2023-05",
    "scales": 1524
  },
  {
    "Date": "2023-06",
    "scales": 1688
  },
  {
    "Date": "2023-07",
    "scales": 1500
  },
  {
    "Date": "2023-08",
    "scales": 1670
  },
  {
    "Date": "2023-09",
    "scales": 1734
  },
  {
    "Date": "2023-10",
    "scales": 1699
  },
  {
    "Date": "2023-11",
    "scales": 1508
  },
  {
    "Date": "2023-12",
    "scales": 1680
  },
]

const Overview = ({ sharePrice, aum, anualizedReturn }) => {
  const [priceType, setPriceType] = useState('Share Price')

  const yearData = [
    {
      year: 2023,
      jan: 34.29,
      feb: 1.72,
      mar: 13.87,
      apr: 3.67,
      may: -1.04,
      jun: '-',
      jul: '-',
      aug: '-',
      sep: '-',
      oct: '-',
      nov: '-',
      dec: '-',
    },
    {
      year: 2022,
      jan: -26.68,
      feb: 8.78,
      mar: 13.57,
      apr: -16.71,
      may: -30.13,
      jun: -45.61,
      jul: 59.66,
      aug: -7.30,
      sep: -12.00,
      oct: 18.90,
      nov: -18.10,
      dec: -7.41,
    },
    {
      year: 2021,
      jan: '-',
      feb: '-',
      mar: '-',
      apr: '-',
      may: -10.01,
      jun: -13.30,
      jul: 8.32,
      aug: 39.60,
      sep: -11.74,
      oct: 43.29,
      nov: 6.32,
      dec: -20.44,
    },
  ]

  const manager = '0xf5be8b4c82b8a681bacf357cfb712ab9e9296cb2'

  return (
    <div className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.cardContent}>
          <div className={styles.row}>
            <div className={styles.title}>
              {/* <BankOutlined className={styles.logo} /> */}
              {aum}
            </div>
            <span className={styles.content}>Assets Under Management</span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.row}>
            <div className={styles.title} style={{ color: '#34d399' }}>
              {/* <BarChartOutlined className={styles.logo} /> */}
              +238.76%
            </div>
            <span className={styles.content}>Accumulated Return</span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.row}>
            <div className={styles.title} style={{ color: '#34d399' }}>
              {/* <LineChartOutlined className={styles.logo} style={{ color: '#34d399' }} /> */}
              {anualizedReturn}
            </div>
            <span className={styles.content}>Annualized Return</span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.row}>
            <div className={styles.title} style={{ color: '#34d399' }}>
              +18.62%
            </div>
            <span className={styles.content}>2023 Return</span>
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <div style={{ paddingLeft: '1rem' }}>
          <div>
            <span
              style={{ color: priceType == 'Share Price' ? 'white' : '#656872', cursor: 'pointer', marginRight: 10 }}
              onClick={() => { setPriceType('Share Price') }}
            >
              Share Price
            </span>
            <span
              style={{ color: priceType == 'Assets Under Management' ? 'white' : '#656872', cursor: 'pointer' }}
              onClick={() => { setPriceType('Assets Under Management') }}
            >
              Assets Under Management
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <div className={styles.mainTitle}>{priceType == 'Share Price' ? sharePrice : aum}</div>
              <div style={{ fontSize: 16, color: '#ef4444', marginLeft: 12 }}>-1.80%</div>
            </div>
            <div className={styles.priceRadioGroup} style={{ marginRight: '3rem' }}>
              <Radio.Group defaultValue="1m">
                <Radio.Button value="1m">1M</Radio.Button>
                <Radio.Button value="3m">3M</Radio.Button>
                <Radio.Button value="6m">6M</Radio.Button>
                <Radio.Button value="1y">1Y</Radio.Button>
                <Radio.Button value="all">ALL</Radio.Button>
              </Radio.Group>
            </div>
          </div>
        </div>
        <div style={{ paddingRight: '2rem' }}>
          <Area
            data={areaData}
            xField={'Date'}
            yField={'scales'}
            xAxis={{ tickCount: 5 }}
            yAxis={{ visible: false, grid: { visible: false } }}
            line={{ style: { stroke: '#0030d4' } }}
            areaStyle={{ fill: 'l(270) 0:#0e1118 1:#0030d4' }}
          />
        </div>
      </div>

      <div className={styles.cardContent} style={{ marginTop: '2rem' }}>
        <YearTable dataSource={yearData} />
      </div>

      <div className={styles.cardContent} style={{ marginTop: '2rem', marginBottom: '4rem', display: 'flex', alignItems: 'center' }}>
        <div className={styles.mainTitle}>Manager</div>
        <div style={{ marginLeft: 20 }}>
          <span style={{ marginRight: 5, fontSize: "1.2rem", color: '#656872' }}>{manager}</span>
          <svg height={15} style={{ marginTop: 12, cursor: 'pointer' }} fill="#656872" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" onClick={() => { cnavigator.clipboard.writeText(manager) }}><path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z" /></svg>
        </div>
      </div>
    </div>
  )
}

const Orders = ({ }) => {

  const tokenHoldings = [
    {
      name: 'Liquid staked Ether 2.0',
      symbol: 'stETH',
      logo: eth,
      time: '2023-06-12 20:29',
      balancein: '$17,869.5628',
      balanceout: '$1,847.4636',
      profit: 1.03,
      allocation: '28.47%',
    },
    {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logo: eth,
      time: '2023-06-12 20:11',
      balancein: '$13.5423',
      balanceout: '$1,847.6612',
      profit: 1.03,
      allocation: '34.83%',
    },
  ]

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle} style={{ marginBottom: '2rem' }}>Token Holdings</div>
      <div className={styles.cardContent}>
        <TokenHoldingTable dataSource={tokenHoldings} />
      </div>
    </div>
  )
}

const Fees = ({ }) => {

  const fees = [
    {
      feeType: 'Management Fee',
      rate: '2%',
    },
    {
      feeType: 'Carry',
      rate: '20%',
    },
  ]

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContent}>
        <FeesTable dataSource={fees} />
      </div>
    </div>
  )
}

const Investment = props => {
  const [selectedVault, setSelectedVault] = useState('USDT')
  const [tokenAmount, setTokenAmount] = useState('')
  const [anualizedReturn, setAnualizedReturn] = useState('34.56%')
  const [sharePrice, setSharePrice] = useState('$2.12')
  const [aum, setAum] = useState('$1.35M')

  const tokenLogo = {
    USDT: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
    USDC: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
    BNB: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
    ETH: eth,
  }

  const onSwitchVault = (_vault, _anualizedReturn, _sharePrice, _aum) => {
    setSelectedVault(_vault)
    setSharePrice(_sharePrice)
    setAum(_aum)
    setAnualizedReturn(_anualizedReturn)
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.cardContent}
          style={{ cursor: 'pointer', border: selectedVault == 'USDT' ? '1px solid #cbff00' : 'none' }}
          onClick={() => { onSwitchVault('USDT', '34.56%', '$2.12', '$1.35M') }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div className={styles.vaultTitle}>
              <img style={{ borderRadius: 20, marginRight: 10, height: 30, width: 30 }} src={investIcon} />
              Flash Arbitrage: USDT
            </div>
            {/* <img style={{ height: 25, width: 25 }} src={tokenLogo['USDT']} /> */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Invested Asset</span>
            <div>
              <img style={{ height: 18, width: 18, marginRight: 5 }} src={tokenLogo['USDT']} />
              <span>USDT</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Anualized Return</span>
            <span>34.56%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Share Price</span>
            <span>$2.12</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>AUM</span>
            <span>$1.35M</span>
          </div>
          <Area
            style={{ height: 300, width: 350, margin: '0px -20px -130px -50px' }}
            data={areaData}
            xField={'Date'}
            yField={'scales'}
            xAxis={{ visible: false }}
            yAxis={{ visible: false, grid: { visible: false } }}
            line={{ style: { stroke: '#0030d4' } }}
            areaStyle={{ fill: 'transparent' }}
            tooltip={false}
          />
        </div>
        <div className={styles.cardContent}
          style={{ cursor: 'pointer', border: selectedVault == 'USDC' ? '1px solid #cbff00' : 'none' }}
          onClick={() => { onSwitchVault('USDC', '22.83%', '$1.90', '$661.57K') }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div className={styles.vaultTitle}>
              <img style={{ borderRadius: 20, marginRight: 10, height: 30, width: 30 }} src={investIcon} />
              Flash Arbitrage: USDC
            </div>
            {/* <img style={{ height: 25, width: 25 }} src={tokenLogo['USDC']} /> */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Invested Asset</span>
            <div>
              <img style={{ height: 18, width: 18, marginRight: 5 }} src={tokenLogo['USDC']} />
              <span>USDC</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Anualized Return</span>
            <span>22.83%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Share Price</span>
            <span>$1.90</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>AUM</span>
            <span>$661.57K</span>
          </div>
          <Area
            style={{ height: 300, width: 350, margin: '0px -20px -130px -50px' }}
            data={areaData}
            xField={'Date'}
            yField={'scales'}
            xAxis={{ visible: false }}
            yAxis={{ visible: false, grid: { visible: false } }}
            line={{ style: { stroke: '#0030d4' } }}
            areaStyle={{ fill: 'transparent' }}
            tooltip={false}
          />
        </div>
        <div className={styles.cardContent}
          style={{ cursor: 'pointer', border: selectedVault == 'BNB' ? '1px solid #cbff00' : 'none' }}
          onClick={() => { onSwitchVault('BNB', '41.90%', '$1.87', '$608.91K') }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div className={styles.vaultTitle}>
              <img style={{ borderRadius: 20, marginRight: 10, height: 30, width: 30 }} src={investIcon} />
              Flash Arbitrage: BNB
            </div>
            {/* <img style={{ height: 25, width: 25 }} src={tokenLogo['BNB']} /> */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Invested Asset</span>
            <div>
              <img style={{ height: 18, width: 18, marginRight: 5 }} src={tokenLogo['BNB']} />
              <span>BNB</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Anualized Return</span>
            <span>41.90%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Share Price</span>
            <span>$1.87</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>AUM</span>
            <span>$608.91K</span>
          </div>
          <Area
            style={{ height: 300, width: 350, margin: '0px -20px -130px -50px' }}
            data={areaData}
            xField={'Date'}
            yField={'scales'}
            xAxis={{ visible: false }}
            yAxis={{ visible: false, grid: { visible: false } }}
            line={{ style: { stroke: '#0030d4' } }}
            areaStyle={{ fill: 'transparent' }}
            tooltip={false}
          />
        </div>
        <div className={styles.cardContent}
          style={{ cursor: 'pointer', border: selectedVault == 'ETH' ? '1px solid #cbff00' : 'none' }}
          onClick={() => { onSwitchVault('ETH', '53.78%', '$2.34', '$166.72K') }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div className={styles.vaultTitle}>
              <img style={{ borderRadius: 20, marginRight: 10, height: 30, width: 30 }} src={investIcon} />
              Flash Arbitrage: ETH
            </div>
            {/* <img style={{ height: 25, width: 25 }} src={tokenLogo['ETH']} /> */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Invested Asset</span>
            <div>
              <img style={{ height: 18, width: 18, marginRight: 5 }} src={tokenLogo['ETH']} />
              <span>ETH</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Anualized Return</span>
            <span>53.78%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Share Price</span>
            <span>$2.34</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>AUM</span>
            <span>$166.72K</span>
          </div>
          <Area
            style={{ height: 300, width: 350, margin: '0px -20px -130px -50px' }}
            data={areaData}
            xField={'Date'}
            yField={'scales'}
            xAxis={{ visible: false }}
            yAxis={{ visible: false, grid: { visible: false } }}
            line={{ style: { stroke: '#0030d4' } }}
            areaStyle={{ fill: 'transparent' }}
            tooltip={false}
          />
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
          <img src={investIcon} style={{ width: 30, height: 30 }} />
          <div className={styles.mainTitle} style={{ marginLeft: 10 }}>Flash Arbitrage</div>
        </div>
        <div style={{ display: 'flex', float: 'right', marginRight: 30 }}>
          <div style={{ display: 'flex', background: 'transparent', border: '1px solid #333333', borderRadius: 5, alignItems: 'center' }}>
            <input value={tokenAmount} onChange={(e) => { setTokenAmount(e.target.value) }} style={{ width: 200, height: 40 }} />
            <img src={tokenLogo[selectedVault]} style={{ width: 23, height: 23, marginRight: 10 }} />
          </div>
          <Button
            type='primary' style={{ marginLeft: 20, borderRadius: 15, height: 35, padding: '0 30px' }}
            onClick={() => { }}
          >
            INVEST
          </Button>
        </div>
        <OxTabs>
          <div tab="Overview" key="1">
            <Overview sharePrice={sharePrice} aum={aum} anualizedReturn={anualizedReturn} />
          </div>
          <div tab="Orders" key="2">
            <Orders />
          </div>
          <div tab="Fees" key="3">
            <Fees />
          </div>
        </OxTabs>
      </div>
    </div>
  )
}

export default Investment