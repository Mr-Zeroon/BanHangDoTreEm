import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeAdmin } from '../../../redux/features/admin/sildeAdmin';
import Paginations from '../../Panigate/Panigate';
const Admin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAdd = (event) =>{
      event.preventDefault();
      navigate('/admin/add')
    }
    const products = useSelector(state=> state.admins.admins)
    const handleRemove = (id) =>{
      dispatch(removeAdmin(id))
      toast.success('Delete Complete!!')
    }
    const handleEdit = (id) =>{
      navigate(`/admin/${id}`)
    }
    return (
      <div className='customer'>
        <div className='customer-top'>
            <div className='customer-top__title'>
                <h1>Admin Management</h1>
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
            <table className="table-fill">
              <thead>
                <tr>
                  <th className='text-left'>ID</th>
                  <th className='text-left'>Name</th>
                  <th className='text-left'>Pass</th>
                  <th className='text-left'>Address</th>
                  <th className='text-left'>Email</th>
                  <th className='text-left'>Phone Number</th>
                  <th className='text-left'>Action</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {
                  products.map((products,index)=>{
                    return (
                      <tr key={products.id}>
                        <td className="text-left">{products.id}</td>
                        <td className="text-left">{products.name}</td>
                        <td className="text-left">{products.pass}</td>
                        <td className="text-left">{products.address}</td>
                        <td className="text-left">{products.email}</td>
                        <td className="text-left">{products.phoneNumber}</td>
                        <td className="text-left">
                          <div className='customer-top__btntable'>
                            <button onClick={() => handleEdit(products.id)}>Edit</button>
                            <button className='Delete' onClick={() => handleRemove(products.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                
                    )
                  })
                }
                
              </tbody>
              
            </table>
        </div>
        <div className='pagination'>
            <Paginations/>
      </div>
      </div>
    )
}

export default Admin