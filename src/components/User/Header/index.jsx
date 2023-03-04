import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo/logo.png"
import avatar from "../../../assets/Img/Huy.jpg"
import "./Header.scss"
import { MdShoppingBasket, MdFavorite } from "react-icons/md";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { actLogout } from '../../../redux/features/user/usersSilceAPI';
import { Button } from 'antd';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(actLogout())
    navigate('/login-layout')  }
  return (
    <div className='container'>
        <div className='nav_head'>
            <Link to={'/'}><img src={Logo} className='logo' alt="logo" /></Link>
            <nav className='nav_list'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/service'}>Service</Link></li>
                </ul>
            </nav>
            <div className='relative flex items-center justify-center'>
              <Link to={'/favorite'}><MdFavorite className="text-textColor text-2xl  cursor-pointer" /></Link>
              <div className='absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold mt-2'>2</p>
              </div>
            </div>
            <div className='relative flex items-center justify-center'>
              <Link to={'/shopping'}><MdShoppingBasket href='shopping' className="text-textColor text-2xl ml-5 cursor-pointer" /></Link>
              <div className='absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold mt-2'>2</p>
              </div>
            </div>
            <div>
              <motion.img 
              whileTap={{ scale: 0.6 }}
              src={avatar} 
              alt="userProfile" 
              className='w-10 min-w-[40px] h-10 rounded-full ml-5 cursor-pointer'>
              </motion.img>
              <div className='absolute top-full' id='subMenu'>
                <div className='bg-white'>
                  <div className='border-0 bg-slate-300'>
                    <Link to={'/profileUser'}>ProFile</Link>
                  </div>
                  <div>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Header;
