import { useState } from 'react'
import { Space, Menu, Segmented } from 'antd';
import { history } from 'umi'
import OxConnectWallet from '../OxConnectWallet'
import Logo from '@/assets/logo_icon.svg'
import styles from './index.less';

const TopBar = () => {
  const [current, setCurrent] = useState('totalGraph')
  const [mode, setMode] = useState('Exchange')

  const exchangeItems = [
    {
      label: 'Markets',
      key: 'markets',
    },
    {
      label: 'Trade >',
      key: 'exchange',
      children: [
        {
          label: 'Buy Crypto',
          key: 'buycrypto'
        },
        {
          label: 'Basic Trading',
          key: 'trade'
        },
        {
          label: 'Trading Bots',
          key: 'tradingbots'
        },
        {
          label: 'Copy Trading',
          key: 'copytrading'
        }
      ]
    },
    {
      label: <div onClick={() => { window.location.href = '/launchpad' }}>Launchpad</div>,
      key: 'launchpad',
    },
    {
      label: 'Institutional',
      key: 'institutional',
      children: [],
    },
  ]

  const investmentItems = [
    {
      label: 'Overview',
      key: 'overview',
    },
    {
      label: 'Portfolio',
      key: 'portfolio',
    },
    {
      label: 'Financials',
      key: 'financials',
    },
    {
      label: 'Policies',
      key: 'policies',
    },
    {
      label: 'Depositors',
      key: 'depositors',
    },
    {
      label: 'Activity',
      key: 'activity',
    },
    {
      label: 'Markets',
      key: 'markets',
    },
  ]

  const walletItems = [
    {
      label: 'Dashboard',
      key: 'dashboard',
    },
    {
      label: 'Trade',
      key: 'trade',
    },
    {
      label: 'NFT Marketplace',
      key: 'nftmarketplace',
    },
    {
      label: 'Earn',
      key: 'earn',
    },
    {
      label: 'Discover',
      key: 'discover',
    },
    {
      label: 'Developers',
      key: 'developers',
    },
  ]

  const onClick = (e: any) => {
    setCurrent(e.key)
    window.location.href = '/' + e.keyPath.reverse().join('/')
  }

  const getItems = () => {
    if(mode == 'Exchange') {
      return exchangeItems
    }
    if(mode == 'Investment') {
      return investmentItems
    }
    if(mode == 'Wallet') {
      return walletItems
    }
  }

  return (
    <div className={styles.warp}>
      <div>
        <img width={30} src={Logo} style={{ margin: '-15px 0' }} />
      </div>
      <div className={styles.segmented} style={{ width: 300, borderRadius: 5, border: '1px solid #333333' }}>
        <Segmented
          options={['Exchange', 'Investment', 'Wallet']}
          onChange={(e)=>{setMode(e)}}
          block
        />
      </div>
      <div style={{ width: 1000 }}>
        <Menu theme="dark" style={{ background: 'transparent' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={getItems()} />
      </div>
      <div>
        <Space>
          <OxConnectWallet />
        </Space>
      </div>
    </div>
  );
};
export default TopBar;
