import React from 'react'
import './menu.scss'
import { MdShoppingBasket, MdFavorite } from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

const MenuPage = () => {
  return (
    <section className="w-full my-6">
      <div id="featured-product">
        <div className="product-container">
          <div className="product spring">
            <div className="product-des">
              <span>1</span>
              <h5>spring dress</h5>                     
            </div>
          </div>
          <div className="product summer">
            <div className="product-des">
              <span>2</span>
              <h5>summer outfit</h5>                     
            </div>
          </div>
          <div className="product autumn">
            <div className="product-des">
              <span>3</span>
              <h5>autumn dress</h5>                     
            </div>
          </div>
          <div className="product winter">
            <div className="product-des">
              <span>4</span>
              <h5>Winter outfit</h5>                     
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Suggested outfits according to the season
        </p>
      </div>
      <div id="featured-product">
            <div className="product-container">
              <div className="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                  <div className="product-desc">
                  <span>1111</span>
                  <h5>asdfghjljhgi</h5>
                  <div className="rate">
                    <AiFillStar className='text-amber-400'/>
                    <AiFillStar className='text-amber-400'/>
                    <AiFillStar className='text-amber-400'/>
                    <AiFillStar className='text-amber-400'/>
                    <AiFillStar className='text-amber-400'/>
                  </div>
                  <h4>$11</h4>
                  <div className='flex justify-end'>
                      <MdFavorite className='text-2xl mr-2'/>
                      <MdShoppingBasket className='text-2xl mr-2'/>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default MenuPage