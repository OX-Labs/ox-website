// import { useState } from "react";
import { MenuOutlined } from '@ant-design/icons';
const Pane = (props: any) => {
  const { open, ...rest } = props;
  return (
    <div>
      {(open && (
        <div>
          <p>BTH/USDT</p>
          <p>
            28987.9<span>2%</span>
          </p>
        </div>
      )) || (
        <div>
          <MenuOutlined />
          BTH/USDT
        </div>
      )}
      {/* open */}
      {/* default */}
    </div>
  );
};
export default Pane;
