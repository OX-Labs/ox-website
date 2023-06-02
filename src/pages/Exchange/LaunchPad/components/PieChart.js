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
      value: 0,
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
      value: 56.5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
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