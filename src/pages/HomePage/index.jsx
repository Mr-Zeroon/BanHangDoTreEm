import React from 'react'
import "./home.scss"
import { MdShoppingBasket, MdFavorite } from 'react-icons/md'
import Star  from '../../assets/Img/star.png'
import { Carousel } from 'antd';
import {AiFillStar} from 'react-icons/ai'
import slide_1 from '../../assets/Img/line_1.jpg'

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const HomePage = ({flag}) => {
      const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
        
  return (
    <div className='mt-2'>
        <div className='line'>
            <div className='content_home'>
                <div className='column'>
                    <h2 className='baby'>Baby</h2>
                    <p className='ad'>EASY TRANSITION 20 - 40% OFF</p>
                    <button className='shop_now'>SHOP NOW</button>
                </div>
                <div className='column'>
                    <div className='card_h milk'></div>
                    <div className='card_h food'></div>
                    <div className='card_h fashion'></div>
                    <div className='card_h ld'></div>
                </div>
            </div>
        </div>
        <section className="w-full my-6">
            <div className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    EASY TRANSITION & OTHER THINGS 20% - 40%
                </p>
            </div>
            <div id="featured-product">
            <div class="product-container">
                <div class="product">
                    <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                    <div class="product-desc">
                        <span>1111</span>
                        <h5>asdfghjljhgi</h5>
                        <div class="rate">
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
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>bjfvgdfcf</h5>
                    <div class="rate">
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
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>afgjdas</h5>
                    <div class="rate">
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
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>sdafdfjc</h5>
                    <div class="rate">
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
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>asdfxsjg</h5>
                    <div class="rate">
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
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>safdhxfvjh</h5>
                    <div class="rate">
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
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>dfasaSXGJD</h5>
                    <div class="rate">
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
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>adfsgdh</h5>
                    <div class="rate">
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

        <Carousel autoplay afterChange={onChange}>
            <div>
                <img className='w-full' src={slide_1}/>
            </div>
            <div>
                <img className='w-full' src='https://i.pinimg.com/736x/77/15/3c/77153cee77b3cba0c6b6ccd786ad50c0.jpg'/>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>

        <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                BEST SELLER THIS MONTH
            </p>
        </div>
        <div id="featured-product">
        <div class="product-container">
            <div class="product">
                <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
                <div class="product-desc">
                    <span>1111</span>
                    <h5>asdfghjljhgi</h5>
                    <div class="rate">
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
        <div class="product">
            <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
            <div class="product-desc">
                <span>1111</span>
                <h5>bjfvgdfcf</h5>
                <div class="rate">
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
        <div class="product">
            <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
            <div class="product-desc">
                <span>1111</span>
                <h5>dsghfasgv</h5>
                <div class="rate">
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
        <div class="product">
            <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
            <div class="product-desc">
                <span>1111</span>
                <h5>sdafdfjc</h5>
                <div class="rate">
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
        <div class="product">
            <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
            <div class="product-desc">
                <span>1111</span>
                <h5>asdfxsjg</h5>
                <div class="rate">
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
        <div class="product">
            <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
            <div class="product-desc">
                <span>1111</span>
                <h5>safdhxfvjh</h5>
                <div class="rate">
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
        <div class="product">
            <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
            <div class="product-desc">
                <span>1111</span>
                <h5>dfasaSXGJD</h5>
                <div class="rate">
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
        <div class="product">
            <img className='w-40 mt-2 ml-2' src='https://www.babyshop.com/images/1126926/card_large.jpg' alt=""/>
            <div class="product-desc">
                <span>1111</span>
                <h5>adfsgdh</h5>
                <div class="rate">
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
    </div>
  )
}

export default HomePage