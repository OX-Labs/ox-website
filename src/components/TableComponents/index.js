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

export function OpenOrdersTable(props) {
  const [tokenSortAscending, setTokenSortAscending] = useState(true)
  const [currentKey, setCurrentKey] = useState('');
  const [isHover, setIsHover] = useState(false);

  function columnsCoin(isAscending, onSortChange) {
    return [
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
              setCurrentKey('date')
              onSortChange()
            }}
          >
            Date
            {currentKey == 'date' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'date',
        key: 'date',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.date}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('type')
              onSortChange()
            }}
          >
            Type
            {currentKey == 'type' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'type',
        key: 'type',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.type}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('side')
              onSortChange()
            }}
          >
            Side
            {currentKey == 'side' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'side',
        key: 'side',
        render: (text, entry) => {
          return entry.side == 'Buy'
            ? <div className={styles.tableData} style={{ color: "green" }}>Buy</div>
            : <div className={styles.tableData} style={{ color: "red" }}>Sell</div>

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
            Order Price
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
          return <div className={styles.tableData}>$ {entry.price}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('filled')
              onSortChange()
            }}
          >
            Filled / All
            {currentKey == 'filled' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'filled',
        key: 'filled',
        render: (text, entry) => {
          return <div className={styles.tableData}>
            <span style={{ color: "green" }}>{entry.filled}</span>
            / {entry.all}
          </div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('total')
              onSortChange()
            }}
          >
            Total
            {currentKey == 'total' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'total',
        key: 'total',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.total}</div>;
        },
        visible: true,
      },
      {
        title: <div className={styles.tableHeader}>Action</div>,
        dataIndex: 'action',
        key: 'action',
        render: (text, entry) => {
          return <div className={styles.tableData}>
            <Button type='link'>Cancel</Button>
          </div>;
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

export function OrderHistoryTable(props) {
  const [tokenSortAscending, setTokenSortAscending] = useState(true)
  const [currentKey, setCurrentKey] = useState('');
  const [isHover, setIsHover] = useState(false);

  function columnsCoin(isAscending, onSortChange) {
    return [
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
              setCurrentKey('date')
              onSortChange()
            }}
          >
            Date
            {currentKey == 'date' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'date',
        key: 'date',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.date}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('type')
              onSortChange()
            }}
          >
            Type
            {currentKey == 'type' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'type',
        key: 'type',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.type}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('side')
              onSortChange()
            }}
          >
            Side
            {currentKey == 'side' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'side',
        key: 'side',
        render: (text, entry) => {
          return entry.side == 'Buy'
            ? <div className={styles.tableData} style={{ color: "green" }}>Buy</div>
            : <div className={styles.tableData} style={{ color: "red" }}>Sell</div>

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
            Order Price
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
          return <div className={styles.tableData}>$ {entry.price}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('filled')
              onSortChange()
            }}
          >
            Filled / All
            {currentKey == 'filled' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'filled',
        key: 'filled',
        render: (text, entry) => {
          return <div className={styles.tableData}>
            <span style={{ color: "green" }}>{entry.filled}</span>
            / {entry.all}
          </div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('avg')
              onSortChange()
            }}
          >
            Avg. Price
            {currentKey == 'avg' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'avg',
        key: 'avg',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.avg}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => {
              setCurrentKey('filledAmount')
              onSortChange()
            }}
          >
            Filled Amount
            {currentKey == 'filledAmount' && (
              <Icon
                type={!isAscending ? 'arrow-up' : 'arrow-down'}
                style={{ fontSize: '14px', marginLeft: '4px' }}
              />
            )}
          </div>
        ),
        dataIndex: 'filledAmount',
        key: 'filledAmount',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.filledAmount}</div>;
        },
        visible: true,
      },
      {
        title: <div className={styles.tableHeader}>Status</div>,
        dataIndex: 'status',
        key: 'status',
        render: (text, entry) => {
          return <div className={styles.tableData}>Completed</div>;
        },
        visible: true,
      },
      {
        title: <div className={styles.tableHeader}>Action</div>,
        dataIndex: 'action',
        key: 'action',
        render: (text, entry) => {
          return <div className={styles.tableData}>
            <Button type='link'>Detail</Button>
          </div>;
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

export function YearTable(props) {

  const [isHover, setIsHover] = useState(false)

  function columnsCoin() {
    return [
      {
        title: <div className={styles.tableHeader}>YEAR</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>{entry.year}</div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>JAN</div>,
        render: (text, entry) => {
          return (
            entry.jan == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.jan < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.jan}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>FEB</div>,
        render: (text, entry) => {
          return (
            entry.feb == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.feb < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.feb}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>MAR</div>,
        render: (text, entry) => {
          return (
            entry.mar == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.mar < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.mar}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>APR</div>,
        render: (text, entry) => {
          return (
            entry.apr == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.apr < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.apr}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>MAY</div>,
        render: (text, entry) => {
          return (
            entry.may == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.may < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.may}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>JUN</div>,
        render: (text, entry) => {
          return (
            entry.jun == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.jun < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.jun}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>JUL</div>,
        render: (text, entry) => {
          return (
            entry.jul == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.jul < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.jul}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>AUG</div>,
        render: (text, entry) => {
          return (
            entry.aug == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.aug < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.aug}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>SEP</div>,
        render: (text, entry) => {
          return (
            entry.sep == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.sep < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.sep}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>OCT</div>,
        render: (text, entry) => {
          return (
            entry.oct == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.oct < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.oct}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>NOV</div>,
        render: (text, entry) => {
          return (
            entry.nov == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.nov < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.nov}%
              </div>
          )
        },
      },
      {
        title: <div className={styles.tableHeader}>DEC</div>,
        render: (text, entry) => {
          return (
            entry.dec == '-'
              ? <div style={{ color: 'white', fontSize: 16 }}>-</div>
              : <div
                className={styles.tableData}
                style={{ color: entry.dec < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}
              >
                {entry.dec}%
              </div>
          )
        },
      },
    ];
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={props.dataSource}
        columns={columnsCoin()}
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

export function TokenHoldingTable(props) {
  const [isHover, setIsHover] = useState(false)

  function columnsCoin() {
    return [
      {
        title: <div className={styles.tableHeaderFirst}>ASSET</div>,
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          return (
            <div className={styles.tableHeader} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={entry.logo} />
              <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginBottom: -5 }}>{entry.symbol}</span>
                <span>{entry.name}</span>
              </div>
            </div >
          );
        },
      },
      {
        title: <div className={styles.tableHeader}>BALANCE</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>{entry.balance}</div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>PRICE</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>{entry.price}</div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>CHANGE 24H</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: entry.change24h < 0 ? '#ef4444' : '#34d399', fontSize: 16 }}>{entry.change24h}%</div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>VALUE</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>{entry.value}</div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>ALLOCATION</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ color: 'white', fontSize: 16 }}>{entry.allocation}</div>;
        },
      },
    ];
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={props.dataSource}
        columns={columnsCoin()}
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

export function FeesTable(props) {
  const [isHover, setIsHover] = useState(false)

  function columnsCoin() {
    return [
      {
        title: <div className={styles.tableHeaderFirst}>FEE TYPE</div>,
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          return (
            <div className={styles.tableData} style={{ fontSize: 16 }}>
              Protocol Fee
            </div >
          );
        },
      },
      {
        title: <div className={styles.tableHeader}>SETTINGS</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 16 }}>Rate</span>
            <span style={{ fontSize: 16, color: 'white' }}>{entry.rate}</span>
          </div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>RECIPENT</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ fontSize: 16 }}>Protocol Fee contract</div>;
        },
      },
    ];
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={props.dataSource}
        columns={columnsCoin()}
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

export function SalesTable(props) {
  const [isHover, setIsHover] = useState(false)

  function columnsCoin() {
    return [
      {
        title: <div className={styles.tableHeaderFirst}>Time</div>,
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          return (
            <div className={styles.tableData} style={{ fontSize: 14, color: 'white' }}>
              {entry.time}
            </div >
          );
        },
      },
      {
        title: <div className={styles.tableHeader}>Address</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 14, color: 'white' }}>{entry.address}</span>
          </div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>Amount</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 14, color: 'white' }}>${entry.amount}</span>
          </div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>Value</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 14, color: 'white' }}>{entry.tokens}</span>
          </div>;
        },
      },
      {
        title: <div className={styles.tableHeader}>Price</div>,
        render: (text, entry) => {
          return <div className={styles.tableData} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 14, color: 'white' }}>${entry.price}</span>
          </div>;
        },
      },
    ];
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={props.dataSource}
        columns={columnsCoin()}
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
