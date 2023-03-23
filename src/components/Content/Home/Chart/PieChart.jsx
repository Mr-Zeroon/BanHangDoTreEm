import React, { useEffect, useMemo } from 'react';
import { Pie, getCanvasPattern } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllProduct } from '../../../../redux/features/productSildeAdmin/productSilceAPI'
const PieChart = () => {
  
  const dispatch = useDispatch();
  const {allProducts} = useSelector(state=> state.product)
  useEffect(()=>{
    dispatch(actFetchAllProduct())
  },[])

  const handleCountProduct = useMemo(() => {
    return allProducts.reduce((a,b) => {
      if(b.type === "spring") {
        return {
          ...a,
          springs: (a.springs || 0) + 1
        }
      }
      if(b.type === "autumn") {
        return {
          ...a,
          autumns: (a.autumns || 0) + 1
        }
      }
      if(b.type === "summer") {
        return {
          ...a,
          summers: (a.summers || 0) + 1
        }
      }
      if(b.type === "winter") {
        return {
          ...a,
          winters: (a.winters || 0) + 1
        }
      }
      return {...a}
    }, {})
  },[allProducts])

  const data = [
    {
      type: 'spring',
      value: handleCountProduct.springs,
    },
    {
      type: 'autumn',
      value: handleCountProduct.autumns,
    },
    {
      type: 'summer',
      value: handleCountProduct.summers,
    },
    {
      type: 'winter',
      value: handleCountProduct.winters,
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
