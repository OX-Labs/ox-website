import { useEffect } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Layout } from 'antd';
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
      <Layout style={{ background: '#000000' }}>
        {/* <Header /> */}
        <Header>
          {/* <Skeleton rows={1} /> */}
          <img width={50} src="/logo.svg" />
        </Header>
        <Content>{props.children}</Content>
        {/* <Footer /> */}
        <Footer
          style={{
            background: '#000000',
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
