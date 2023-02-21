import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    
  return (
    <nav className='nav'>
        <div className='logo-name'>
            <div className="logo-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43fbvLFe8evGPwwSmvx9iIsepT4B7dCPeSQ&usqp=CAU" alt="" />
            </div>
        </div>
        <div className="menu-items">
            <ul className="nav-links">
                <li><Link to="/">
                  <i className='bx bx-home'></i>
                  <span className='link-name'>Dashboard</span>
                </Link></li>
                <li><Link to="/customer">
                <i className='bx bx-user-circle'></i>
                  <span className='link-name'>Customer </span>
                </Link></li>
                <li><Link to="/product">
                <i className='bx bxl-product-hunt' ></i>
                  <span className='link-name'>Product</span>
                </Link></li>
                <li><Link to="/selling">
                <i className='bx bx-cart-add'></i>
                  <span className='link-name'>Selling</span>
                </Link></li>
                <li><Link to="/admin">
                <i className='bx bxs-user-rectangle'></i>
                  <span className='link-name'>Admin</span>
                </Link></li>
            </ul>

            <ul className='logout-mode'>
              <li><a href="#">
                <i className='bx bx-log-out'></i>
                <span className='link-name'>Logout</span>
              </a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu