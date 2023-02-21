import React, { useState }  from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../../../redux/features/user/silceUser';
import './Customerbtn.css'
import { toast } from 'react-toastify';
const Customerbtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/customer')
  }

  const [customerForm,setCustomerForm] = useState({
    id: Math.floor(Math.random()*2000),
    customerName:"",
    customerPass:"",
    customerAddress:"",
    customerEmail:"",
    customerPhoneNumber:"",
  })

  const handleChangeInputForm = (event) => {
    const { name, value } = event.target;
    setCustomerForm({
      ...customerForm,
      [name]: value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if(!customerForm.customerName || !customerForm.customerPass || !customerForm.customerEmail || !customerForm.customerAddress ) {
      toast.error('Please Enter Full Information!!')
    }
    else if(customerForm.customerPhoneNumber.length!==10) {
      toast.error('Please enter all 10 numbers!!')
    }
    else{
      dispatch(addUser(customerForm))
      navigate('/customer')
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
              <input type="text" id="customer_id" name="customerID" value={customerForm.customerID} onChange={handleChangeInputForm}/>
            </div> */}
            <div className='Add-form__input'>
              <p>Name</p>
              <input type="text" id="customer_name" name="customerName" value={customerForm.customerName} onChange={handleChangeInputForm}  placeholder='Please click the userName!!!'/>
            </div>
            <div className='Add-form__input' >
              <p>Pass</p>
              <input type="text"  id="customer_pass" name="customerPass" value={customerForm.customerPass} onChange={handleChangeInputForm} placeholder='Please click the Pass!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Address</p>
              <input type="text" id="customer_address" name="customerAddress" value={customerForm.customerAddress} onChange={handleChangeInputForm} placeholder='Please click the Address! !!'/>
            </div>
            <div className='Add-form__input'>
              <p>Email</p>
              <input type="text"  id="customer_email" name="customerEmail" value={customerForm.customerEmail} onChange={handleChangeInputForm} placeholder='Please click Email !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Phone Number</p>
              <input type="text" id="customer_phone_number" name="customerPhoneNumber" value={customerForm.customerPhoneNumber} onChange={handleChangeInputForm} placeholder='Please click Phone Number !!!'/>
            </div>
            <button>ADD</button>
          </form>
        </div>
    </div>
  )
}

export default Customerbtn