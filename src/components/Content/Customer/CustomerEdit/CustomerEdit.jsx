import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import './CustomerEdit.css'
import { toast } from 'react-toastify';
import { actFetchUsersById } from '../../../../redux/features/user/usersSilceAPI';
import { fetchUpdateUsersById } from '../../../../apis/usersApi';
const CustomerEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {editID} = useParams();

  const usersReloadData = useSelector((state) => state.users.users)

  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin/customer')
  }

  useEffect(() => {
    dispatch(actFetchUsersById(editID))
  },[])
  const initialFormValue={
    id: editID || "",
    customerName:usersReloadData.customerName||"",
    customerPass:usersReloadData.customerPass||"",
    customerAddress:usersReloadData.customerAddress||"",
    customerSex:usersReloadData.customerSex||"",
    customerEmail:usersReloadData.customerEmail||"",
    customerPhoneNumber:usersReloadData.customerPhoneNumber||"",
    customerIsAdmin:usersReloadData.customerIsAdmin||""
  }
  const [customerForm,setCustomerForm] = useState(initialFormValue)

  useEffect(()=>{
    setCustomerForm(initialFormValue)
  }, [usersReloadData])

  const handleChangeInputForm = (event) => {
    const { name, value } = event.target;
    setCustomerForm({
      ...customerForm,
      [name]: value,
    });
  };
  const handleUpdateForm = async (event) => {
    event.preventDefault();
    if( !customerForm.customerName || !customerForm.customerPass || !customerForm.customerEmail || !customerForm.customerAddress) {
      toast.error('Please Enter Full Information!!')
    }
    else{
      await fetchUpdateUsersById(editID,customerForm)
      setCustomerForm(initialFormValue)
      navigate('/admin/customer')
      toast.success('Update Success!') 
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
          <form className='Add-form' onSubmit={handleUpdateForm}  action="">
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
              <p>Sex</p>
              <select  id="customer_sex" name="customerSex" value={customerForm.customerSex} onChange={handleChangeInputForm} placeholder='Please click the Address! !!'>
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other Genders">Other Genders</option>
              </select>
            </div>
            <div className='Add-form__input'>
              <p>Email</p>
              <input type="text"  id="customer_email" name="customerEmail" value={customerForm.customerEmail} onChange={handleChangeInputForm} placeholder='Please click Email !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Phone Number</p>
              <input type="text" id="customer_phone_number" name="customerPhoneNumber" value={customerForm.customerPhoneNumber} onChange={handleChangeInputForm} placeholder='Please click Phone Number !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>isAdmin</p>
              <select  id="customer_isAdmin" name="customerIsAdmin" value={customerForm.customerIsAdmin} onChange={handleChangeInputForm} >
                <option value="False">False</option>
                <option value="True">True</option>
              </select>
            </div>
            <button>Edit</button>
          </form>
        </div>
    </div>
  )
}

export default CustomerEdit