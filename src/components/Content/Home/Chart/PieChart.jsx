import React from 'react';
import { Pie, getCanvasPattern } from '@ant-design/plots';

const PieChart = () => {
  
  const data = [
    {
      type: 'House',
      value: 27,
    },
    {
      type: 'Grains',
      value: 25,
    },
    {
      type: 'Beauty care',
      value: 18,
    },
    {
      type: 'Cosmetics',
      value: 15,
    },
    {
      type: 'Type',
      value: 5,
    },
  ];

  const pattern = (datum, color) =>
    getCanvasPattern({
      type: datum.type === 'Loại 1' ? 'dot' : 'line',
      cfg: {
        backgroundColor: datum.type === 'Loại 1' ? '#d78ab7' : color,
      },
    });

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    color: ['#215B77', '#1B9CD0', '#61C9FF', '#ABDFFF', '#FFDE94'],
    radius: 0.6,
    label: {
      type: 'outer',
      offset: 10,
      labelLine: false,
      content: '{value}',
    },
    pieStyle: {
      lineWidth: 1,
    },
    // 给legend增加贴图
    legend: {
      marker: (text, index, item) => {
        const color = item.style.fill;
        return {
          style: {
            fill: pattern(
              {
                type: text,
              },
              color,
            ),
            r: 8,
          },
        };
      },
    },
    pattern,
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChart;
