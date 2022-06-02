import { useEffect } from 'react';
import KCharts from '@/components/KCharts';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Row, Col, Skeleton, Tabs, Button } from 'antd';
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
      <Row gutter={16} style={{ padding: '50px' }}>
        <Col className="gutter-row" span={12}>
          <h1>K线区域</h1>
          <KCharts />
          <h1>其他K线区域</h1>
          <KCharts />
        </Col>
        <Col className="gutter-row" span={6}>
          <Row gutter={16}>
            <h1>订单薄区域</h1>
            <Col className="gutter-row" span={24}>
              <Skeleton avatar paragraph={{ rows: 14 }} />
            </Col>
            <h1>最近交易区域</h1>
            <Col className="gutter-row" span={24}>
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={6}>
          <h1>交易区域</h1>
          <Skeleton avatar paragraph={{ rows: 10 }} />
        </Col>
      </Row>
    </>
  );
};
export default Page;
