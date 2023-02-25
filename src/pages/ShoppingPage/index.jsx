import React from 'react'
import './shopping.scss'
import rrr from '../../assets/Img/R.jpg'

const ShoppingPage = () => {
  return (
    <div className='w-full box-border block'>
        <div className='w-full'>
            <div className='box-border'>
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-96 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-black to-black-console.error(first) transition-all ease-in-out duration-100">
                    My Shopping
                </p>
                <div className='text-center mt-5 block box-border scroll-pt-7 w-full'>
                    <img className='shop' src={rrr}></img>
                    <p>You have not added any items in your shopping cart yet.</p>
                    <a className='text-teal-600' href='#'>Back to start page</a>
                </div>
                <div className='No'></div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingPage