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
      </div>
  )
}

export default Home