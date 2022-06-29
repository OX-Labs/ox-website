import { Row, Col } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import styles from './index.less';

const Item = (props) => {
  const { title, desc, ...rest } = props;
  return (
    <div style={{ padding: '14px 11px 10px' }} {...rest}>
      <div>{title}</div>
      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
        {desc}
      </div>
    </div>
  );
};
const OxTradingBot = (props: any) => {
  const { title, token, name, price, number, children, ...rest } = props;
  return (
    <div className={styles.kb} {...rest}>
      {children}
    </div>
  );
};
OxTradingBot.Item = Item;
export default OxTradingBot;
