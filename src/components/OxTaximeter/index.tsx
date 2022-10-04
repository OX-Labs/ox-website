import { Row, Col } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import styles from './index.less';

const KpBigInput = (props: any) => {
  const { title, token, name, price, number, ...rest } = props;
  return (
    <div className={styles.kb} {...rest}>
      <div className={styles.areaInput}>
        {title && <div className={styles.price}>{title}</div>}

        {token && <span>{token}</span>}
      </div>
    </div>
  );
};
export default KpBigInput;
