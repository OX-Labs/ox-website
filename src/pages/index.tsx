import { useEffect } from 'react';
import KCharts from '@/components/KCharts';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Row, Col, Skeleton, Tabs, Button } from 'antd';
import styles from './index.less';
const { TabPane } = Tabs;
const Page = () => {
  // library	当前连接的library
  // deactivate	断开连接的方法
  // chainId	当前连接的链id
  // account	当前连接的钱包账户地址
  // active	当前连接的状态，是否连接
  const { library, deactivate, chainId, account, active, activate, error } =
    useWeb3React();

  const injected = new InjectedConnector({
    supportedChainIds: [56],
  });
  useEffect(() => {
    activate(injected);
  }, []);
  return (
    <>
      <Row gutter={16}>
        <Col
          className="gutter-row"
          span={15}
          style={{ borderRight: '1px solid rgb(37, 41, 48)' }}
        >
          <Row gutter={16}>
            <Col
              className="gutter-row"
              span={24}
              style={{ borderBottom: '1px solid rgb(37, 41, 48)' }}
            >
              <h1 className={styles.t1}>ACY/USDH</h1>
              <KCharts />
            </Col>
            <Col className="gutter-row" span={24}>
              <div className={styles.t1}>
                <span>Open Orders(0)</span>&nbsp;&nbsp;&nbsp;
                <span>Open History</span>&nbsp;&nbsp;&nbsp;
                <span>Trade History</span>&nbsp;&nbsp;&nbsp;
                <span>Funds</span>&nbsp;&nbsp;&nbsp;
                <span>Positic</span>&nbsp;&nbsp;&nbsp;
              </div>
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </Col>
          </Row>
        </Col>
        <Col
          className="gutter-row"
          span={4}
          style={{ borderRight: '1px solid rgb(37, 41, 48)' }}
        >
          <Row gutter={16}>
            <h1 className={styles.t1}>Order Book</h1>
            <Col
              className="gutter-row"
              span={24}
              style={{ borderBottom: '1px solid rgb(37, 41, 48)' }}
            >
              <Skeleton avatar paragraph={{ rows: 14 }} />
            </Col>
            <h1 className={styles.t1}>Market Trades</h1>
            <Col className="gutter-row" span={24}>
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={5}>
          <Tabs key="m1" type="card">
            <TabPane tab="BUY" key="1">
              <Tabs key="c1" defaultActiveKey="1">
                <TabPane tab="MARKET" key="1">
                  MARKET
                </TabPane>
                <TabPane tab="LIMIT" key="2">
                  LIMIT
                </TabPane>
                <TabPane tab="ADVANCED" key="3">
                  ADVANCED
                </TabPane>
              </Tabs>
            </TabPane>
            <TabPane tab="SELL" key="2">
              <Tabs key="c2" defaultActiveKey="1">
                <TabPane tab="MARKET" key="1">
                  MARKET
                </TabPane>
                <TabPane tab="LIMIT" key="2">
                  LIMIT
                </TabPane>
                <TabPane tab="ADVANCED" key="3">
                  ADVANCED
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default Page;
