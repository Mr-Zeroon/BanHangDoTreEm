import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SellingAdd.css'
import { useDispatch } from 'react-redux';
import { addSelling } from '../../../../redux/features/selling/sellingSilde';
import { toast } from 'react-toastify';

const SellingAdd = () => {
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
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if( !selling.name || !selling.type || !selling.quantity || !selling.price || !selling.dateOfSale) {
      toast.error('Please Enter Full Information!!')
    }else {
      dispatch(addSelling(selling))
      navigate('/selling')
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
            <button>ADD</button>
          </form>
        </div>
    </div>
  )
}

export default SellingAdd