import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeProduct } from '../../../redux/features/productSildeAdmin/productSilde';
const ProductAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = (event) =>{
    event.preventDefault();
    navigate('/product/add')
  }
  const products = useSelector(state=> state.product.product)
  
  const handleEdit = (id) =>{
    navigate(`/product/${id}`)
  }

  const handleRemove = (id) =>{
    dispatch(removeProduct(id))
    toast.success('Delete Complete!!')
  }
  
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
          <table className="table-fill">
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
            <tbody className="table-hover">
            {
                  products.map((products,index)=>{
                    return (
                      <tr key={products.id}>
                        <td className="text-left">{products.id}</td>
                        <td className="text-left">{products.name}</td>
                        <td className="text-left">{products.type}</td>
                        <td className="text-left">{products.quantity}</td>
                        <td className="text-left">{products.dateAdded}</td>
                        <td className="text-left">{products.dateOfSale}</td>
                        <td className="text-left">
                          <div className='customer-top__btntable'>
                            <button onClick={() => handleEdit(products.id)}>Edit</button>
                            <button className='Delete' onClick={() => handleRemove(products.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
            
          </table>
      </div>
    </div>
  )
}

export default ProductAdmin