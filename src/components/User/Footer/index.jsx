import React from 'react'
import './footer.scss'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='mt-3 bg-red-100 w-full'>
        <div className='footer_content'>       
          <div className='speakend'>
            <div className='layout1'>
                <h3 className='font-bold text-xl'>Babyshop - for premium children's clothes</h3>
                <p>05 Hoa An 12, Cam Le, Da Nang City</p>
                <p>Hotline: 0988 66 12 01</p>
                <p>Huydanger123@gmail.com</p>
                <div className="footer">
                  <div className="flex text-xl">
                    <BsFacebook className='ml-8 text-textColor text-2xl  cursor-pointer'></BsFacebook>
                    <BsTwitter className='ml-8 text-textColor text-2xl  cursor-pointer'></BsTwitter>
                    <BsInstagram className='ml-8 text-textColor text-2xl  cursor-pointer'></BsInstagram>
                  </div>           
                </div>
            </div>
            <div className="layout1">
                <h3 className='font-bold text-xl'>Information</h3>
                <p>About Babyshop</p>
                <p>Sustainability</p>
                <p>Career</p>
                <p>Delivery Terms</p>
                <p>Register Return Online</p>
                <p>Cookies</p>
            </div>
            <div className="layout1">
                <h3 className='font-bold text-xl'>Customer Service</h3>
                <p>Returns & Exchange</p>
                <p>FAQ</p>
                <p>Payment Methods</p>
                <p>Contact Us</p>
                <p>Customer service: +84 88661 201</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
