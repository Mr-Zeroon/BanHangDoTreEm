import React, { useEffect, useState } from 'react'
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
    if(!users.length) return null

    return users?.map((user)=>(
      <tr key={user.id}>
      <td className="text-left">{user.id}</td>
      <td className="text-left">{user.name}</td>
      <td className="text-left">{user.address}</td>
      <td className="text-left">{user.sex}</td>
      <td className="text-left">{user.email}</td>
      <td className="text-left">{user.phoneNumber}</td>
      <td className="text-left">{user.isAdmin}</td>               
      <td className="text-left">
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
  const [current, setCurrent] = useState(1);
  const [potsPerPage, setPotsPerPage] = useState(4);
  
  const lastPostIndex = current * potsPerPage;
  const firstPostIndex = lastPostIndex - potsPerPage;
  const currentPosts = allUsers.slice(firstPostIndex,lastPostIndex)
  return (
    <div className='customer'>
      <div className='customer-top'>
          <div className='customer-top__title'>
              <h1>User Management</h1>
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
                renderDataUsers(currentPosts)
              }
            </tbody>
          </table>
      }
      </div>
      <div className='pagination-page'>
            <Paginations totalPosts={allUsers.length} setCurrent={setCurrent} current={current} potsPerPage={potsPerPage}/>
          </div>
    </div>
  )
}

export default Customer