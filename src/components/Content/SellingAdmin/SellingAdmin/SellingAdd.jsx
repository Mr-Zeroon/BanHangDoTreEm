import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SellingAdd.css'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { actCreateSelling } from '../../../../redux/features/selling/sellingSilceAPI';

const SellingAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin/selling')
  }
  const initialFormValue={
    id: Math.floor(Math.random()*2000),
    idUser:"",
    nameUser:"",
    idProduct:"",
    nameProduct:"",
    type:"spring",
    quantity:"",
    price:"",
  }
  const [selling,setSelling] = useState(initialFormValue)
  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setSelling({
      ...selling,
      [name]: value,
    });
  }
  const handleSubmitForm = (event) => {
    event.preventDefault();
    
      dispatch(actCreateSelling(selling))
      setSelling(initialFormValue)
      navigate('/admin/selling')
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
              <p>ID User</p>
              <input type="text" id="admin_name" name="idUser" value={selling.idUser} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!' required/>
            </div>
            <div className='Add-form__input' >
              <p>Name User</p>
              <input type="text" id="admin_nameUser" name="nameUser" value={selling.nameUser} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!' required/>
            </div>
            <div className='Add-form__input' >
              <p>ID Products</p>
              <input type="text" id="admin_name" name="idProduct" value={selling.idProduct} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!' required/>
            </div>
            <div className='Add-form__input' >
              <p>Product's Name</p>
              <input type="text" id="admin_name" name="nameProduct" value={selling.nameProduct} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Product Type</p>
              <select  id="admin_type" name="type" value={selling.type} onChange={handleChangeInputForm} required>
                  <option value=""></option>
                  <option value="spring">spring</option>
                  <option value="autumn">autumn</option>
                  <option value="summer">summer</option>
                  <option value="winter">winter</option>
              </select>
            </div>
            <div className='Add-form__input'>
              <p>Quantity</p>
              <input type="number" id="admin_quantity" name="quantity" value={selling.quantity} onChange={handleChangeInputForm} placeholder='Please click the Quantity!!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Price</p>
              <input type="number" id="admin_Price" name="price" value={selling.price} onChange={handleChangeInputForm} placeholder='Please click the Price!!!' required/>
            </div>
            <button>ADD</button>
          </form>
        </div>
    </div>
  )
}

export default SellingAdd