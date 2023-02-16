import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    
  return (
    <div className='menu'>
        <h1 className='menu-title'>ADMIN</h1>
        <div className='menu-content'>
            <ul>
                <li>
                    <i className='bx bxs-home'></i>
                    <Link to="/" value='Home'>Home</Link>
                </li>
                <li>
                    <i className='bx bxs-user-circle'></i>
                    <Link to="/quanlikhachhang" value='Quản Lý Khách Hàng'>Quản Lý Khách Hàng</Link>
                </li>
                <li>
                    <i className='bx bx-store-alt'></i>
                    <Link to="/quanlisanpham">Quản Lý Sản Phẩm</Link>
                </li>
                <li>
                    <i className='bx bx-cart-add'></i>
                    <a href="#">Quản Lý Bán Hàng</a>
                </li>
            </ul>
        </div>  
    </div>
  )
}

export default Menu