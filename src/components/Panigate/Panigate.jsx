import { Pagination } from 'antd';
import { useState } from 'react';

const Paginations = () =>  {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
  <Pagination current={current} pageSize={4} onChange={onChange} total={60} />
  )
}
export default Paginations;