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
    navigate('/product')
  }
  useEffect(() => {
    dispatch(actFetchProductById(editID))
  },[])

 

  const initialFormValue={
    id:editID || "",
    name:productLayTuRedux.name  || "",
    type:productLayTuRedux.type  || "",
    quantity:productLayTuRedux.quantity  || "",
    dateAdded:productLayTuRedux.dateAdded  || "",
    dateOfSale:productLayTuRedux.dateOfSale  || "",
  }
  const [product,setProduct] = useState(initialFormValue)

  useEffect(()=>{
    console.log(initialFormValue);
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
    if( !product.name || !product.type || !product.quantity || !product.dateAdded || !product.dateOfSale) {
      toast.error('Please Enter Full Information!!')
    }
    else{
      await fetchUpdateProductById(editID,product)
      setProduct(initialFormValue)
      navigate('/product')
      toast.success('Update Success!') 
    }
      
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
            {/* <div className='Add-form__input'>
              <p>ID</p>
              <input type="text" id="admin_id" name="id" value={product.id} onChange={handleChangeInputForm} />
            </div> */}
            <div className='Add-form__input' >
              <p>Product's name</p>
              <input type="text" id="admin_name" name="name" value={product.name} onChange={handleChangeInputForm}/>
            </div>
            <div className='Add-form__input'>
              <p>Product Type</p>
              <select type="text" id="admin_type" name="type" value={product.type} onChange={handleChangeInputForm} placeholder='Please click the Product Type!!!'>
                  <option value=""></option>
                  <option value="Shirt">Shirt</option>
                  <option value="Trousers">Trousers</option>
                  <option value="Shorts">Shorts</option>
              </select>
            </div>
            <div className='Add-form__input'>
              <p>Quantity</p>
              <input type="number" id="admin_quantity" name="quantity" value={product.quantity} onChange={handleChangeInputForm}/>
            </div>
            <div className='Add-form__input'>
              <p>Date Added</p>
              <input type="date" id="admin_dateAdded" name="dateAdded" value={product.dateAdded} onChange={handleChangeInputForm}/>
            </div>
            <div className='Add-form__input'>
              <p>Date of Sale</p>
              <input type="date" id="admin_dateOfSale" name="dateOfSale" value={product.dateOfSale} onChange={handleChangeInputForm}/>
            </div>
            <button >Edit</button>
          </form>
        </div>
    </div>
  )
}

export default ProductEdit