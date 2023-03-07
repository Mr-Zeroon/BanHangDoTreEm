import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { actLogout } from '../../redux/features/user/usersSilceAPI'

const Menu = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(actLogout())
    navigate('/login-layout')  }
  return (
    <nav className='nav'>
        <div className='logo-name'>
            <div className="logo-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43fbvLFe8evGPwwSmvx9iIsepT4B7dCPeSQ&usqp=CAU" alt="" />
            </div>
        </div>
        <div className="menu-items">
            <ul className="nav-links">
                <li><Link to="/admin">
                  <i className='bx bx-home'></i>
                  <span className='link-name'>Dashboard</span>
                </Link></li>
                <li><Link to="/admin/customer">
                <i className='bx bx-user-circle'></i>
                  <span className='link-name'>User</span>
                </Link></li>
                <li><Link to="/admin/product">
                <i className='bx bxl-product-hunt' ></i>
                  <span className='link-name'>Product</span>
                </Link></li>
                <li><Link to="/admin/selling">
                <i className='bx bx-cart-add'></i>
                  <span className='link-name'>Selling</span>
                </Link></li>
                
            </ul>

            <ul className='logout-mode'>
              <li><Link to="/">
                  <i className='bx bxs-user-detail'></i>
                  <span className='link-name'>Switch to user</span>
                </Link></li>
              <li><button onClick={handleLogout}>
                <i className='bx bx-log-out'></i>
                <span className='link-name'>Logout</span>
              </button></li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu