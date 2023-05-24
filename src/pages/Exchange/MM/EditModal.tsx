import { useState } from 'react'
import { Button, Modal, Form, Input, Select, Radio } from 'antd';
import styles from './styles.less'

const EditModal = (props: any) => {

  const {
    showModal,
    setShowModal,
    row,
    setRow,
  } = props

  const [name, setName] = useState('')
  const [exchange, setExchange] = useState(row?.exchange)
  const [coin, setCoin] = useState(row?.coin)
  const [orderNum, setOrderNum] = useState(row?.orderNum)
  const [grid, setGrid] = useState(row?.grid)
  const [eachOrderAmount, setEachOrderAmount] = useState(row?.eachOrderAmount)
  const [sellOnlyPrice, setSellOnlyPrice] = useState(row?.sellOnlyPrice)
  const [editable, setEditable] = useState(true)

  console.log('joy', row)
  return (
    <Modal
      open={showModal}
      footer={null}
      onCancel={() => { setShowModal(false) }}
      className={styles.myModal}
    >
      <Form layout='horizontal' style={{ marginTop: 30 }}>
        <Form.Item>
          <div style={{ fontSize: 15, color: '#b6b6b5' }}>Name</div>
          <Input
            value={row?.name}
            onChange={(e: any) => { setRow({...row, name: e.target.value}) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, color: '#b6b6b5' }}>Exchange</div>
          <Select
            value={row?.exchange}
            onChange={e => { setRow({...row, exchange: e }) }}
            className={styles.mySelect}
            dropdownClassName={styles.dropDownMenu}
          >
            {['Bitmart', 'Deepcoin', 'Kucoin'].map(e => (
              <Select.Option className={styles.optionItem} value={e}>
                {e}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, color: '#b6b6b5' }}>Coin</div>
          <Select
            value={row?.coin}
            onChange={e => { setRow({...row, coin: e }) }}
            className={styles.mySelect}
            dropdownClassName={styles.dropDownMenu}
          >
            {['QH', 'USDT'].map(e => (
              <Select.Option className={styles.optionItem} value={e}>
                {e}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Order Number</div>
          <Input
            value={row?.orderNum}
            onChange={(e: any) => { setRow({...row, orderNum: e.target.value}) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Grid</div>
          <Input
            value={row?.grid}
            onChange={(e: any) => { setRow({...row, grid: e.target.value}) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Each Order Amount</div>
          <Input
            value={row?.eachOrderAmount}
            onChange={(e: any) => { setRow({...row, eachOrderAmount: e.target.value}) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Sell Only Price</div>
          <Input
            value={row?.sellOnlyPrice}
            onChange={(e: any) => { setRow({...row, sellOnlyPrice: e.target.value}) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Editable</div>
            <Radio.Group
              onChange={(e) => setRow({...row, editable: e.target.value})}
              value={editable}
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
      </Form>
      <Button className={styles.confirmButton} onClick={() => { setShowModal(false) }}>
        Save
      </Button>
    </Modal>
  )
}

export default EditModal