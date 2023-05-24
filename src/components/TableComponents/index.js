import React, { useState } from 'react';
import { Table, Space, Button, Icon } from 'antd';
import className from 'classnames';
import styles from './styles.less'

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

function sortTableTime(table, key, isReverse) {
  return table.sort((a, b) => {
    if (isReverse) {
      return new Date(b[key]).getTime() - new Date(a[key]).getTime();
    } else {
      return new Date(a[key]).getTime() - new Date(b[key]).getTime();
    }
  });
}

function sortString(table, key, isReverse) {
  return table.sort((a, b) => {
    if (isReverse) {
      return b[key].localeCompare(a[key]);
    } else {
      return a[key].localeCompare(b[key]);
    }
  });
}

function sortTableRegular(table, key, isReverse) {
  return table.sort((a, b) => {
    if (isReverse) {
      return b[key] - a[key];
    } else {
      return a[key] - b[key];
    }
  });
}

function sortPairsTable(table, key, isReverse) {
  if (key == 'time') return sortTableTime(table, key, isReverse);
  else if (key == 'name' || key == 'symbol' || key == 'coin1' || key == 'coin2' || key == 'account')
    return sortString(table, key, isReverse);
  else return sortTableRegular(table, key, isReverse);
}

export function PairsTable(props) {
  const [tokenSortAscending, setTokenSortAscending] = useState(true)
  const [currentKey, setCurrentKey] = useState('');
  const [isHover, setIsHover] = useState(false);

  function columnsCoin(isAscending, onSortChange) {
    return [
      {
        title: (
          <div className={className(styles.tableHeaderFirst, styles.tableIndex)}>
            #
          </div>
        ),
        key: 'index',
        width: '6rem',
        render: (text, record, index) => (
          <div className={className(styles.tableDataFirstColumn, styles.tableIndex)}>
            {index + 1}
          </div>
        ),
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeaderFirst}
            onClick={() => {
              setCurrentKey('name')
              onSortChange()
            }}
          >
            Pair
            {currentKey == 'name' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'name',
        key: 'name',
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          return (
            <div className={styles.tableHeader}>
              {/* <AcyTokenIcon symbol={entry.logoURI} /> */}
              <span style={{ marginLeft: '10px' }}>{entry.name}</span>
            </div>
          );
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('exchange')
              onSortChange()
            }}
          >
            Exchange
            {currentKey == 'exchange' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'exchange',
        key: 'exchange',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.exchange}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('price')
              onSortChange()
            }}
          >
            Rate
            {currentKey == 'price' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'price',
        key: 'price',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.price}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('price_24h')
              onSortChange()
            }}
          >
            24h Price variation
            {currentKey == 'price_24h' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'price_24h',
        key: 'price_24h',
        render: (text, entry) => {
          let price_24h = (entry.price_24h * 100).toPrecision(2)
          if (price_24h > 0) {
            return <div className={styles.tableData} style={{ color: "green" }}>{price_24h}% ↑</div>
          } else {
            return <div className={styles.tableData} style={{ color: "red" }}>{price_24h}% ↓</div>
          }
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('volume')
              onSortChange()
            }}
          >
            24h Volume
            {currentKey == 'volume' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'volume',
        key: 'volume',
        render: (text, entry) => {
          return <div className={styles.tableData}>$ {entry.volume}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('swaps')
              onSortChange()
            }}
          >
            24h Swaps
            {currentKey == 'swaps' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'swaps',
        key: 'swaps',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.swaps}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('liquidity')
              onSortChange()
            }}
          >
            Total Liquidity
            {currentKey == 'liquidity' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'liquidity',
        key: 'liquidity',
        render: (text, entry) => {
          if (entry.liquidity > 1e12) return <div className={styles.tableData}>{(entry.liquidity / 1e12).toFixed(0)}T</div>;
          if (entry.liquidity > 1e9) return <div className={styles.tableData}>{(entry.liquidity / 1e9).toFixed(0)}G</div>;
          if (entry.liquidity > 1e6) return <div className={styles.tableData}>{(entry.liquidity / 1e6).toFixed(0)}M</div>;
          if (entry.liquidity > 1e3) return <div className={styles.tableData}>{(entry.liquidity / 1e3).toFixed(0)}K</div>;
          return <div className={styles.tableData}>{entry.liquidity}</div>;
        },
        visible: true,
      },
    ];
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={sortPairsTable(props.dataSource, currentKey, tokenSortAscending)}
        columns={columnsCoin(tokenSortAscending, () => { setTokenSortAscending(!tokenSortAscending) }).filter(item => item.visible == true)}
        pagination={false}
        style={{
          marginBottom: '20px',
          cursor: isHover ? 'pointer' : 'default',
        }}
        onRowMouseEnter={() => setIsHover(true)}
        onRowMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
}

export function MarketsTable(props) {
  const [tokenSortAscending, setTokenSortAscending] = useState(true)
  const [currentKey, setCurrentKey] = useState('');
  const [isHover, setIsHover] = useState(false);

  function columnsCoin(isAscending, onSortChange) {
    return [
      {
        title: (
          <div className={className(styles.tableHeaderFirst, styles.tableIndex)} style={{ fontSize: 16, paddingLeft: 10 }}>
            #
          </div>
        ),
        key: 'index',
        width: '6rem',
        render: (text, record, index) => (
          <div className={className(styles.tableDataFirstColumn, styles.tableIndex)} style={{ fontSize: 16, paddingLeft: 10 }}>
            {index + 1}
          </div>
        ),
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeaderFirst}
            onClick={() => {
              setCurrentKey('name')
              onSortChange()
            }}
          >
            Name
            {currentKey == 'name' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px', color: 'white' }}
              />
            )}
          </div>
        ),
        key: 'name',
        render: (text, entry) => {
          return (
            <div className={styles.tableHeader}>
              <img height={20} src={tokenImgURL[entry.symbol]} />
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>{entry.symbol}</span>
              <span style={{ fontSize: 14, marginLeft: 15 }}>{entry.name}</span>
            </div>
          );
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('price')
              onSortChange()
            }}
          >
            Price
            {currentKey == 'price' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        key: 'price',
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>${entry.price}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('price_24h')
              onSortChange()
            }}
          >
            24h Change
            {currentKey == 'price_24h' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        key: 'price_24h',
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: entry.price_24h < 0 ? '#f6465d' : '#0ecb81', fontSize: 16 }}>{entry.price_24h}%</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('volume')
              onSortChange()
            }}
          >
            24h Volume
            {currentKey == 'volume' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        key: 'volume',
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>${entry.volume}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('marketcap')
              onSortChange()
            }}
          >
            Market Cap
            {currentKey == 'marketcap' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        key: 'marketcap',
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>${entry.marketcap}</div>;
        },
        visible: true,
      },
      {
        title: '',
        key: 'operation',
        render: (text, entry) => {
          return <Space size="middle">
            <Button className={styles.button}
              onClick={() => { window.location.href = '/wallet/swap' }}
            >
              Swap
            </Button>
            <Button className={styles.button}
              onClick={() => {
                window.location.href = '/exchange/trade'
                window.localStorage.mode = 'Wallet'
              }}>
              Trade
            </Button>
          </Space>
        },
        visible: true,
      },
    ];
  }

  function handleSearch(item) {
    return item.name.toLowerCase().includes(props.searchValue.toLowerCase())
      || item.symbol.toLowerCase().includes(props.searchValue.toLowerCase())
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={sortPairsTable(props.dataSource.filter(item => handleSearch(item)), currentKey, tokenSortAscending)}
        columns={columnsCoin(tokenSortAscending, () => { setTokenSortAscending(!tokenSortAscending) }).filter(item => item.visible == true)}
        pagination={false}
        style={{
          marginBottom: '20px',
          cursor: isHover ? 'pointer' : 'default',
        }}
        onRowMouseEnter={() => setIsHover(true)}
        onRowMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
}
