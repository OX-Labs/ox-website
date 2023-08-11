import { useState, useEffect } from 'react'
import type { ColumnsType } from 'antd/es/table'
import { Table, Button, Tag, Space } from 'antd';
import styles from './styles.less'
import AddModal from './AddModal';
import EditModal from './EditModal';

const MM = (props: any) => {

  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [strategies, setStrategies] = useState([
    {
      name: 'Maker',
      ExchangeID: 'Bitmart',
      apiKey: 'e8a7e35eaa26c633c3497bde947c543f3d3f6be',
      buygrid: 0.01,
      sellgrid: 0.01,
      BuyOrderNum: 50,
      SellOrderNum: 50,
      OrderAmount: 50,
      running: true,
    },
    {
      name: 'Taker1',
      ExchangeID: 'Bitmart',
      apiKey: '7ec6c000eaf3df846b18d228a98c441bc9f46c4a',
      ref_pair: 'BNB/USDT',
      BuyOrderNum: 30,
      SellOrderNum: 30,
      OrderAmount: 30,
      buyratio: 0.5,
      sellratio: 0.5,
      running: true,
    },
    {
      name: 'Taker2',
      ExchangeID: 'Bitmart',
      apiKey: '1c186796c4feb93943a2c6a82442662e60153aa1',
      ref_pair: 'ETH/USDT',
      BuyOrderNum: 30,
      SellOrderNum: 30,
      OrderAmount: 30,
      buyratio: 0.5,
      sellratio: 0.5,
      running: false,
    },
    {
      name: 'Taker3',
      ExchangeID: 'Bitmart',
      apiKey: '9e563634865744f227054bfed22479677509c43f',
      ref_pair: 'BNB/USDT',
      BuyOrderNum: 30,
      SellOrderNum: 30,
      OrderAmount: 30,
      buyratio: 0.5,
      sellratio: 0.5,
      running: true,
    },
    {
      name: 'Maker',
      ExchangeID: 'Deepcoin',
      apiKey: '58fe66b5-a5e3-49f0-8d24-163b78d83df1',
      buygrid: 0.01,
      sellgrid: 0.01,
      BuyOrderNum: 50,
      SellOrderNum: 50,
      OrderAmount: 50,
      running: true,
    },
    {
      name: 'Taker1',
      ExchangeID: 'Deepcoin',
      apiKey: '79b6e1b7-2613-4243-b189-8c95d5de3271',
      ref_pair: 'BNB/USDT',
      BuyOrderNum: 30,
      SellOrderNum: 30,
      OrderAmount: 10,
      buyratio: 0.5,
      sellratio: 0.5,
      running: true,
    },
    {
      name: 'Taker2',
      ExchangeID: 'Deepcoin',
      apiKey: '122704e9-2b33-4c1c-b6a4-37674d279045',
      ref_pair: 'ETH/USDT',
      BuyOrderNum: 30,
      SellOrderNum: 30,
      OrderAmount: 10,
      buyratio: 0.5,
      sellratio: 0.5,
      running: false,
    },
  ])
  const [selectedRow, setSelectedRow] = useState()
  const [activeStrategy, setActiveStrategy] = useState('Bitmart')

  const columns: ColumnsType<any> = [
    {
      title: '#',
      dataIndex: 'id',
      render: (_, __, index) => {
        return index + 1
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, entry: any) => {
        return (
          <div>{entry.name}</div>
        )
      }
    },
    {
      title: 'Reference Pair',
      dataIndex: 'pair',
      render: (_, entry) => {
        return (
          <div>{entry.name == 'Maker' ? '—' : entry.ref_pair}</div>
        )
      },
    },
    {
      title: 'Grid',
      dataIndex: 'grid',
      render: (_, entry) => {
        return (
          <div>{entry.name == 'Maker' ? entry.buygrid : '—'}</div>
        )
      },
    },
    {
      title: 'Order Number',
      dataIndex: 'OrderNum',
      render: (_, entry) => {
        return (
          <div>{entry.BuyOrderNum}</div>
        )
      },
    },
    {
      title: 'Order Amount',
      dataIndex: 'orderAmount',
      render: (_, entry) => {
        return (
          <div>{entry.OrderAmount} USDT</div>
        )
      },
    },
    {
      title: 'Ratio',
      dataIndex: 'ratio',
      render: (_, entry) => {
        return (
          <div>{entry.name == 'Maker' ? '—' : entry.buyratio}</div>
        )
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (_, entry) => {
        return (
          <>
            {entry.running
              ? <Tag color='green' style={{ background: 'transparent' }}>RUNNING</Tag>
              : <Tag color='red' style={{ background: 'transparent' }}>PAUSED</Tag>
            }
          </>
        )
      },
    },
    {
      title: '',
      render: (_, entry, index) => (
        <Space size="middle">
          <Button
            type="link"
            style={{ width: 60, marginLeft: -15, color: entry.running ? 'white' : 'gray' }}
            disabled={!entry.running}
            onClick={() => {
              entry.running = false
              index == 0 ?
                setStrategies([entry, strategies[1]]) :
                setStrategies([strategies[0], entry])
            }}
          >
            Pause
          </Button>
          <Button
            type="link"
            style={{ width: 60, color: !entry.running ? 'white' : 'gray' }}
            disabled={entry.running}
            onClick={() => {
              setSelectedRow(entry)
              setShowEditModal(true)
            }}
          >
            Edit
          </Button>
        </Space>
      ),
    }
  ]

  const edit = () => {
    const list = strategies.map(e => {
      if(e.apiKey == selectedRow.apiKey) {
        return selectedRow
      }
      return e
    })
    setStrategies(list)
  }

  return (
    <div>
      <div style={{ padding: '60px 250px 20px 250px', display: 'grid' }}>
        <div style={{ borderBottom: '1px solid #333333' }}>
          <div style={{ float: 'left', display: 'flex' }}>
            <h3
              style={{ cursor: 'pointer', color: activeStrategy == 'Bitmart' ? 'white' : '#ffffffb3' }}
              onClick={() => setActiveStrategy("Bitmart")}
            >
              Bitmart
            </h3>
            <h3
              style={{ marginLeft: 20, cursor: 'pointer', color: activeStrategy == 'Deepcoin' ? 'white' : '#ffffffb3' }}
              onClick={() => setActiveStrategy("Deepcoin")}
            >
              Deepcoin
            </h3>
          </div>
          <Button
            type='primary'
            style={{ float: 'right', marginLeft: 10, marginBottom: 10, borderRadius: 15, height: 35 }}
            onClick={() => { setShowAddModal(true) }}
          >
            Create Strategy
          </Button>
        </div>
      </div>
      <div style={{ padding: '10px 250px' }}>
        <Table
          className={styles.nobgTable}
          dataSource={strategies.filter(e => e.ExchangeID == activeStrategy)}
          columns={columns}
          pagination={false}
        />
      </div>
      <AddModal showModal={showAddModal} setShowModal={setShowAddModal} />
      <EditModal showModal={showEditModal} setShowModal={setShowEditModal} row={selectedRow} setRow={setSelectedRow} edit={edit} />
    </div>
  )
}

export default MM