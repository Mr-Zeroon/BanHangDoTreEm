import React from 'react';
import { Column } from '@ant-design/plots';

const ColumnChart = () => {
  const data = [
    {
      type: 'January',
      sales: 38,
    },
    {
      type: 'February',
      sales: 52,
    },
    {
      type: 'March',
      sales: 61,
    },
    {
      type: 'April',
      sales: 100,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 20,
    },
    {
      type: 'August',
      sales: 38,
    },
    {
      type: 'September',
      sales: 48,
    },
    {
      type: 'October',
      sales: 58,
    },
    {
      type: 'November',
      sales: 38,
    },
    {
      type: 'December',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      
      position: 'middle',
      
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Type',
      },
      sales: {
        alias: 'The Sale',
      },
    },
  };
  return <Column {...config} />;
};

export default ColumnChart;
