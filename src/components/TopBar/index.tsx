import { useState } from 'react'
import { Space, Menu } from 'antd';
import { history } from 'umi'
import OxConnectWallet from '../OxConnectWallet'
import Logo from '@/assets/logo_icon.svg'
import styles from './index.less';

const TopBar = () => {
  const [current, setCurrent] = useState('totalGraph')

  const items = [
    {
      label: 'Buy Crypto >',
      key: 'buy-crypto',
      children: [{
        label: 'Buy with card',
        // key: '',
        // icon: <DotChartOutlined></DotChartOutlined>,
      },
      { label: 'P2P Trading' },
      { label: 'Third Party Payment' }
      ],
    },
    {
      label: 'Markets >',
      key: 'markets',
      children: [
      { label: 'Markets' },
      { label: 'Opportunities' },
      { label: 'Copy Trading' }
      ],
    },
    {
      label: 'Trade',
      key: 'trade',
      children: [],
    },
    {
      label: 'Grow',
      key: 'grow',
      children: [],
    },
    {
      label: 'Build',
      key: 'build',
      children: [],
    },
    {
      label: 'Institutional',
      key: 'institutional',
      children: [],
    },
    {
      label: 'Learn',
      key: 'learn',
      children: [],
    },
    {
      label: 'More',
      key: 'more',
      children: [],
    },
  ]

  const onClick = (e: any) => {
    setCurrent(e.key)
    // history.push('/' + e.keyPath.reverse().join('/'), {
    //   state: {
    //   }
    // })
  }

  return (
    <div className={styles.warp}>
      <div>
        <img width={30} src={Logo} style={{ margin: '-15px 0' }} />
      </div>
      <div style={{ width: 800 }}>
        <Menu theme="dark" style={{ background: 'transparent' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
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
