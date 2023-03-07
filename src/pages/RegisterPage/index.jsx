import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { actCreateUsers } from '../../redux/features/user/usersSilceAPI';
import './register.scss'

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack=()=>{
    navigate('/login-layout')
  }
  const initialFormValue={
    id: Math.floor(Math.random()*2000),
    name:"",
    password:"",
    address:"",
    sex:"Male",
    email:"",
    phoneNumber:"",
    isAdmin: "False"
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
    if(!customerForm.name || !customerForm.password || !customerForm.email || !customerForm.address ) {
      toast.error('Please Enter Full Information!!')
    }
    else if(customerForm.phoneNumber.length!==10) {
      toast.error('Please enter all 10 numbers!!')
    }
    else{
      dispatch(actCreateUsers(customerForm))
      setCustomerForm(initialFormValue)
      navigate('/login-layout')
      toast.success('Sign Up Success!')
    }
  }
  return (
    <div className='body_regis'>
      <div className="container_regis">
        <div className="title">Registration</div>
        <div className="content_regis">
          <form action="#" onSubmit={handleSubmitForm}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" id="name" name="name" value={customerForm.name} onChange={handleChangeInputForm} placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" id="address" name="address" value={customerForm.address} onChange={handleChangeInputForm} placeholder="Enter your address" required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" id="email" name="email" value={customerForm.email} onChange={handleChangeInputForm} placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" id="phone_number" name="phoneNumber" value={customerForm.phoneNumber} onChange={handleChangeInputForm} placeholder="Enter your number" required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" id="password" name="password" value={customerForm.password} onChange={handleChangeInputForm} placeholder="Enter your password" required/>
              </div>
              <div className="input-box">
                <span className="details">Gender</span>
                <select type="text" id="sex" name="sex" value={customerForm.sex} onChange={handleChangeInputForm} placeholder="Confirm your password" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other Gender">Other Gender</option>
                </select>
              </div>
            </div>
            
            <div className="button">
              <input type="submit" value="Register"/> 
            </div>
          </form>
            <div className="button">
              <button onClick={handleBack}>Back</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage