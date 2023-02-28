import { Pagination } from 'antd';
import { useState } from 'react';

const Paginations = ({totalPosts,potsPerPage,current,setCurrent}) =>{
  let pages=[];
  for(let i = 1;i<=Math.ceil(totalPosts/potsPerPage);i++){
    pages.push(i);
  }
  console.log(totalPosts,"total");
  console.log(potsPerPage,"postsperpage");
  console.log(current,"current");
  console.log(setCurrent,"setCurrent");
  return (
    <div className='pagination'>
      {
        pages.map((page,index)=>{
          return (<button key={index} onClick={()=>setCurrent(page)} className={page === current? 'active': ""}>{page}</button>)
        })
      }
    </div>
  )
}
export default Paginations;