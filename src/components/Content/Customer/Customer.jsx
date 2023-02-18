import React from 'react'
import {useNavigate } from 'react-router-dom'
const Customer = () => {
  const navigate = useNavigate();
  const handleAdd = (event) =>{
    event.preventDefault();
    navigate('/customer/add')
  }
  return (
    <div className='customer'>
      <div className='customer-top'>
          <div className='customer-top__title'>
              <h1>Customer Management</h1>
          </div>
          <div className='customer-top__btn'>
              <button onClick={handleAdd}>ADD</button>
          </div>
      </div>



      <div className='customer-bottom'>
          <table class="table-fill">
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
              <tr>
                <td className="text-left">001</td>
                <td className="text-left">Maria Anders</td>
                <td className="text-left">tahongduc01@</td>
                <td className="text-left">Nghệ An</td>
                <td className="text-left">tahongduc01@gmail.com</td>
                <td className="text-left">0911799629</td>
                <td className="text-left">
                  <div className='customer-top__btntable'>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
              
            </tbody>
            
          </table>
      </div>
    </div>
  )
}

export default Customer