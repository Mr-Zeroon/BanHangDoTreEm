import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    
        <div className='top'>
          <Link to="/admin"><h1>ADMIN</h1></Link>
          <div className='top-right'>
            <a href=""><i className='bx bx-bell sidebar-toggle'></i></a>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
          </div>
        </div>
    
  )
}

export default Header