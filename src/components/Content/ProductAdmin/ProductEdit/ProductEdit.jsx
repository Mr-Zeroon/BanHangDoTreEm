import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addProduct } from '../../../../redux/features/productSildeAdmin/productSilde';
import './ProductEdit.css'
import {toast} from 'react-toastify'
const ProductEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {editID} = useParams();

  


  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/product')
  }
  const [product,setProduct] = useState({
    id:editID,
    name:"",
    type:"",
    quantity:"",
    dateAdded:"",
    dateOfSale:"",
  })

  useEffect(()=>{
    setProduct(
      {
        id:editID,
        name:"son",
        type:"son",
        quantity:"12",
        dateAdded:"",
        dateOfSale:"",
      }
    )
  }, [])

  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setProduct({
      ...product,
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
              <input type="text" id="admin_id" name="id" value={product.id} onChange={handleChangeInputForm} />
            </div> */}
            <div className='Add-form__input' >
              <p>Product's name</p>
              <input type="text" id="admin_name" name="name" value={product.name} onChange={handleChangeInputForm}/>
            </div>
            <div className='Add-form__input'>
              <p>Product Type</p>
              <input type="text" id="admin_type" name="type" value={product.type} onChange={handleChangeInputForm}/>
            </div>
            <div className='Add-form__input'>
              <p>Quantity</p>
              <input type="number" id="admin_quantity" name="quantity" value={product.quantity} onChange={handleChangeInputForm}/>
            </div>
            <div className='Add-form__input'>
              <p>Date Added</p>
              <input type="date" id="admin_dateAdded" name="dateAdded" value={product.dateAdded} onChange={handleChangeInputForm}/>
            </div>
            <div className='Add-form__input'>
              <p>Date of Sale</p>
              <input type="date" id="admin_dateOfSale" name="dateOfSale" value={product.dateOfSale} onChange={handleChangeInputForm}/>
            </div>
            <button>Edit</button>
          </form>
        </div>
    </div>
  )
}

export default ProductEdit