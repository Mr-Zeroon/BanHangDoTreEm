import React from 'react'
import PieChart from './Chart/PieChart'
import ColumnChart from './Chart/ColumnChart' 

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
                <div className='charts_top--cardhollow'>
                    <i className='bx bx-plus plus'></i>
                </div>

                <div className='charts_top--card1'>
                      <div className='charts_top--cardtop'>
                          <p>01</p>
                          <i className='bx bx-dots-vertical-rounded'></i>
                      </div>
                      <div className='charts_top--cardbottom'>
                        <div>
                          <p>Marketing</p>
                        </div>
                        <div>
                          <label>124 MB</label>
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
                          <p>Branding</p>
                        </div>
                        <div>
                          <label>124 MB</label>
                        </div>
                      </div>
                </div>
                <div className='charts_top--card3'>
                      <div className='charts_top--cardicon'>
                        <i className='bx bxs-castle'></i>
                      </div>
                      <div className='charts_top--cardyour'>
                        <div>
                          <p>Your </p>
                          <span>Gallery</span>
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
                    <button className='Delete'>Delete</button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          
          </table>
        </div>
      </div>
  )
}

export default Home