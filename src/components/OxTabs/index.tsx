import Item from 'antd/lib/list/Item';
import { useState, useEffect } from 'react';
import styles from './index.less';
const KpTabs = (props) => {
  useEffect(() => {
    const { children } = props;

    setTabs((data) => {
      let newData = [];
      children.map((item, index) => {
        newData.push({
          name: item.props.tab,
          checked: index == 0,
          render: item,
        });
      });
      return newData;
    });
  }, [props.children]);
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
    <div>
      <>
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
        {tabs.map((item, index) => item.checked && item.render)}
      </>
    </div>
  );
};
export default KpTabs;
