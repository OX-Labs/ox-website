import { useState } from 'react';
import styles from './index.less';
const KpTabs = (porps) => {
  const [tabs, setTabs] = useState([
    {
      name: 'Assets',
      checked: true,
    },
    {
      name: 'Limit Order',
      checked: false,
    },
    {
      name: 'Conditional Order',
      checked: false,
    },
    {
      name: 'Order History',
      checked: false,
    },
    {
      name: 'Trading History',
      checked: false,
    },
  ]);
  const onChoose = (index: any) => {
    setTabs((data) => {
      let newData = data.map((item) => {
        item.checked = false;
        return item;
      });
      newData[index].checked = true;
      return newData;
    });
    // porps.onChange(index);
  };
  return (
    <div className={styles.tabs}>
      {tabs.map((item, index) => (
        <div
          onClick={() => onChoose(index)}
          className={(item.checked && styles.activity) || {}}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default KpTabs;
