import { useWeb3React } from '@web3-react/core';
import { Layout, Row, Col, Button, Modal, Input, Select, Divider, Table } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './styles.less'

const Assets = props => {

  const { account, library, active, chainId } = useWeb3React();

  const copy = value => {
    navigator.clipboard.writeText(value)
  }

  const tokenImgURL = {
    'MATIC': 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
    'WMATIC': 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
    'BTC': 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    'ETH': 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    'USDC': 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
    'USDT': 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
    'BNB': 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
    'ACY': 'https://storageapi.fleek.co/5bec74db-774b-4b8a-b735-f08a5ec1c1e6-bucket/icon_acy.svg',
  }
  const getTokenImg = token => {
    return tokenImgURL[token.name]
  }

  const columnData = [
    {
      title: (
        <div className={styles.tableDataFirstColumn}>  </div>
      ),
      key: "logoURI",
      dataIndex: "logoURI",
      render: (text, entry) => {
        return <div >{text}</div>;
      },
    },
    {
      title: <div className={styles.tableDataFirstColumn} style={{ marginLeft: "2rem" }}> Token </div>,
      key: "name",
      dataIndex: "name",
      render: (text, record) => {
        return (
          <Row style={{ padding: "1rem" }}>
            {getTokenImg(record) && <Col span={8} style={{ marginTop: "1px" }}> <img height={20} src={getTokenImg(record)} /> </Col>}
            <Col span={14} style={{ fontSize: "1.1rem" }}> {record.name} </Col>
          </Row>
        );
      },
    },
    {
      title: <div className={styles.tableHeaderFirst}> Balance </div>,
      dataIndex: "balance",
      key: "balance",
      render: (text, entry) => {
        return <div className={styles.tableData}>{text}</div>
      },
    },
    {
      title: (
        <div className={styles.tableHeaderFirst}> </div>
      ),
      dataIndex: 'button',
      key: 'button',
      render: (text, entry, record) => {
        return <div className={styles.tableData} style={{ float: "right" }}>
          <Button className={styles.button}>
            Deposit
          </Button>
          <Button className={styles.button}>
            Withdraw
          </Button>
          <Button className={styles.button}>
            Transfer
          </Button>
          <Button className={styles.button}>
            Send
          </Button>
        </div>
      },
    },
  ]

  const dataSource = [
    {
      name: "BTC",
      price: "$26875.60",
      balance: "$0.000"
    },
    {
      name: "ETH",
      price: "$1817.33",
      balance: "$0.000"
    },
    {
      name: "BNB",
      price: "$309.86",
      balance: "$0.000"
    },
    {
      name: "USDT",
      price: "$1.00",
      balance: "$0.000"
    },
    {
      name: "USDC",
      price: "$0.99",
      balance: "$0.000"
    },
    {
      name: "MATIC",
      price: "$0.87",
      balance: "$0.000"
    },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.rowFlexContainer}>
        <div style={{ height: '100vh', width: '100%', padding: '0 180px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }}>
            {account
              ? <div className={styles.copyAddress}>
                <span style={{ marginRight: '5px', fontSize: "1.2rem" }}>{account}</span>
                <svg height={15} style={{ marginTop: "12px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" onClick={() => { copy(account) }}><path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z" /></svg>
              </div>
              : <div style={{ fontSize: "1.5rem", marginLeft: 10 }}>Account</div>
            }
            <div>
              <Button className={styles.button}>Deposit</Button>
              <Button className={styles.button}>Withdraw</Button>
              <Button className={styles.button}>Transfer</Button>
              <Button className={styles.button}>Send</Button>
              <Button className={styles.button}>Transaction History</Button>
            </div>

          </div>
          <div className={styles.totalBalance}>
            <div >
              <div>Estimate Balance</div>
              <div style={{ fontSize: "2rem" }}>0.00000</div>
            </div>
          </div>
          <div className={styles.statsContainer}>
            <Table
              className={styles.nobgTable}
              columns={columnData}
              pagination={false}
              dataSource={dataSource}
            />
          </div>
        </div>
      </div>
    </div>


  )
}

export default Assets