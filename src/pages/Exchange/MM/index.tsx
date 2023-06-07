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
      name: 'Strategy A',
      editable: true,
      exchange: 'Deepcoin',
      coin: 'USDT',
      orderNum: 2,
      grid: 1,
      eachOrderAmount: 100,
      sellOnlyPrice: 50,
      running: true,
    },
    {
      name: 'Strategy B',
      editable: false,
      exchange: 'Kucoin',
      coin: 'QH',
      orderNum: 3,
      grid: 5,
      eachOrderAmount: 400,
      sellOnlyPrice: 100,
      running: true,
    }
  ])
  const [row, setRow] = useState()

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
      title: 'Strategy',
      dataIndex: 'strategy',
      render: (_, entry) => {
        return (
          <div>{entry.name}</div>
        )
      },
    },
    {
      title: 'Exchange',
      dataIndex: 'exchange',
      render: (_, entry) => {
        return (
          <div>{entry.exchange}</div>
        )
      },
    },
    {
      title: 'Coin',
      dataIndex: 'coin',
      render: (_, entry) => {
        return (
          <div>{entry.coin}</div>
        )
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (_, entry) => {
        return (
          <>
            {entry.running ?
              entry.editable ?
                <Tag color='green' style={{ background: 'transparent' }}>EDITABLE</Tag>
                : <Tag color='blue' style={{ background: 'transparent' }}>RUNNING</Tag>
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
            style={{ width: 60, color: entry.editable ? 'white' : 'gray' }}
            disabled={!entry.editable}
            onClick={() => {
              setRow(entry)
              setShowEditModal(true)
            }}
          >
            Edit
          </Button>
        </Space>
      ),
    }
  ]

  useEffect(() => {
    if (row) {
      setStrategies([row, strategies[1]])
    }
  }, [row])

  return (
    <div>
      <div style={{ padding: '60px 250px 20px 250px', display: 'grid' }}>
        <div style={{ borderBottom: '1px solid #333333' }}>
          <h3 style={{ float: 'left' }}>Market Making</h3>
          <Button
            type='primary' 
            style={{float: 'right', marginLeft: 10, marginBottom: 10, borderRadius: 15, height: 35 }}
            onClick={() => { setShowAddModal(true) }}
          >
            Create Strategy
          </Button>
        </div>
      </div>
      <div style={{ padding: '10px 250px' }}>
        <Table
          className={styles.nobgTable}
          dataSource={strategies}
          columns={columns}
          pagination={false}
        />
      </div>
      <AddModal showModal={showAddModal} setShowModal={setShowAddModal} />
      <EditModal showModal={showEditModal} setShowModal={setShowEditModal} row={row} setRow={setRow} />
    </div>
  )
}

export default MM