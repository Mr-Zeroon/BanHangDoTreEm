import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { actDeleteProduct, actFetchAllProduct } from '../../../redux/features/productSildeAdmin/productSilceAPI';
import Paginations from '../../Panigate/Panigate';

const ProductAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = (event) =>{
    event.preventDefault();
    navigate('/admin/product/add')
  }
  const {allProducts,isLoading} = useSelector(state=> state.product)
  console.log(allProducts,"all")
  useEffect(()=>{
    
    dispatch(actFetchAllProduct())
  },[])
  
  const renderDataProducts = (products)=>{
      return products.map((product)=>(
      <tr key={product.id}>
        <td className="text-left">{product?.id}</td>
        <td className="text-left">{product?.name}</td>
        <td className="text-left">{product?.type}</td>
        <td className="text-left">{product?.quantity}</td>
        <td className="text-left">{product?.dateAdded}</td>
        <td className="text-left">{product?.dateOfSale}</td>
        <td className="text-left">
          <div className='customer-top__btntable'>
            <button onClick={()=>handleEdit(product.id)}>Edit</button>
            <button onClick={()=>handleDeleteProduct(product?.id)} className='Delete'>Delete</button>
          </div>
        </td>
      </tr>)
      )
  }

  const handleDeleteProduct = (id)=>{
    dispatch(actDeleteProduct(id))
    toast.success('Delete successfully!')
  }
  const handleEdit = (id) =>{
    navigate(`/admin/product/${id}`)
  }  

  const [current, setCurrent] = useState(1);
  const [potsPerPage, setPotsPerPage] = useState(4);
  const lastPostIndex = current * potsPerPage;
  const firstPostIndex = lastPostIndex - potsPerPage;
  const currentPosts = allProducts.slice(firstPostIndex,lastPostIndex)
  
  return (
    <div className='customer'>
      <div className='customer-top'>
          <div className='customer-top__title'>
              <h1>Product Management</h1>
          </div>
          <div className='customer-top__btn'>
              <div className='customer-top__search'>
                <input type="text" placeholder='Please enter into....'/>
                <a href=""><i className='bx bx-search'></i></a>
              </div>
              <button  onClick={handleAdd}>ADD</button>
          </div>
      </div>



      <div className='customer-bottom'>
          {isLoading 
          ? (<div>Loading .....</div>)
          :<table className="table-fill">
            <thead>
              <tr>
                <th className='text-left'>ID</th>
                <th className='text-left'>Product's name</th>
                <th className='text-left'>Product Type</th>
                <th className='text-left'>Quantity</th>
                <th className='text-left'>Date Added</th>
                <th className='text-left'>Date of Sale</th>
                <th className='text-left'>Action</th>
              </tr>
            </thead>
            <tbody className="table-hover">{renderDataProducts(currentPosts)}</tbody>     
          </table>
          }
      </div>
      <div className='pagination-page'>
            <Paginations totalPosts={allProducts.length} setCurrent={setCurrent} current={current} potsPerPage={potsPerPage}/>
      </div>
    </div>
  )
}


export default ProductAdmin