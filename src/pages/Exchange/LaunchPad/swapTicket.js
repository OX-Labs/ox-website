import React, { useState } from "react";
import SwapInput from './SwapInput';
import styles from './styles.less';
import { Icon } from 'antd';


const TICKETPRICE_USDT = 100;
const TICKETPRICE_ACY  = 0.2;

const swapTicket = (props) => {
  const [value, setValue] = useState();

  return (
    <div>
      <div className={styles.swapContainer}>
        <SwapInput
          title={"USDT"}
          value={value}
          isInput
          onChangeToken={amount => {
            setValue(amount)
            }}
            
        />

        <div className={styles.swaparrow}>
          <Icon style={{ fontSize: '16px', color:'#b5b5b6' }} type="arrow-down" />
        </div>
     
        <SwapInput
          title={"Ticket"}       
          value={value? Math.trunc(value / TICKETPRICE_USDT): ''}
          TicketPrice={TICKETPRICE_ACY}
        />
        <div className={styles.swap_button}
          onClick={() => {
            console.log('Participate clicked!')
          }}
        >
          Participate
        </div>
      </div>
    </div>
  )
}

export default swapTicket;