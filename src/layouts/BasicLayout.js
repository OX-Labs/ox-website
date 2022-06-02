import { useEffect } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Layout } from 'antd';
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
      <Layout style={{ background: defaultSettings.background }}>
        {/* <Header /> */}
        <Header
          style={{
            background: defaultSettings.background,
            borderBottom: '1px solid rgb(37, 41, 48)',
          }}
        >
          {/* <Skeleton rows={1} /> */}
          <img width={50} src="/logo.svg" />
        </Header>
        <Content>{props.children}</Content>
        {/* <Footer /> */}
        <Footer
          style={{
            background: defaultSettings.background,
            textAlign: 'center',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Copyright © 2022 OX EXCHANGE
        </Footer>
      </Layout>
    </Web3ReactProvider>
  );
};
export default BasicLayout;
