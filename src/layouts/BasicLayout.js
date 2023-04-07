import { useEffect } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Button, Input, Layout, Skeleton } from 'antd';
import TopBar from '@/components/TopBar';
import OxPageTabs from '@/components/OxPageTabs';
import defaultSettings from '@/defaultSettings';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
const { Header, Footer, Sider, Content } = Layout;
function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}
const BasicLayout = (props) => {
  // console.log('process.env',process.env);
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <Content>
          <Layout>
            <Sider
              width={60}
              style={{
                background: defaultSettings.background,
                borderRight: '2px solid #212121',
                minHeight: '100vh',
              }}
            >
              <img width={50} src="/logo.svg" style={{marginTop: 20}} />
            </Sider>
            <Layout style={{ background: defaultSettings.background }}>
              {/* <div
                style={{
                  borderBottom: '1px solid rgb(37, 41, 48)',
                  background: defaultSettings.background,
                  position: 'relative',
                }}
              >
                <OxPageTabs />
              </div>
              <div
                style={{
                  borderBottom: '1px solid rgb(37, 41, 48)',
                  background: defaultSettings.background,
                }}
              >
                <Skeleton rows={1} paragraph={false} />
              </div> */}
              <TopBar />
              <Content>{props.children}</Content>
              {/* <Footer /> */}
              {/* <Footer
                style={{
                  background: defaultSettings.background,
                  color: 'rgba(255,255,255,0.7)',
                  borderTop: '1px solid rgb(37, 41, 48)',
                  height: '30px',
                  lineHeight: '30px',
                  padding: '0 30px',
                }}
              >
                <span>&nbsp; BTC 30000 +2%</span>
                <span>&nbsp; | &nbsp;</span>
                <span>ETH 1800 +1%</span>
              </Footer> */}
            </Layout>
          </Layout>
        </Content>
      </Layout>
    </Web3ReactProvider>
  );
};
export default BasicLayout;
