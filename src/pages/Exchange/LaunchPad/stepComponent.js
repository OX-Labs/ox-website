import { Steps } from 'antd';
import React, { useState } from "react";
import styles from './styles.less';

const { Step } = Steps;

const stepComponent = (props) => {
  
  const [current, setCurrent] = useState(2);

  return (
    <div 
      className={styles.stepColor} 
      id="steps"
    >
      <Steps size="small" labelPlacement='vertical' current={current}>
        <Step title="Preparation" />
        <Step title="Whitelist" />
        <Step title="Lottery Ticket" />
        <Step title="Sale" />
        <Step title="Distribution" />
      </Steps>
    </div>
              
  )
}

export default stepComponent;