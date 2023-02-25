import React from 'react'
import './product.scss'
import Clothes  from '../../assets/Img/sale_do.png'
import Star  from '../../assets/Img/star.png'

const ProductDetail = () => {
  return (
    <div class="container_product">
        <div>
            <div>
                <img className='img_product' src={Clothes} alt="" class="image"/>
                <div>
                    <button><img className='img_product' onclick="changeImg(this)" src={Clothes} alt=""/></button>
                    <button><img className='img_product' onclick="changeImg(this)" src={Clothes} alt=""/></button>
                    <button><img className='img_product' onclick="changeImg(this)" src={Clothes} alt=""/></button>
                    <button><img className='img_product' onclick="changeImg(this)" src={Clothes} alt=""/></button>
                    <button><img className='img_product' onclick="changeImg(this)" src={Clothes} alt=""/></button>
                </div>
            </div>
            <div>
                <h2>Clothes Baby</h2>
                <h4>Age: 4 - 10</h4>
                <span>
                    <img className='img_product' src={Star} alt=""/>
                    <img className='img_product' src={Star} alt=""/>
                    <img className='img_product' src={Star} alt=""/>
                    <img className='img_product' src={Star} alt=""/>
                    <img className='img_product' src={Star} alt=""/>
                </span>
                <span>
                    <small>PRICE:</small>
                    <b>2,999.00$</b>
                </span>
                <p> Alo Alo 12345</p>
                <button>
                    <img className='img_product' src="./Image/tote.png" alt=""/>
                    ADD TO FAVORITE
                </button>
                <button class="buy-now-btn"> BUY NOW</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail