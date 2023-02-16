import React, { useState } from 'react'


const Header = () => {
  
  return (
    <div className='header'>
        <div className='header-home'>
            <h1>Hello</h1>
            <div className='header-home-search'>
                <input type="text" placeholder='Nhấp thông tin'/>
                <a href="#"><i className='bx bx-search-alt'></i></a>
            </div>
            <button className='btnLogout'>Logout</button>
        </div>
    </div>
  )
}

export default Header