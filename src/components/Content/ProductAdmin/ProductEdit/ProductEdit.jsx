import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import './ProductEdit.css'
import {toast} from 'react-toastify'
import { fetchUpdateProductById } from '../../../../apis/productApi';
import { actFetchProductById } from '../../../../redux/features/productSildeAdmin/productSilceAPI';
const ProductEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {editID} = useParams();
  
  const productLayTuRedux = useSelector((state) => state.product.product)

  const handleBack = (event) =>{
    event.preventDefault();
    navigate('/admin/product')
  }
  useEffect(() => {
    dispatch(actFetchProductById(editID))
  },[])

 

  const initialFormValue={
    id:editID || "",
    name:productLayTuRedux.name  || "",
    type:productLayTuRedux.type  || "",
    price:productLayTuRedux.price  || "",
    description:productLayTuRedux.description  || "",
    image:productLayTuRedux.image  || "",
    rating:productLayTuRedux.rating  || "",
  }
  const [product,setProduct] = useState(initialFormValue)

  useEffect(()=>{
    setProduct(initialFormValue)
  }, [productLayTuRedux])

  const handleChangeInputForm = (event)=>{
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  const handleUpdateForm = async (event) => {
    event.preventDefault();
    await fetchUpdateProductById(editID,product)
    setProduct(initialFormValue)
    navigate('/admin/product')
    toast.success('Update Success!') 
    
      
  };
 
  return (
    <div className='Add'>
        <div className='Add-button__back'>
          <button onClick={handleBack}>
            <i className='bx bx-arrow-back'></i>
            <span>Back</span>
          </button>
        </div>
        
        <div className='form-input'>
          <form className='Add-form' onSubmit={handleUpdateForm}  action="">
            <div className='Add-form__input' >
              <p>Product's name</p>
              <input type="text" id="admin_name" name="name" value={product.name} onChange={handleChangeInputForm} placeholder='Please click the Product Name !!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Product Type</p>
              <select type="text" id="admin_type" name="type" value={product.type} onChange={handleChangeInputForm} >
                  <option value=""></option>
                  <option value="Spring">Spring</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
              </select>
            </div>
            <div className='Add-form__input'>
              <p>Price</p>
              <input type="number" id="admin_price" name="price" value={product.price} onChange={handleChangeInputForm} placeholder='Please click the Price!!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Description</p>
              <input type="text" id="admin_description" name="description" value={product.description} onChange={handleChangeInputForm} placeholder='Please click the Description!!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Image</p>
              <input type="text" id="admin_image" name="image" value={product.image} onChange={handleChangeInputForm} placeholder='Please click the Image!!!' required/>
            </div>
            <div className='Add-form__input'>
              <p>Rating</p>
              <input type="text" id="admin_rating" name="rating" value={product.rating} onChange={handleChangeInputForm} placeholder='Please click the Rating!!!' required/>
            </div>
            <button >Edit</button>
          </form>
        </div>
    </div>
  )
}

export default ProductEdit