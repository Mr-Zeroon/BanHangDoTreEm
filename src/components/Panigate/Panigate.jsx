import { Pagination } from 'antd';
import { useState } from 'react';

const Paginations = () =>  {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
  <Pagination current={current} onChange={onChange} total={50} />
  )
}
export default Paginations;