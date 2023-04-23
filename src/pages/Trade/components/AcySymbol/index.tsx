import { SwapOutlined } from '@ant-design/icons';
import styles from './index.less';

const AcySymbol = (props: any) => {
  const {
    activeToken0,
    activeToken1,
    onSelectToken0,
    onSelectToken1,
    latestPricePercentage,
    showChart,
    setShowChart,
  } = props;
  // 选择货币的弹窗
  // const [visible, setVisible] = useState(null);
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', borderBottom: ' 10px solid black' }}>
        <div style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          padding: '15px 26px 10px',
        }}>
          <div className={styles.title}>
            {activeToken0.symbol}
            <SwapOutlined
              onClick={()=>{
                onSelectToken0(activeToken1)
                onSelectToken1(activeToken0)
              }}
              style={{ fontSize: '20px', color: '#ffffff', marginLeft: 10 }}
            />
          </div>
          {/* </Dropdown> */}
          <div className={styles.title} style={{ marginLeft: -5, color: '#ffffffa6' }}>
            {activeToken1.symbol}
          </div>
          <div style={{ marginLeft: '20px' }} className={styles.item}>
            <div>24h Change</div>
            {latestPricePercentage > 0 ?
              <span style={{ color: '#0ecc83' }}>{latestPricePercentage}% / $213.15</span>
              : <span style={{ color: '#fa3c58' }}>{latestPricePercentage}% / $213.15</span>
            }
          </div>
          <div className={styles.item}>
            <div>24h High</div>
            <span>$ 23212.90</span>
          </div>
          <div className={styles.item}>
            <div>24h Low</div>
            <span>$ 20123.15</span>
          </div>
          <div className={styles.item}>
            <div>24h Volume(USDT)</div>
            <span>$ 4,598,774,444.16</span>
          </div>

        </div>
        {showChart ?
          <div style={{ margin: '15px', cursor: 'pointer' }} onClick={() => { setShowChart() }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" fill="#b5b6b6"><path d="m343 896-43-43 180-180 180 180-43 43-137-137-137 137Zm137-417L300 299l43-43 137 137 137-137 43 43-180 180Z" /></svg>
          </div> :
          <div style={{ margin: '15px', cursor: 'pointer' }} onClick={() => { setShowChart() }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" fill="#b5b6b6"><path d="M480 936 300 756l44-44 136 136 136-136 44 44-180 180ZM344 444l-44-44 180-180 180 180-44 44-136-136-136 136Z" /></svg>
          </div>
        }
      </div>
    </>
  );
};
export default AcySymbol;
