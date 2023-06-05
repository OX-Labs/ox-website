import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const TokenomicsPieChart = (props) => {
  const data = [
    {
      type: 'Presale',
      value: 10,
    },
    {
      type: 'Liquidity',
      value: 5.5,
    },
    {
      type: 'Team Vesting',
      value: 5.5,
    },
    {
      type: 'Locked',
      value: 13,
    },
    {
      type: 'Unlocked',
      value: 15,
    },
    {
      type: 'Burnt',
      value: 51,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color: (e) => {
      if(e.type == 'Presale') {
        return "#C6224E"
      } else if(e.type == 'Liquidity') {
        return "#1C9965"
      } else if(e.type == 'Team Vesting') {
        return "#E29227"
      } else if(e.type == 'Locked') {
        return "#1E5D91"
      } else if(e.type == 'Unlocked') {
        return "#70BA33"
      } else {
        return "#0030d4"
      }
    },
    style: {
      height: '200px',
    },
    // width:'335px',
    radius: 0.75,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
      style: {
        fill: 'white',
      }
    },
    legend: {
      title: {
        text: '',
      },
      text: {
        style: {
          fill: 'white',
        }
      }
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default TokenomicsPieChart;


// ReactDOM.render(<DemoPie />, document.getElementById('container'));