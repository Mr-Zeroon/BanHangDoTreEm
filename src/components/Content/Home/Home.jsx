import React, { useEffect, useMemo } from 'react'
import PieChart from './Chart/PieChart'
import ColumnChart from './Chart/ColumnChart' 
import Paginations from '../../Panigate/Panigate';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllUsers } from '../../../redux/features/user/usersSilceAPI';
import { actFetchAllProduct } from '../../../redux/features/productSildeAdmin/productSilceAPI';
const Home = () => {
  const dispatch = useDispatch();
  const {allUsers} = useSelector(state => state.users)
  
  useEffect(()=>{
    dispatch(actFetchAllUsers())
  },[])
  

  const {allProducts} = useSelector(state=> state.product)
  useEffect(()=>{
    dispatch(actFetchAllProduct())
  },[])
  const product = allProducts.length

  const handleCountUser = useMemo(() => {
    return allUsers.reduce((a,b) => {
      if(b.isAdmin === "True") {
        return {
          ...a,
          admin: (a.admin || 0) + 1
        }
       
      }
      if(b.isAdmin === "False") {
        return {
          ...a,
          user: (a.user || 0) + 1
        }
      }
      return {...a}
    }, {})
  },[allUsers])
  
  
  return (
    <div className='charts'>
        <div className='charts_top'>
            <div className='charts_top--title'>
              <div>
                <h1>Manager Your Folders</h1>
              </div>
              <div>
                <p>Create folder to soft files and have quick access to documents</p>
              </div>
            </div>

            <div className='charts_top--card'>
                <div className='charts_top--card1'>
                      <div className='charts_top--cardtop'>
                          <p>01</p>
                          <i className='bx bx-dots-vertical-rounded'></i>
                      </div>
                      <div className='charts_top--cardbottom'>
                        <div>
                          <p>User</p>
                        </div>
                        <div>
                          <label>{handleCountUser.user}</label>
                        </div>
                      </div>
                </div>
                <div className='charts_top--card2'>
                      <div className='charts_top--cardtop'>
                          <p>02</p>
                          <i className='bx bx-dots-vertical-rounded'></i>
                      </div>
                      <div className='charts_top--cardbottom'>
                        <div>
                          <p>Admin</p>
                        </div>
                        <div>
                          <label>{handleCountUser.admin}</label>
                        </div>
                      </div>
                </div>
                <div className='charts_top--card3'>
                      <div className='charts_top--cardtop'>
                          <p>03</p>
                          <i className='bx bx-dots-vertical-rounded'></i>
                      </div>
                      <div className='charts_top--cardbottom'>
                        <div>
                          <p>Product</p>
                        </div>
                        <div>
                          <label>{product}</label>
                        </div>
                      </div>
                </div>
                <div className='charts_top--card4'>
                      <div className='charts_top--cardtop'>
                          <p>04</p>
                          <i className='bx bx-dots-vertical-rounded'></i>
                      </div>
                      <div className='charts_top--cardbottom'>
                        <div>
                          <p>Revenue</p>
                        </div>
                        <div>
                          <label>2500000$</label>
                        </div>
                      </div>
                </div>


            </div>
        </div>
        <div className='charts_bottom'>
            <div className='charts_bottom--left'>
                <div className='charts_bottom--statistical'>
                    <PieChart/>
                </div>
            </div>
            <div className='charts_bottom--right'>
                <div className='charts_bottom--statisticals'>
                    <ColumnChart/>
                </div>
            </div>
        </div>
        <div className='charts_table'>
          <table className="table-fill">
            <thead>
              <tr>
                
                <th className='text-left'>ID User</th>
                <th className='text-left'>Name User</th>
                <th className='text-left'>ID Products</th>
                <th className='text-left'>Product's Name</th>
                <th className='text-left'>Product Type</th>
                <th className='text-left'>Quantity</th>
                <th className='text-left'>Price</th>
                <th className='text-left'>Status</th>
                <th className='text-left'>Action</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              <tr>
                <td className="text-left">822</td>
                <td className="text-left">Tạ Hồng Đức</td>
                <td className="text-left">001</td>
                <td className="text-left">Áo cao cấp</td>
                <td className="text-left">Shirt</td>
                <td className="text-left">31</td>
                <td className="text-left">300$</td>
                <td className="text-left "><div className='status'>Đang chờ xác nhận</div></td>
                <td className="text-left">
                  <div className='customer-top__btntable'>
                    <button>Confirm</button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          
          </table>
        </div>
        <div className='pagination'>
            <Paginations/>
          </div>
      </div>
  )
}

export default Home