import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { MarketsTable } from '@/components/TableComponents'

const Markets = props => {

  const [searchValue, setSearchValue] = useState('')

  const marketsData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '27,085.70',
      price_24h: -1.05,
      volume: '13.11B',
      marketcap: '524.60B',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '1,818.73',
      price_24h: 0.33,
      volume: '5.86B',
      marketcap: '218.78B',
    },
    {
      name: 'TetherUS',
      symbol: 'USDT',
      price: '1.00',
      price_24h: 0.08,
      volume: '23.65B',
      marketcap: '82.89B',
    },
    {
      name: 'BNB',
      symbol: 'BNB',
      price: '313.30',
      price_24h: 1.10,
      volume: '430.42M',
      marketcap: '48.84B',
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      price: '0.99',
      price_24h: -0.01,
      volume: '3.00B',
      marketcap: '29.50B',
    },
  ]

  return (
    <div style={{ padding: '0 10%', marginTop: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Karla, sans-serif', fontSize: 24, lineHeight: '4rem' }}>Markets Overview</span>
        <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '50%',
            paddingLeft: 10,
            borderRadius: '5px',
            border: '1px solid #333333',
            boxShadow: '0 4px 8px 0 #00000033, 0 6px 20px 0 #00000030',
          }}>
            <SearchOutlined />
            <Input
              placeholder="Search Coin Name"
              size="large"
              style={{
                backgroundColor: 'black',
                border: 'none',
                width: 200,
                height: '50%',
                fontSize: 14,
                textAlign: 'left',
              }}
              value={searchValue}
              onChange={(e)=>{setSearchValue(e.target.value)}}
            />
          </div>
        </div>
      </div>
      <MarketsTable dataSource={marketsData} searchValue={searchValue} />
    </div>
  )
}

export default Markets