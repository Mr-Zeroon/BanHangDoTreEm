import React from 'react'
import './shopping.scss'
import rrr from '../../assets/Img/R.jpg'
import { Link } from 'react-router-dom'

const ShoppingPage = () => {
  return (
    <div className='w-full box-border block'>
        <div className='w-full'>
            <div className='box-border'>
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-96 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-black to-black-console.error(first) transition-all ease-in-out duration-100">
                    My Shopping
                </p>
                <div className='text-center mt-5 block box-border scroll-pt-7 w-full'>
                    <div className='small-container cart-page justify-between'>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className='flex flex-wrap ml-3'>
                                        <img src='https://lzd-img-global.slatic.net/g/p/1caa70f2a680041f71023451503046db.jpg_720x720q80.jpg' className='h-32 w-32'></img>
                                        <div>
                                            <p>Red Printed Tshirt</p>
                                            <a>Remove</a>
                                        </div>
                                    </div>
                                </td>
                                <td className='items-center justify-center'><input type='number' value='1'/></td>
                                <td>$70.00</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td>
                                    <div className='flex flex-wrap ml-3'>
                                        <img src='https://lzd-img-global.slatic.net/g/p/1caa70f2a680041f71023451503046db.jpg_720x720q80.jpg' className='h-32 w-32'></img>
                                        <div>
                                            <p>Red Printed Tshirt</p>
                                            <a>Remove</a>
                                        </div>
                                    </div>
                                </td>
                                <td className='items-center justify-center'><input type='number' value='1'/></td>
                                <td>$70.00</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td>
                                    <div className='flex flex-wrap ml-3'>
                                        <img src='https://lzd-img-global.slatic.net/g/p/1caa70f2a680041f71023451503046db.jpg_720x720q80.jpg' className='h-32 w-32'></img>
                                        <div>
                                            <p>Red Printed Tshirt</p>
                                            <a>Remove</a>
                                        </div>
                                    </div>
                                </td>
                                <td className='items-center justify-center'><input type='number' value='1'/></td>
                                <td>$90.00</td>
                            </tr>
                            <hr/>
                        </table>
                        <div className='flex justify-end mt-4'>
                            <table className='total-price'>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$230.00</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>$20.00</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>$250.00</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <Link className='text-teal-600' to={'/menu'}>Back to start page</Link>
                </div>
                <div className='No'></div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingPage