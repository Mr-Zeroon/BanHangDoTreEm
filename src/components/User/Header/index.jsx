import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo/logo.png"
import avatar from "../../../assets/Img/Huy.jpg"
import "./Header.scss"
import { MdShoppingBasket, MdFavorite } from "react-icons/md";
import { motion } from 'framer-motion';

const Header = () => {

  return (
    <div className='container'>
        <div className='nav_head'>
            <img src={Logo} className="logo" alt="logo" />
            <nav className='nav_list'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/service'}>Service</Link></li>
                </ul>
            </nav>
            <div className="relative flex items-center justify-center">
              <Link to={'/favorite'}><MdFavorite className="text-textColor text-2xl  cursor-pointer" /></Link>
            </div>
            <div className="relative flex items-center justify-center">
              <Link to={'/shopping'}><MdShoppingBasket href='shopping' className="text-textColor text-2xl ml-5 cursor-pointer" /></Link>
            </div>
            <div>
              <motion.img whileTap={{ scale: 0.6 }}
              src={avatar} 
              alt="userProfile" 
              className="w-10 min-w-[40px] h-10 rounded-full ml-5 cursor-pointer"></motion.img>
              <div className='absolute top-full' id='subMenu'>
                <div className='bg-white'>
                  <div className='border-0 bg-slate-300'>
                    <Link to={'/profileUser'}>ProFile</Link>
                  </div>
                  <div>
                    <Link to={'/logout'}>Log Out</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Header;
