import { useMemo, useState } from 'react'
import { Space, Menu, Segmented } from 'antd';
import { history } from 'umi'
import OxConnectWallet from '../OxConnectWallet'
import Logo from '@/assets/logo_icon.svg'
import styles from './index.less';

const TopBar = () => {
  const [current, setCurrent] = useState('totalGraph')

  const mode = useMemo(()=>{
    return window.localStorage.mode || 'Exchange'
  }, [window.localStorage.mode])
  
  const exchangeItems = [
    {
      label: 'Markets',
      key: 'exchange/markets',
    },
    {
      label: <div onClick={() => { window.location.href = '/exchange/trade' }}>Trade</div>,
      key: 'exchange',
      // children: [
      //   {
      //     label: 'Buy Crypto',
      //     key: 'buycrypto'
      //   },
      //   {
      //     label: 'Trading Bots',
      //     key: 'tradingbots'
      //   },
      //   {
      //     label: 'Copy Trading',
      //     key: 'copytrading'
      //   }
      // ]
    },
    {
      label: <div onClick={() => { window.location.href = '/exchange/launchpad' }}>Launchpad</div>,
      key: 'exchange/launchpad',
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
      label: 'Assets',
      key: 'wallet/assets',
    },
    {
      label: 'Swap',
      key: 'wallet/swap',
    },
  ]

  const onClick = (e: any) => {
    setCurrent(e.key)
    window.location.href = '/' + e.keyPath.reverse().join('/')
  }

  const getItems = () => {
    if(!mode || mode == 'Exchange') {
      return exchangeItems
    }
    if(mode == 'Investment') {
      return []
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
          value={mode}
          options={['Exchange', 'Investment', 'Wallet']}
          onChange={(e:any)=>{
            window.localStorage.setItem('mode', e)
            if(e == 'Exchange') {
              window.location.href = '/exchange/trade'
            }
            if(e == 'Investment') {
              window.location.href = '/investment'
            }
            if(e == 'Wallet') {
              window.location.href = '/wallet/swap'
            }
          }}
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
