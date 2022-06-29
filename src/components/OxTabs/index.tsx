import { Children, useState } from 'react';
import styles from './index.less';
const KpTabs = (props) => {
  debugger;
  const [tabs, setTabs] = useState([
    {
      name: 'BUY',
      checked: true,
    },
    {
      name: 'SELL',
      checked: false,
    },
    {
      name: 'ADVANCED',
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
