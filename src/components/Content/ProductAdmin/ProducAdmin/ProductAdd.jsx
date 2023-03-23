import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './ProductAdd.css'
import {toast} from 'react-toastify'
import { actCreateProduct } from '../../../../redux/features/productSildeAdmin/productSilceAPI';
const ProductAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin/product')
  }

  const initialFormValue={
    id:Math.floor(Math.random()*2000),
    name:"",
    type:"spring",
    price:"",
    description:"",
    image:"",
    rating:""
  }
  const [product,setProduct] = useState(initialFormValue)
  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(actCreateProduct(product))
    setProduct(initialFormValue)
    navigate('/admin/product')
    toast.success('Add to Success!')
    
      
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
            <div className='Add-form__input' >
              <p>Product's name</p>
              <input type="text" id="admin_name" name="name" value={product.name} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Product Type</p>
              <select id="admin_type" name="type" value={product.type} onChange={handleChangeInputForm} >
                  <option value=""></option>
                  <option value="spring">spring</option>
                  <option value="autumn">autumn</option>
                  <option value="summer">summer</option>
                  <option value="winter">winter</option>
              </select>
            </div>
            <div className='Add-form__input'>
              <p>Price</p>
              <input type="number" id="admin_price" name="price" value={product.price} onChange={handleChangeInputForm} placeholder='Please click the Price!!!'required/>
            </div>
            <div className='Add-form__input'>
              <p>Description</p>
              <input type="text" id="admin_description" name="description" value={product.description} onChange={handleChangeInputForm} placeholder='Please click the Description!!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Image</p>
              <input type="text" id="admin_image" name="image" value={product.image} onChange={handleChangeInputForm} placeholder='Please click the Image!!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Rating</p>
              <input type="text" id="admin_rating" name="rating" value={product.rating} onChange={handleChangeInputForm} placeholder='Please click the Rating!!!' required/>
            </div>
            <button>ADD</button>
          </form>
        </div>
    </div>
  )
}

export default ProductAdd