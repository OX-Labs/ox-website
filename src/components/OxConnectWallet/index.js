import { useState, useEffect } from "react";
import styles from './style.less';
import { sortAddress, useChainId } from '@/utils';
import { Row, Col, Modal, Dropdown, message } from 'antd';
import { DisconnectOutlined, DownOutlined } from '@ant-design/icons';
import { useWeb3React } from "@web3-react/core";
import { injected } from '@/connectors';
import CardList from './CardList'
import bsc from '@/assets/bsc.svg'
import polygon from '@/assets/polygon.svg'

const OxConnectWallet = props => {

  const { account, activate, deactivate } = useWeb3React();
  const { chainId } = useChainId();

  const [visibleMetaMask, setVisibleMetaMask] = useState(false);
  const [visibleNetwork, setVisibleNetwork] = useState(false)
  const [networkListIndex, setNetworkListIndex] = useState(0);


  const networkList = [
    {
      name: 'NO Network',
      onClick: async () => {
        setVisibleMetaMask(false);
      },
    },
    {
      name: 'Wrong Network',
      onClick: async () => {
        setVisibleMetaMask(false);
      },
    },
    {
      name: 'BNB Chain',
      icon: <img src={bsc} width={18} />,
      onClick: async () => {
        await switchEthereumChain("0x38");
        setVisibleMetaMask(false);
        setVisibleNetwork(false)
      },
    },
    {
      name: 'Polygon',
      icon: <img src={polygon} width={18} />,
      onClick: async () => {
        await switchEthereumChain("0x89");
        setVisibleMetaMask(false);
        setVisibleNetwork(false)
      },
    },
  ];

  const networkListInCardList = (
    <div className={styles.networkListBlock}>
      <div className={styles.networkTitle}>
        <span>Select a Network</span>
      </div>
      <CardList>
        {networkList.slice(2,).map((item) => {
          return (
            <CardList.Thin className={styles.networkListLayout} onClick={() => item.onClick()}>
              {item.icon}
              <span style={{ marginLeft: 10 }}>{item.name}</span>
            </CardList.Thin>
          );
        }
        )}
      </CardList>
    </div>
  );

  // 初始网络显示
  const n_index = chainId => {
    if (chainId == 56 || chainId == 97) {
      return 2
    }
    if (chainId == 137 || chainId == 80001) {
      return 3
    }
    if (chainId == undefined) {
      return 0
    }
    return 1
  }

  const deactivateTest = () => {
    deactivate();
    localStorage.setItem("login_status", 'off')
  }

  const switchEthereumChain = async (chainId) => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],
      });
    } catch (e) {
      if (e.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              networkParams[chainId]
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  }

  const selectWallet = () => {
    try {
      ethereum;
      activate(injected);
    } catch (error) {
      message.info('No provider was found');
      if (account) {
        localStorage.setItem("login_status", "on");
      }
      return
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (newChainId) => {
        document.location.reload();
      })
    }
  }, [])

  useEffect(() => {
    if (account) {
      localStorage.setItem("login_status", "on");
      setNetworkListIndex(n_index(chainId))
    }
    else {
      setNetworkListIndex(0)
    }
  }, [account]);

  return (
    <div className={styles.right}>
      <Row wrap={false} style={{ display: "inline-flex", fontSize: "0.7rem" }}>
        <Col flex="none">
          <Dropdown
            overlay={networkListInCardList}
            placement="bottomLeft"
            open={visibleNetwork}
            onCancel={() => setVisibleNetwork(false)}
          >
            <div type="primary" shape="round" className={styles.networkButton} onClick={() => setVisibleNetwork(true)}>
              <div>
                {networkList[networkListIndex].icon}
                <span style={{ marginLeft: 5, marginRight: 8 }}>{networkList[networkListIndex].name}</span>ᐯ
              </div>
            </div>
          </Dropdown>
        </Col>
        <Col flex="auto">
          <div className={styles.connect}>
            <div className={styles.wrap}>
              <div>
                {account &&
                  <div className={styles.address} onClick={() => setVisibleMetaMask(true)} >
                    {sortAddress(account)}
                  </div>
                }
                {!account &&
                  <div className={styles.address} onClick={() => selectWallet()} >
                    Connect Wallet
                  </div>
                }
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {account && <div>
        <Modal
          width={150}
          height={100}
          visible={visibleMetaMask}
          onCancel={() => setVisibleMetaMask(false)}
          footer={null}
          closable={false}
        >
          <div type="primary" shape="round" className={styles.disconnectBtn} onClick={deactivateTest} style={{ margin: -30, height: 55 }}>
            <DisconnectOutlined /> Disconnect
          </div>
        </Modal>
      </div>}
    </div>
  );
};
export default OxConnectWallet;
