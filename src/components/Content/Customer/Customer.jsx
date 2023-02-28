import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Paginations from '../../Panigate/Panigate';
import { actDeleteUsers, actFetchAllUsers } from '../../../redux/features/user/usersSilceAPI';
const Customer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = (event) =>{
    event.preventDefault();
    navigate('/admin/customer/add')
  }
  const {allUsers,isLoading} = useSelector(state => state.users)
  useEffect(()=>{
    dispatch(actFetchAllUsers())
  },[])
  const renderDataUsers = (users)=>{
    return users.map((user)=>(
      <tr key={user.id}>
      <td className="text-left">{user.id}</td>
      <td className="text-left">{user.customerName}</td>
      <td className="text-left">{user.customerPass}</td>
      <td className="text-left">{user.customerAddress}</td>
      <td className="text-left">{user.customerSex}</td>
      <td className="text-left">{user.customerEmail}</td>
      <td className="text-left">{user.customerPhoneNumber}</td>
      <td className="text-left">{user.customerIsAdmin}</td>                <td className="text-left">
        <div className='customer-top__btntable'>
          <button onClick={() => handleEdit(user.id)}>Edit</button>
          <button className='Delete' onClick={() => handleDeleteUsers(user.id)}>Delete</button>
        </div>
      </td>
    </tr>)
    )
}
const handleDeleteUsers = (id)=>{
  dispatch(actDeleteUsers(id))
  toast.success('Delete successfully!')
}
  const handleEdit = (id) =>{
    navigate(`/admin/customer/${id}`)
  }
  return (
    <div className='customer'>
      <div className='customer-top'>
          <div className='customer-top__title'>
              <h1>Customer Management</h1>
          </div>
          <div className='customer-top__btn'>
              <div className='customer-top__search'>
                <input type="text" placeholder='Please enter into....'/>
                <a href=""><i className='bx bx-search'></i></a>
              </div>
              <button  onClick={handleAdd}>ADD</button>
          </div>
      </div>



      <div className='customer-bottom'>
      {isLoading 
          ? (<div>Loading .....</div>)
          :<table className="table-fill">
            <thead>
              <tr>
                <th className='text-left'>ID</th>
                <th className='text-left'>Name</th>
                <th className='text-left'>Pass</th>
                <th className='text-left'>Address</th>
                <th className='text-left'>Sex</th>
                <th className='text-left'>Email</th>
                <th className='text-left'>Phone Number</th>
                <th className='text-left'>isAdmin</th>
                <th className='text-left'>Action</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {
                renderDataUsers(allUsers)
              }
            </tbody>
          </table>
      }
      </div>
      <div className='pagination'>
            <Paginations/>
          </div>
    </div>
  )
}

export default Customer