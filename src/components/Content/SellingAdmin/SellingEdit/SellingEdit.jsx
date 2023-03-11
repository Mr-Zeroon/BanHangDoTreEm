import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import './SellingEdit.css'
import {toast} from 'react-toastify'
import { actFetchSellingById } from '../../../../redux/features/selling/sellingSilceAPI';
import { fetchUpdateSellingById } from '../../../../apis/sellingApi';
const SellingEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {editID} = useParams();

  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin/selling')
  }
  const sellingRequest = useSelector((state) => state.selling.selling)
  
  useEffect(() => {
    dispatch(actFetchSellingById(editID))
  },[])

  const initialFormValue={
    id: editID||"",
    idUser:sellingRequest.idUser||"",
    nameUser:sellingRequest.nameUser||"",
    idProduct:sellingRequest.idProduct||"",
    nameProduct:sellingRequest.nameProduct||"",
    type:sellingRequest.type||"",
    quantity:sellingRequest.quantity||"",
    price:sellingRequest.price||"",
    
  }
  const [selling,setSelling] = useState(initialFormValue)
  useEffect(()=>{
    setSelling(initialFormValue)
  }, [sellingRequest])

  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setSelling({
      ...selling,
      [name]: value,
    });
  }
  const handleUpdateForm = async (event) => {
    event.preventDefault();
    await fetchUpdateSellingById(editID,selling)
    setSelling(initialFormValue)
    navigate('/admin/selling')
    toast.success('Update Success!') 
    
      
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
          <form className='Add-form' onSubmit={handleUpdateForm} action="">
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
                  <option value="Spring">Spring</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
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
            <button>Edit</button>
          </form>
        </div>
    </div>
  )
}

export default SellingEdit