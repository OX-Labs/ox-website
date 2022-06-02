/*
 * @Author: Doctor
 * @Date: 2021-11-28 14:15:50
 * @LastEditTime: 2021-12-05 23:14:33
 * @LastEditors: Doctor
 * @Description:
 * @FilePath: \qy\src\components\Header\index.tsx
 * jianqiang
 */
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Popover, notification } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { BeakerIcon } from '@/components/Icon';
import { history } from 'umi';
import Media from 'react-media';
import { sortAddress } from '@/utils/utils';
import { ADDRESS, CHAINID } from '@/utils/constant';
import Logo from '@/assets/icon/Logo.png';
import Home from '@/assets/icon/Home.png';
import Binance from '@/assets/icon/Binance.png';
import MenuOpen from '@/assets/icon/MenuOpen.png';
import MenuClose from '@/assets/icon/MenuClose.png';

import Comingsoon from '@/assets/icon/Comingsoon.png';
import Luckydraw from '@/assets/icon/Luckydraw.png';
import Wallet from '@/assets/icon/Wallet.png';
import Asset from '@/assets/icon/Asset.png';
import Beaker from '@/assets/icon/Beaker.png';
import Disconnect from '@/assets/icon/Disconnect.png';
import styles from './index.less';

const Header = () => {
  // library	当前连接的library
  // deactivate	断开连接的方法
  // chainId	当前连接的链id
  // account	当前连接的钱包账户地址
  // active	当前连接的状态，是否连接
  const { library, deactivate, chainId, account, active, activate, error } =
    useWeb3React();

  const injected = new InjectedConnector({
    supportedChainIds: CHAINID,
  });
  useEffect(() => {
    console.log('error', error);
  }, [error]);
  const connectWallet = () => {
    activate(injected, (error) => {
      notification.open({
        message: '',
        description: (
          <>
            <div className="nleft"></div>
            <div className="nright">請选择bsc网络連接錢包。</div>
          </>
        ),
        top: 90,
        className: 'custom-notification',
      });
    });
  };
  // 中断钱包的连接
  const disconnect = () => {
    deactivate();
  };
  const walletMenu = (
    <div className={styles.dropdownMenu}>
      <div className={styles.menuItem} onClick={() => history.push('/myasset')}>
        <img src={Asset} />
        我的資產
      </div>
      <div className={styles.menuItem} onClick={disconnect}>
        <img src={Disconnect} />
        中斷錢包連線
      </div>
    </div>
  );
  const menu = (
    <div className={styles.dropdownMenu}>
      <div className={styles.menuItem} onClick={() => history.push('/')}>
        <img src={Home} />
        首頁
      </div>
      <div className={styles.menuItem}>
        <img src={Binance} />
        <Popover
          placement="left"
          color={'transparent'}
          content={<img src={Comingsoon} />}
        >
          <span>社區分潤計劃</span>
        </Popover>
      </div>
      <div
        className={styles.menuItem}
        onClick={() => history.push('/luckydraw')}
      >
        <img src={Luckydraw} />
        <span>幸運獎池</span>
      </div>
      <div className={styles.menuItem} onClick={() => history.push('/techlab')}>
        <img src={Beaker} />
        <span>加密研究室</span>
      </div>
      <div className={styles.menuItem} onClick={() => history.push('/myasset')}>
        <img src={Asset} />
        我的資產
      </div>
      {(account && (
        <div className={styles.menuItem} onClick={disconnect}>
          <img src={Disconnect} />
          中斷錢包連線
        </div>
      )) || (
        <div className={styles.menuItem} onClick={connectWallet}>
          <img src={Disconnect} />
          錢包連線
        </div>
      )}
    </div>
  );
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <Media
          queries={{
            big: '(min-width: 1000px)',
          }}
        >
          {(matches) =>
            (matches.big && (
              <>
                <div className={styles.menu}>
                  <div
                    className={styles.menuItem}
                    style={{ cursor: 'pointer' }}
                    onClick={() => history.push('/')}
                  >
                    <img src={Home} />
                    <span>首頁</span>
                  </div>
                  <div className={styles.menuItem}>
                    <img src={Binance} />
                    <Popover
                      color={'transparent'}
                      content={<img src={Comingsoon} />}
                    >
                      <span>社區分潤計劃</span>
                    </Popover>
                  </div>
                  <div
                    className={styles.menuItem}
                    style={{ cursor: 'pointer' }}
                    onClick={() => history.push('/luckydraw')}
                  >
                    <img src={Luckydraw} />
                    <span>幸運獎池</span>
                  </div>
                  <div
                    className={styles.menuItem}
                    style={{ cursor: 'pointer' }}
                    onClick={() => history.push('/techlab')}
                  >
                    <img src={Beaker} />
                    <span>加密研究室</span>
                  </div>
                </div>
                <div className={styles.wallet}>
                  <div className={styles.icon}>
                    <img src={Wallet} />
                  </div>
                  <div className={styles.connect} onClick={connectWallet}>
                    {(account && (
                      <Popover
                        placement="bottom"
                        color={'transparent'}
                        content={walletMenu}
                        trigger="click"
                      >
                        {sortAddress(account)}
                        <CaretDownOutlined />
                      </Popover>
                    )) ||
                      '連接錢包'}
                  </div>
                </div>
              </>
            )) || (
              <div className={styles.mobileMenu}>
                <Popover
                  placement="bottom"
                  color={'transparent'}
                  content={menu}
                  trigger="click"
                >
                  <img src={MenuOpen} />
                </Popover>
              </div>
            )
          }
        </Media>
      </div>
    </div>
  );
};
export default Header;
