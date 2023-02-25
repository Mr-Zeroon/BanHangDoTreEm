import React from 'react'
import PieChart from './Chart/PieChart'
import ColumnChart from './Chart/ColumnChart' 
import Paginations from '../../Panigate/Panigate';
const Home = () => {
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
                          <label>99</label>
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
                          <label>5</label>
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
                          <label>100</label>
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
                <th className='text-left'>Product's Name</th>
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