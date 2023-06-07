import { useState } from 'react'
import { Button, Tag, Space, Modal, Form, Input, Select, Radio } from 'antd';
import styles from './styles.less'

const AddModal = (props: any) => {

  const {
    showModal,
    setShowModal,
  } = props

  const [name, setName] = useState('')
  const [exchange, setExchange] = useState('Bitmart')
  const [coin, setCoin] = useState('QH')
  const [orderNum, setOrderNum] = useState(0)
  const [grid, setGrid] = useState(0)
  const [eachOrderAmount, setEachOrderAmount] = useState(0)
  const [sellOnlyPrice, setSellOnlyPrice] = useState(0)
  const [editable, setEditable] = useState(false)
  const [mode, setMode] = useState('taker')

  return (
    <Modal
      open={showModal}
      footer={null}
      onCancel={() => { setShowModal(false) }}
      className={styles.myModal}
    >
      <div style={{ marginTop: 30, fontSize: 16 }}>
        <span
          style={{ cursor: 'pointer', color: mode == 'taker' ? 'white' : '#b6b6b5' }}
          onClick={() => { setMode('taker') }}
        >
          Taker
        </span>
        <span
          style={{ marginLeft: 10, cursor: 'pointer', color: mode == 'maker' ? 'white' : '#b6b6b5' }}
          onClick={() => { setMode('maker') }}
        >
          Maker
        </span>
      </div>
      <Form style={{ marginTop: 10 }}>
        <Form.Item>
          <div style={{ fontSize: 15, color: '#b6b6b5' }}>Name</div>
          <Input
            value={name}
            onChange={(e: any) => { setName(e.target.value) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, color: '#b6b6b5' }}>Exchange</div>
          <Select
            value={exchange}
            onChange={e => { setExchange(e) }}
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
            value={coin}
            onChange={e => { setCoin(e) }}
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
            value={orderNum}
            onChange={(e: any) => { setOrderNum(e.target.value) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Grid</div>
          <Input
            value={grid}
            onChange={(e: any) => { setGrid(e.target.value) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Each Order Amount</div>
          <Input
            value={eachOrderAmount}
            onChange={(e: any) => { setEachOrderAmount(e.target.value) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Sell Only Price</div>
          <Input
            value={sellOnlyPrice}
            onChange={(e: any) => { setSellOnlyPrice(e.target.value) }}
            style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Editable</div>
            <Radio.Group
              onChange={(e) => setEditable(e.target.value)}
              value={editable}
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
      </Form>
      <Button className={styles.confirmButton} onClick={() => { setShowModal(false) }}>
        Submit
      </Button>
    </Modal>
  )
}

export default AddModal