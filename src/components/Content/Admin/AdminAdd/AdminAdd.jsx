import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addAdmin } from "../../../../redux/features/admin/sildeAdmin"
import './AdminAdd.css'
import { toast } from 'react-toastify';
const AdminAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin')
  }

  const [admin,setAdmin] = useState({
    id:Math.floor(Math.random()*2000),
    name:"",
    pass:"",
    address:"",
    email:"",
    phoneNumber:"",
  })

  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  }
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if(!admin.name || !admin.pass || !admin.address || !admin.email ) {
      toast.error('Please Enter Full Information!!')
    }else if(admin.phoneNumber.length!==10) {
      toast.error('Please enter all 10 numbers!!')
    }
    else {
      dispatch(addAdmin(admin))
      navigate('/admin')
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
        
        <div className='form-input' >
          <form className='Add-form' onSubmit={handleSubmitForm} action="">
            {/* <div className='Add-form__input'>
              <p>ID</p>
              <input type="text" id="admin_id" name="id" value={admin.id} onChange={handleChangeInputForm}/>
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
            <button>ADD</button>
          </form>
        </div>
    </div>
  )
}

export default AdminAdd