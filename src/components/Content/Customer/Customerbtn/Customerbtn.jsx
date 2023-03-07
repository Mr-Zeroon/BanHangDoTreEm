import React, { useState }  from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './Customerbtn.css'
import { toast } from 'react-toastify';
import { actCreateUsers } from '../../../../redux/features/user/usersSilceAPI';
const Customerbtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin/customer')
  }
  const initialFormValue={
    id: Math.floor(Math.random()*2000),
    name:"",
    password:"",
    address:"",
    sex:"Male",
    email:"",
    phoneNumber:"",
    isAdmin:"False"
  }
  const [customerForm,setCustomerForm] = useState(initialFormValue)

  const handleChangeInputForm = (event) => {
    const { name, value } = event.target;
    setCustomerForm({
      ...customerForm,
      [name]: value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
     if(customerForm.phoneNumber.length!==10) {
      toast.error('Please enter all 10 numbers!!')
    }
    else{
      dispatch(actCreateUsers(customerForm))
      setCustomerForm(initialFormValue)
      navigate('/admin/customer')
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
           
            <div className='Add-form__input'>
              <p>Name</p>
              <input type="text" id="name" name="name" value={customerForm.name} onChange={handleChangeInputForm}  placeholder='Please click the userName!!!' required/>
            </div>
            <div className='Add-form__input' >
              <p>Password</p>
              <input type="text"  id="password" name="password" value={customerForm.password} onChange={handleChangeInputForm} placeholder='Please click the Password!!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Address</p>
              <input type="text" id="address" name="address" value={customerForm.address} onChange={handleChangeInputForm} placeholder='Please click the Address! !!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Sex</p>
              <select  id="sex" name="sex" value={customerForm.sex} onChange={handleChangeInputForm} placeholder='Please click the Address! !!' >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other Genders">Other Genders</option>
              </select>
            </div>
            <div className='Add-form__input'>
              <p>Email</p>
              <input type="text"  id="email" name="email" value={customerForm.email} onChange={handleChangeInputForm} placeholder='Please click Email !!!' required />
            </div>
            <div className='Add-form__input'>
              <p>Phone Number</p>
              <input type="text" id="phone_number" name="phoneNumber" value={customerForm.phoneNumber} onChange={handleChangeInputForm} placeholder='Please click Phone Number !!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>isAdmin</p>
              <select  id="isAdmin" name="isAdmin" value={customerForm.isAdmin} onChange={handleChangeInputForm} >
                <option value="False">False</option>
                <option value="True">True</option>
              </select>
            </div>
            <button>ADD</button>
          </form>
        </div>
    </div>
  )
}

export default Customerbtn