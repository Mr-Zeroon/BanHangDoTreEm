import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { actDeleteProduct, actFetchAllProduct } from '../../../redux/features/productSildeAdmin/productSilceAPI';
import Paginations from '../../Panigate/Panigate';

const ProductAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search,setSearch] = useState("")
  const handleAdd = (event) =>{
    event.preventDefault();
    navigate('/admin/product/add')
  }
  const {allProducts,isLoading} = useSelector(state=> state.product)

  useEffect(()=>{
    dispatch(actFetchAllProduct())
  },[])
  

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
  
  const handleFilterProduct = () => {
    return allProducts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase()); 
    }).slice(firstPostIndex, lastPostIndex);
  }
  return (
    <div className='customer'>
      <div className='customer-top'>
          <div className='customer-top__title'>
              <h1>Product Management</h1>
          </div>
          <div className='customer-top__btn'>
              <div className='customer-top__search'>
                <input type="text" placeholder='Please enter into....' onChange={(e)=>setSearch(e.target.value)}/>
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
                <th className='text-left'>Price</th>
                <th className='text-left'>Description</th>
                <th className='text-left'>Rating</th>
                <th className='text-left'>Action</th>
              </tr>
            </thead>
            <tbody className="table-hover">{
            handleFilterProduct().map((product)=>{
              return(
              <tr key={product.id}>
                <td className="text-left">{product?.id}</td>
                <td className="text-left">{product?.name}</td>
                <td className="text-left">{product?.type}</td>
                <td className="text-left">{product?.price}$</td>
                <td className="text-left">{product?.description}</td>
                <td className="text-left">{product?.rating}</td>
                <td className="text-left">
                  <div className='customer-top__btntable'>
                    <button onClick={()=>handleEdit(product.id)}>Edit</button>
                    <button onClick={()=>handleDeleteProduct(product?.id)} className='Delete'>Delete</button>
                  </div>
                </td>
              </tr>)}
            )}
            </tbody>     
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