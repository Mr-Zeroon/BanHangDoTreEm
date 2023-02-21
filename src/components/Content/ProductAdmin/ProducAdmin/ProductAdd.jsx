import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../../../../redux/features/productSildeAdmin/productSilde';
import './ProductAdd.css'
import {toast} from 'react-toastify'
const ProductAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/product')
  }
  const [product,setProduct] = useState({
    id:Math.floor(Math.random()*2000),
    name:"",
    type:"",
    quantity:"",
    dateAdded:"",
    dateOfSale:"",
  })
  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if( !product.name || !product.type || !product.quantity || !product.dateAdded || !product.dateOfSale) {
      toast.error('Please Enter Full Information!!')
    }
    else{
      dispatch(addProduct(product))
      navigate('/product')
      toast.success('Add to Success!')
    }
   
  };
  return (
    <div className='Add'>
        <div className='Add-button__back'>
          <button onClick={handleBack}>
            <i className='bx bx-arrow-back'></i>
            <span>Back</span>
          </button>
        </div>
        
        <div className='form-input'>
          <form className='Add-form' onSubmit={handleSubmitForm} action="">
            {/* <div className='Add-form__input'>
              <p>ID</p>
              <input type="text" id="admin_id" name="id" value={product.id} onChange={handleChangeInputForm} />
            </div> */}
            <div className='Add-form__input' >
              <p>Product's name</p>
              <input type="text" id="admin_name" name="name" value={product.name} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Product Type</p>
              <input type="text" id="admin_type" name="type" value={product.type} onChange={handleChangeInputForm} placeholder='Please click the Product Type!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Quantity</p>
              <input type="number" id="admin_quantity" name="quantity" value={product.quantity} onChange={handleChangeInputForm} placeholder='Please click the Quantity!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Date Added</p>
              <input type="date" id="admin_dateAdded" name="dateAdded" value={product.dateAdded} onChange={handleChangeInputForm} />
            </div>
            <div className='Add-form__input'>
              <p>Date of Sale</p>
              <input type="date" id="admin_dateOfSale" name="dateOfSale" value={product.dateOfSale} onChange={handleChangeInputForm} />
            </div>
            <button>ADD</button>
          </form>
        </div>
    </div>
  )
}

export default ProductAdd