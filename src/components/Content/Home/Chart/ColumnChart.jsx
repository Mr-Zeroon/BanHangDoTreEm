import React from 'react';
import { Column } from '@ant-design/plots';

const ColumnChart = () => {
  const data = [
    {
      type: 'House',
      sales: 38,
    },
    {
      type: 'Grains',
      sales: 52,
    },
    {
      type: 'Oils',
      sales: 61,
    },
    {
      type: 'Beauty care',
      sales: 145,
    },
    {
      type: 'Cosmetics',
      sales: 48,
    },
    {
      type: 'Foods',
      sales: 38,
    },
    {
      type: 'Drinks',
      sales: 38,
    },
    {
      type: 'Alcohol',
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
