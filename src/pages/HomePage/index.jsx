import React from 'react'
import "./home.scss"
import { MdShoppingBasket } from 'react-icons/md'

const HomePage = ({flag}) => {
  return (
    <div className='mt-2'>
        <div className='line'>
            <div className='content'>
                <div className='column'>
                    <h2 className='baby'>Baby</h2>
                    <p className='ad'>EASY TRANSITION 20 - 40% OFF</p>
                    <button className='shop_now'>SHOP NOW</button>
                </div>
                <div className='column'>
                    <div className='card milk'></div>
                    <div className='card food'></div>
                    <div className='card fashion'></div>
                    <div className='card ld'></div>
                </div>
            </div>
        </div>
        <section className="w-full my-6">
            <div className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    EASY TRANSITION & OTHER THINGS 20% - 40%
                </p>
            </div>
        </section>
        <div className={`w-full flex my-12 ${
        flag
          ? "overflow-x-scroll"
          : "overflow-x-hidden"
        }`}>
            <div className="w-300 md:w-225 h-auto my-12 backdrop-blur-lg ">
                <div className="w-full flex items-center justify-between">
                    <img src='https://www.babyshop.com/images/1126926/card_large.jpg'
                    alt=''
                    className='w-40 -mt-8'
                    />
                    <div className='w-8 h-8 rounded-full bg-red-600 items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>        
                    </div>
                </div>              
            </div>
            <div className="w-300 md:w-225 h-auto my-12 backdrop-blur-lg ">
                <div className="w-full flex items-center justify-between">
                    <img src='https://www.babyshop.com/images/1126926/card_large.jpg'
                    alt=''
                    className='w-40 -mt-8'
                    />
                    <div className='w-8 h-8 rounded-full bg-red-600 items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>        
                    </div>
                </div>              
            </div>
            <div className="w-300 md:w-225 h-auto my-12 backdrop-blur-lg ">
                <div className="w-full flex items-center justify-between">
                    <img src='https://www.babyshop.com/images/1126926/card_large.jpg'
                    alt=''
                    className='w-40 -mt-8'
                    />
                    <div className='w-8 h-8 rounded-full bg-red-600 items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>        
                    </div>
                </div>              
            </div>
            <div className="w-300 md:w-225 h-auto my-12 backdrop-blur-lg ">
                <div className="w-full flex items-center justify-between">
                    <img src='https://www.babyshop.com/images/1126926/card_large.jpg'
                    alt=''
                    className='w-40 -mt-8'
                    />
                    <div className='w-8 h-8 rounded-full bg-red-600 items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>        
                    </div>
                </div>              
            </div>
        </div>
    </div>
  )
}

// export default HomePage