import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import './SellingEdit.css'
import {toast} from 'react-toastify'
const SellingEdit = ({products}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/selling')
  }
  const [selling,setSelling] = useState({
    id: Math.floor(Math.random()*2000),
    name:"",
    type:"",
    quantity:"",
    price:"",
    dateOfSale:"",
  })
  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setSelling({
      ...selling,
      [name]: value,
    });
  }
  
    
 
  return (
    <div className='Add'>
        <div className='Add-button__back'>
          <button onClick={handleBack}>
            <i className='bx bx-arrow-back'></i>
            <span>Back</span>
          </button>
        </div>
        
        <div className='form-input'>
          <form className='Add-form'  action="">
            {/* <div className='Add-form__input'>
              <p>ID</p>
              <input type="text" id="admin_id" name="id" value={selling.id} onChange={handleChangeInputForm} />
            </div> */}
            <div className='Add-form__input' >
              <p>Product's name</p>
              <input type="text" id="admin_name" name="name" value={selling.name} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Product Type</p>
              <input type="text" id="admin_type" name="type" value={selling.type} onChange={handleChangeInputForm} placeholder='Please click the Product Type!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Quantity</p>
              <input type="number" id="admin_quantity" name="quantity" value={selling.quantity} onChange={handleChangeInputForm} placeholder='Please click the Quantity!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Price</p>
              <input type="number" id="admin_Price" name="price" value={selling.price} onChange={handleChangeInputForm} placeholder='Please click the Price!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Date of Sale</p>
              <input type="date" id="admin_dateOfSale" name="dateOfSale" value={selling.dateOfSale} onChange={handleChangeInputForm}/>
            </div>
            <button>Edit</button>
          </form>
        </div>
    </div>
  )
}

export default SellingEdit