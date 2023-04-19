import React, { useState } from 'react';
import { Table } from 'antd';
import className from 'classnames';
import styles from './styles.less'

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
              <span style={{marginLeft: '10px'}}>{entry.name}</span>
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
          let price_24h = (entry.price_24h*100).toPrecision(2)
          if(price_24h > 0) {
            return <div className={styles.tableData} style={{color: "green"}}>{price_24h}% ↑</div>
          } else {
            return <div className={styles.tableData} style={{color: "red"}}>{price_24h}% ↓</div>
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
          if(entry.liquidity > 1e12) return <div className={styles.tableData}>{(entry.liquidity/1e12).toFixed(0)}T</div>;
          if(entry.liquidity > 1e9) return <div className={styles.tableData}>{(entry.liquidity/1e9).toFixed(0)}G</div>;
          if(entry.liquidity > 1e6) return <div className={styles.tableData}>{(entry.liquidity/1e6).toFixed(0)}M</div>;
          if(entry.liquidity > 1e3) return <div className={styles.tableData}>{(entry.liquidity/1e3).toFixed(0)}K</div>;
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
        columns={columnsCoin(tokenSortAscending, ()=>{setTokenSortAscending(!tokenSortAscending)}).filter(item => item.visible == true)}
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

export function TradeHistoryTable(props) {
  const [currentKey, setCurrentKey] = useState('');
  const [isHover, setIsHover] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(10);

  function columnsCoin(token0, token1) {
    return [
      {
        title: (
          <div
            className={styles.tableHeaderFirst}
            onClick={() => { setCurrentKey('date') }}
          >
            Date
          </div>
        ),
        dataIndex: 'date',
        key: 'date',
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          let date = Date(entry.timestamp)
          return (
            <div className={styles.tableHeader}>{date.split(' GMT')[0].substring(3)}</div>
          );
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('type') }}
          >
            Type
          </div>
        ),
        dataIndex: 'type',
        key: 'type',
        render: (text, entry) => {
          let type = entry.amount0 < 0 ? 'buy' : 'sell'
          if (type == 'sell') {
            return <div className={styles.tableData} style={{ color: 'red' }}>{type}</div>;
          } else {
            return <div className={styles.tableData} style={{ color: 'green' }}>{type}</div>;
          }
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('exchange') }}
          >
            Rate
          </div>
        ),
        dataIndex: 'exchange',
        key: 'exchange',
        render: (text, entry) => {
          return <div className={styles.tableData}>{parseFloat(entry.exchangeRate).toFixed(2)}%</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('price0') }}
          >
            Price {token0}
          </div>
        ),
        dataIndex: 'price0',
        key: 'price0',
        render: (text, entry) => {
          return <div className={styles.tableData}>${parseFloat(entry.token0Price).toFixed(2)}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('price1') }}
          >
            Price {token1}
          </div>
        ),
        dataIndex: 'price1',
        key: 'price1',
        render: (text, entry) => {
          return <div className={styles.tableData}>${parseFloat(entry.token1Price).toFixed(2)}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('amount0') }}
          >
            Amount {token0}
          </div>
        ),
        dataIndex: 'amount0',
        key: 'amount0',
        render: (text, entry) => {
          return <div className={styles.tableData}>{parseFloat(entry.amount0).toFixed(2)}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('amount1') }}
          >
            Amount {token1}
          </div>
        ),
        dataIndex: 'amount1',
        key: 'amount1',
        render: (text, entry) => {
          return <div className={styles.tableData}>{parseFloat(entry.amount1).toFixed(2)}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('maker') }}
          >
            Maker
          </div>
        ),
        dataIndex: 'maker',
        key: 'maker',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.transaction.id.slice(0, 4)}...{entry.transaction.id.slice(entry.transaction.id.length - 4, entry.transaction.id.length)}</div>;
        },
        visible: true,
      },
      // {
      //   title: (
      //     <div
      //       className={styles.tableHeader}
      //       onClick={() => { setCurrentKey('clue') }}
      //     >
      //       Clue
      //     </div>
      //   ),
      //   dataIndex: 'clue',
      //   key: 'clue',
      //   render: (text, entry) => {
      //     return <div style={{display: 'flex'}}>
      //       <svg xmlns="http://www.w3.org/2000/svg" fill='#b5b6b6' viewBox="0 0 50 50" className={styles.function}><path d="M30.2 42v-6.25h-7.7v-20.5h-4.65v6.5H4V6h13.85v6.25H30.2V6H44v15.75H30.2v-6.5h-4.7v17.5h4.7v-6.5H44V42ZM7 9v9.75Zm26.2 20.25V39ZM33.2 9v9.75Zm0 9.75H41V9h-7.8Zm0 20.25H41v-9.75h-7.8ZM7 18.75h7.85V9H7Z"/></svg>
      //       <svg xmlns="http://www.w3.org/2000/svg" fill='#b5b6b6' viewBox="0 0 50 50" className={styles.function}><path d="M9 39h20V29h10V9H9v30Zm0 3q-1.25 0-2.125-.875T6 39V9q0-1.25.875-2.125T9 6h30q1.25 0 2.125.875T42 9v21L30 42Zm6-15v-3h8.5v3Zm0-8v-3h18v3ZM9 39V9v30Z"/></svg>
      //       <svg xmlns="http://www.w3.org/2000/svg" fill='#b5b6b6' viewBox="0 0 50 50" className={styles.function}><path d="M22 40q-.85 0-1.425-.575Q20 38.85 20 38V26L8.05 10.75q-.7-.85-.2-1.8Q8.35 8 9.4 8h29.2q1.05 0 1.55.95t-.2 1.8L28 26v12q0 .85-.575 1.425Q26.85 40 26 40Zm2-13.8L36 11H12Zm0 0Z"/></svg>
      //     </div>;
      //   },
      //   visible: true,
      // },
    ];
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={props.dataSource.slice(0, displayNumber + 1)}
        columns={columnsCoin(props.token0, props.token1).filter(item => item.visible == true)}
        pagination={false}
        style={{
          marginBottom: '20px',
          cursor: isHover ? 'pointer' : 'default',
        }}
        onRowMouseEnter={() => setIsHover(true)}
        onRowMouseLeave={() => setIsHover(false)}
        footer={() => (
          <div style={{fontSize: 16, textAlign: 'center', width: '100%'}}>
            {props.dataSource.slice(0, displayNumber + 1).length > displayNumber &&
              (<a onClick={()=>{setDisplayNumber(displayNumber+10)}} className={styles.seeMore}>
                See More...
              </a>
              )}
          </div>
        )}
      />
    </div>
  );
}

export function PoolsActivityTable(props) {
  const [currentKey, setCurrentKey] = useState('');
  const [isHover, setIsHover] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(10);

  function columnsCoin(pool) {
    return [
      {
        title: (
          <div
            className={styles.tableHeaderFirst}
            onClick={() => { setCurrentKey('date') }}
          >
            Date
          </div>
        ),
        dataIndex: 'date',
        key: 'date',
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          let date = Date(entry.timestamp)
          return (
            <div className={styles.tableHeader}>{date.split(' GMT')[0].substring(3)}</div>
          );
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('type') }}
          >
            Type
          </div>
        ),
        dataIndex: 'type',
        key: 'type',
        render: (text, entry) => {
          if (entry.type == 'remove') {
            return <div className={styles.tableData} style={{ color: 'red' }}>{entry.type}</div>;
          } else {
            return <div className={styles.tableData} style={{ color: 'green' }}>{entry.type}</div>;
          }
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeader}
            onClick={() => { setCurrentKey('token_value') }}
          >
            Token Value
          </div>
        ),
        dataIndex: 'token_value',
        key: 'token_value',
        render: (text, entry) => {
          return <div className={styles.tableData}>{entry.token_value} {entry.token}</div>;
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeaderFirst}
            onClick={() => { setCurrentKey('amount1') }}
          >
            Token Amount
          </div>
        ),
        dataIndex: 'amount0',
        key: 'amount0',
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          return (
            <div className={styles.tableHeader}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{entry.tokenAmount} {entry.token}</span>
              </div>
            </div>
          );
        },
        visible: true,
      },
      {
        title: (
          <div
            className={styles.tableHeaderFirst}
            onClick={() => { setCurrentKey('amount1') }}
          >
            {pool} Amount
          </div>
        ),
        dataIndex: 'amount1',
        key: 'amount1',
        className: 'leftAlignTableHeader',
        render: (text, entry) => {
          return (
            <div className={styles.tableHeader}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{entry.poolAmount}</span>
              </div>
            </div>
          );
        },
        visible: true,
      },
    ];
  }

  return (
    <div className={styles.nobgTable}>
      <Table
        dataSource={props.dataSource.slice(0, displayNumber + 1)}
        columns={columnsCoin(props.pool).filter(item => item.visible == true)}
        pagination={false}
        style={{
          marginBottom: '20px',
          cursor: isHover ? 'pointer' : 'default',
        }}
        onRowMouseEnter={() => setIsHover(true)}
        onRowMouseLeave={() => setIsHover(false)}
        footer={() => (
          <div style={{fontSize: 16, textAlign: 'center', width: '100%'}}>
            {props.dataSource.slice(0, displayNumber + 1).length > displayNumber &&
              (<a onClick={()=>{setDisplayNumber(displayNumber+10)}} className={styles.seeMore}>
                See More...
              </a>
              )}
          </div>
        )}
      />
    </div>
  );
}