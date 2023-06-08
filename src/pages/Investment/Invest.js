import React, { useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, Select, Radio, Steps } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import styles from '../Exchange/LaunchPad/styles.less'

const Invest = props => {

  const [token, setToken] = useState('WETH')
  const [tokenAmount, setTokenAmount] = useState('')
  const [slippage, setSlippage] = useState('1%')
  const [showSlippage, setShowSlippage] = useState(false)

  return (
    <div className={styles.createContainer}>
      <div style={{ background: '#0e1118', borderRadius: '1rem', padding: '3rem 10rem' }}>
        <Form style={{ marginTop: 10, textAlign: 'left' }}>
          <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>Invest</div>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Invest Token</div>
              <Radio.Group
                onChange={(e) => setToken(e.target.value)}
                value={token}
              >
                <Radio value={'WETH'}>WETH</Radio>
                <Radio value={'USDT'}>USDT</Radio>
              </Radio.Group>
            </div>
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Invest Amount</div>
            <Input
              value={tokenAmount}
              onChange={(e) => { setTokenAmount(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <div style={{ fontSize: 15, cursor: 'pointer', marginBottom: 20 }} className={styles.infoStatement} onClick={() => { setShowSlippage(!showSlippage) }}>
            Advanced settings
            {showSlippage ? <UpOutlined style={{ marginLeft: 10 }} /> : <DownOutlined style={{ marginLeft: 10 }} />}
          </div>
          {showSlippage &&
            <Form.Item>
              <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Maximum Slippage</div>
              <Input
                value={slippage}
                onChange={(e) => { setSlippage(e.target.value) }}
                style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
              />
            </Form.Item>
          }
        </Form>
        <Button className={styles.confirmButton} onClick={() => { }}>
          Invest
        </Button>
      </div>
    </div>
  )
}

export default Invest