import React, { useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, Select, Radio, Steps } from 'antd'
import dayjs from 'dayjs'
import styles from './styles.less'

const LockToken = props => {

  const [tokenAddress, setTokenAddress] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <div className={styles.createContainer}>
      <div style={{ background: '#0e1118', borderRadius: '1rem', padding: '3rem 10rem' }}>
        <Form style={{ marginTop: 10, textAlign: 'left' }}>
          <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>Create Your Locks for Free</div>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token or LP Token Address</div>
            <Input
              value={tokenAddress}
              onChange={(e) => { setTokenAddress(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Total Raise</div>
            <Input
              value={amount}
              onChange={(e) => { setAmount(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Start Date (UTC)</div>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{
                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
              }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333', width: '100%' }}
              popupClassName={styles.datepicker}
            />
          </Form.Item>
        </Form>
        <Button className={styles.confirmButton} onClick={() => { }}>
          Lock
        </Button>
      </div>
    </div>
  )
}

export default LockToken