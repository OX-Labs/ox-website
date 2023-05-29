import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Area } from '@ant-design/charts';
import { BankOutlined, DownloadOutlined, BarChartOutlined } from '@ant-design/icons'
import OxTabs from '@/components/OxTabs'
import { YearTable, TokenHoldingTable, FeesTable } from '@/components/TableComponents'
import eth from '@/assets/eth.svg'
import styles from './styles.less'

const Investment = props => {

  const manager = '0xf5be8b4c82b8a681bacf357cfb712ab9e9296cb2'

  const areaData = [
    {
      "Date": "2010-01",
      "scales": 1998
    },
    {
      "Date": "2010-02",
      "scales": 1850
    },
    {
      "Date": "2010-03",
      "scales": 1720
    },
    {
      "Date": "2010-04",
      "scales": 1818
    },
    {
      "Date": "2010-05",
      "scales": 1920
    },
    {
      "Date": "2010-06",
      "scales": 1802
    },
    {
      "Date": "2010-07",
      "scales": 1945
    },
    {
      "Date": "2010-08",
      "scales": 1856
    },
    {
      "Date": "2010-09",
      "scales": 2107
    },
    {
      "Date": "2010-10",
      "scales": 2140
    },
    {
      "Date": "2010-11",
      "scales": 2311
    },
    {
      "Date": "2010-12",
      "scales": 1972
    },
    {
      "Date": "2011-01",
      "scales": 1760
    },
    {
      "Date": "2011-02",
      "scales": 1824
    },
    {
      "Date": "2011-03",
      "scales": 1801
    },
    {
      "Date": "2011-04",
      "scales": 2001
    },
    {
      "Date": "2011-05",
      "scales": 1640
    },
    {
      "Date": "2011-06",
      "scales": 1502
    },
    {
      "Date": "2011-07",
      "scales": 1621
    },
    {
      "Date": "2011-08",
      "scales": 1480
    },
    {
      "Date": "2011-09",
      "scales": 1549
    },
    {
      "Date": "2011-10",
      "scales": 1390
    },
    {
      "Date": "2011-11",
      "scales": 1325
    },
    {
      "Date": "2011-12",
      "scales": 1250
    },
    {
      "Date": "2012-01",
      "scales": 1394
    },
    {
      "Date": "2012-02",
      "scales": 1406
    },
    {
      "Date": "2012-03",
      "scales": 1578
    },
    {
      "Date": "2012-04",
      "scales": 1465
    },
    {
      "Date": "2012-05",
      "scales": 1689
    },
    {
      "Date": "2012-06",
      "scales": 1755
    },
    {
      "Date": "2012-07",
      "scales": 1495
    },
    {
      "Date": "2012-08",
      "scales": 1508
    },
    {
      "Date": "2012-09",
      "scales": 1433
    },
    {
      "Date": "2012-10",
      "scales": 1344
    },
    {
      "Date": "2012-11",
      "scales": 1201
    },
    {
      "Date": "2012-12",
      "scales": 1065
    },
    {
      "Date": "2013-01",
      "scales": 1255
    },
    {
      "Date": "2013-02",
      "scales": 1429
    },
    {
      "Date": "2013-03",
      "scales": 1398
    },
    {
      "Date": "2013-04",
      "scales": 1678
    },
    {
      "Date": "2013-05",
      "scales": 1524
    },
    {
      "Date": "2013-06",
      "scales": 1688
    },
    {
      "Date": "2013-07",
      "scales": 1500
    },
    {
      "Date": "2013-08",
      "scales": 1670
    },
    {
      "Date": "2013-09",
      "scales": 1734
    },
    {
      "Date": "2013-10",
      "scales": 1699
    },
    {
      "Date": "2013-11",
      "scales": 1508
    },
    {
      "Date": "2013-12",
      "scales": 1680
    },
    {
      "Date": "2014-01",
      "scales": 1750
    },
    {
      "Date": "2014-02",
      "scales": 1602
    },
    {
      "Date": "2014-03",
      "scales": 1834
    },
    {
      "Date": "2014-04",
      "scales": 1722
    },
    {
      "Date": "2014-05",
      "scales": 1430
    },
    {
      "Date": "2014-06",
      "scales": 1280
    },
    {
      "Date": "2014-07",
      "scales": 1367
    },
    {
      "Date": "2014-08",
      "scales": 1155
    },
    {
      "Date": "2014-09",
      "scales": 1289
    },
    {
      "Date": "2014-10",
      "scales": 1104
    },
    {
      "Date": "2014-11",
      "scales": 1246
    },
    {
      "Date": "2014-12",
      "scales": 1098
    },
    {
      "Date": "2015-01",
      "scales": 1189
    },
    {
      "Date": "2015-02",
      "scales": 1276
    },
    {
      "Date": "2015-03",
      "scales": 1033
    },
    {
      "Date": "2015-04",
      "scales": 956
    },
    {
      "Date": "2015-05",
      "scales": 845
    },
    {
      "Date": "2015-06",
      "scales": 1089
    },
    {
      "Date": "2015-07",
      "scales": 944
    },
    {
      "Date": "2015-08",
      "scales": 1043
    },
    {
      "Date": "2015-09",
      "scales": 893
    },
    {
      "Date": "2015-10",
      "scales": 840
    },
    {
      "Date": "2015-11",
      "scales": 934
    },
    {
      "Date": "2015-12",
      "scales": 810
    },
    {
      "Date": "2016-01",
      "scales": 782
    },
    {
      "Date": "2016-02",
      "scales": 1089
    },
    {
      "Date": "2016-03",
      "scales": 745
    },
    {
      "Date": "2016-04",
      "scales": 680
    },
    {
      "Date": "2016-05",
      "scales": 802
    },
    {
      "Date": "2016-06",
      "scales": 697
    },
    {
      "Date": "2016-07",
      "scales": 583
    },
    {
      "Date": "2016-08",
      "scales": 456
    },
    {
      "Date": "2016-09",
      "scales": 524
    },
    {
      "Date": "2016-10",
      "scales": 398
    },
    {
      "Date": "2016-11",
      "scales": 278
    },
    {
      "Date": "2016-12",
      "scales": 195
    },
    {
      "Date": "2017-01",
      "scales": 145
    },
    {
      "Date": "2017-02",
      "scales": 207
    }
  ]

  const yearData = [
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
  ]

  const Overview = ({ }) => {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.cardContent}>
            <div className={styles.row}>
              <div className={styles.title}>
                <BankOutlined className={styles.logo} />
                $32,797,648.05
              </div>
              <span className={styles.content}>Assets Under Management</span>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.row}>
              <div className={styles.title}>
                <DownloadOutlined className={styles.logo} />
                2
              </div>
              <span className={styles.content}>Depositors</span>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.row}>
              <div className={styles.title} style={{ color: '#34d399' }}>
                <BarChartOutlined className={styles.logo} />
                +1.23%
              </div>
              <span className={styles.content}>Average Monthly Return</span>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.row}>
              <div className={styles.title}>
                <img src={eth} width={25} className={styles.logo} />
                WETH
              </div>
              <span className={styles.content}>Denomination Asset</span>
            </div>
          </div>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.mainTitle} style={{ paddingLeft: '1rem' }}>$1,976.07</div>
          <div style={{ paddingRight: '2rem' }}>
            <Area
              data={areaData}
              xField={'Date'}
              yField={'scales'}
              xAxis={{ tickCount: 5 }}
              yAxis={{ visible: false, grid: { visible: false } }}
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
        logo: 'https://app.enzyme.finance/asset/ethereum/0xae7ab96520de3a18e5e111b5eaab095312d7fe84/icon?size=40',
        balance: '17,869.5625288',
        price: '$1,847.46',
        change24h: 1.03,
        value: '$33,013,346.27',
        allocation: '99.95%',
      },
      {
        name: 'Wrapped Ether',
        symbol: 'WETH',
        logo: 'https://app.enzyme.finance/asset/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/icon?size=40',
        balance: '13.5423613563',
        price: '$1,847.66',
        change24h: 1.03,
        value: '$25,021.68',
        allocation: '0.08%',
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

    const fees = [{ rate: '0.25%' }]

    return (
      <div className={styles.mainContainer}>
        <div className={styles.cardContent}>
          <FeesTable dataSource={fees} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.mainContainer}>
      <div style={{ display: 'flex', marginBottom: '2rem' }}>
        <img src={eth} width={30} />
        <div className={styles.mainTitle} style={{ marginLeft: 10 }}>USF Fund I</div>
      </div>
      <OxTabs>
        <div tab="Overview" key="1">
          <Overview />
        </div>
        <div tab="Orders" key="2">
          <Orders />
        </div>
        <div tab="Fees" key="3">
          <Fees />
        </div>
      </OxTabs>
    </div>
  )
}

export default Investment