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
    name:usersReloadData.name||"",
    password:"",
    address:usersReloadData.address||"",
    sex:usersReloadData.sex||"",
    email:usersReloadData.email||"",
    phoneNumber:usersReloadData.phoneNumber||"",
    isAdmin:usersReloadData.isAdmin||""
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
    if( !customerForm.name || !customerForm.password || !customerForm.email || !customerForm.address) {
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
              <input type="text" id="customer_id" name="iD" value={customerForm.iD} onChange={handleChangeInputForm}/>
            </div> */}
            <div className='Add-form__input'>
              <p>Name</p>
              <input type="text" id="customer_name" name="name" value={customerForm.name} onChange={handleChangeInputForm}  placeholder='Please click the userName!!!'/>
            </div>
            <div className='Add-form__input' >
              <p>Password</p>
              <input type="text"  id="customer_password" name="password" value={customerForm.password} onChange={handleChangeInputForm} placeholder='Please click the Password!!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Address</p>
              <input type="text" id="customer_address" name="address" value={customerForm.address} onChange={handleChangeInputForm} placeholder='Please click the Address! !!'/>
            </div>
            <div className='Add-form__input'>
              <p>Sex</p>
              <select  id="customer_sex" name="sex" value={customerForm.sex} onChange={handleChangeInputForm} placeholder='Please click the Address! !!'>
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other Genders">Other Genders</option>
              </select>
            </div>
            <div className='Add-form__input'>
              <p>Email</p>
              <input type="text"  id="customer_email" name="email" value={customerForm.email} onChange={handleChangeInputForm} placeholder='Please click Email !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>Phone Number</p>
              <input type="text" id="customer_phone_number" name="phoneNumber" value={customerForm.phoneNumber} onChange={handleChangeInputForm} placeholder='Please click Phone Number !!!'/>
            </div>
            <div className='Add-form__input'>
              <p>isAdmin</p>
              <select  id="customer_isAdmin" name="isAdmin" value={customerForm.isAdmin} onChange={handleChangeInputForm} >
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