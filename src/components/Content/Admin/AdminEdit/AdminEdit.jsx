import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import './AdminEdit.css'
import {toast} from 'react-toastify'
const AdminEdit = ({products}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {editID} = useParams();

  


  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin')
  }
  const [admin,setAdmin] = useState({
    id:editID,
    name:"",
    type:"",
    quantity:"",
    dateAdded:"",
    dateOfSale:"",
  })

  useEffect(()=>{
    setAdmin(
      {
        id:editID,
        name:`${admin.name}`,
        type:"son",
        quantity:"12",
        dateAdded:"",
        dateOfSale:"",
      }
    )
  }, [])

  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setAdmin({
      ...admin,
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
              <p>Name</p>
              <input type="text" id="admin_name" name="name" value={admin.name} onChange={handleChangeInputForm} placeholder='Please click the adminName!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Pass</p>
              <input type="text" id="admin_pass" name="pass" value={admin.pass} onChange={handleChangeInputForm} placeholder='Please click Pass !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Address</p>
              <input type="text" id="admin_address" name="address" value={admin.address} onChange={handleChangeInputForm} placeholder='Please click Address !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Email</p>
              <input type="text" id="admin_email" name="email" value={admin.email} onChange={handleChangeInputForm} placeholder='Please click Email!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Phone Number</p>
              <input type="text" id="admin_phoneNumber" name="phoneNumber" value={admin.phoneNumber} onChange={handleChangeInputForm} placeholder='Please click Phone Number !!!'/>
            </div>
            <button>Edit</button>
          </form>
        </div>
    </div>
  )
}

export default AdminEdit