import { Space } from 'antd';
import { HomeOutlined, SettingFilled } from '@ant-design/icons';
import OxConnectWallet from '../OxConnectWallet'
import Logo from '@/assets/logo.svg'
import styles from './index.less';

const TopBar = () => {
  return (
    <div className={styles.warp}>
      <div>
        <img width={180} src={Logo} style={{margin: '-15px 0'}} />
      </div>
      {/* <SearchButton /> */}
      <div>
        <Space>
          {/* <HomeOutlined />
          <SettingFilled /> */}
          <OxConnectWallet />
        </Space>
      </div>
    </div>
  );
};
export default TopBar;
