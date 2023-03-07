import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { actDeleteSelling, actFetchAllSelling } from '../../../redux/features/selling/sellingSilceAPI';
import Paginations from '../../Panigate/Panigate';
const SellingAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleAdd = (event) =>{
    event.preventDefault();
    navigate('/admin/selling/add')
  }
  const {allSelling,isLoading} = useSelector(state=> state.selling)
  useEffect(()=>{
    dispatch(actFetchAllSelling())
  },[])
  const renderDataSelling = (products)=>{
    return products.map((product)=>(
      <tr key={product.id}>
      <td className="text-left">{product.id}</td>
      <td className="text-left">{product.name}</td>
      <td className="text-left">{product.type}</td>
      <td className="text-left">{product.quantity}</td>
      <td className="text-left">{product.price}</td>
      <td className="text-left">{product.dateOfSale}</td>
      <td className="text-left">
        <div className='customer-top__btntable'>
          <button onClick={() => handleEdit(product.id)} >Edit</button>
          <button className='Delete' onClick={()=>handleDeleteSelling(product.id)}>Delete</button>
        </div>
      </td>
    </tr>)
    )
}
const handleDeleteSelling = (id)=>{
  dispatch(actDeleteSelling(id))
  toast.success('Delete successfully!')
}
  const handleEdit = (id) =>{
    navigate(`/admin/selling/${id}`)
  }
  const [current, setCurrent] = useState(1);
  const [potsPerPage, setPotsPerPage] = useState(4);
  const lastPostIndex = current * potsPerPage;
  const firstPostIndex = lastPostIndex - potsPerPage;
  const currentPosts = allSelling.slice(firstPostIndex,lastPostIndex)
  return (
    <div className='customer'>
      <div className='customer-top'>
          <div className='customer-top__title'>
              <h1>Selling Management</h1>
          </div>
          <div className='customer-top__btn'>
              <div className='customer-top__search'>
                <input type="text" placeholder='Please enter into....'/>
                <a href=""><i className='bx bx-search'></i></a>
              </div>
              <button  onClick={handleAdd}>ADD</button>
          </div>
      </div>



      <div className='customer-bottom'>
          {isLoading 
          ? (<div>Loading .....</div>)
          :<table className="table-fill">
            <thead>
              <tr>
                <th className='text-left'>ID</th>
                <th className='text-left'>Product's name</th>
                <th className='text-left'>Product Type</th>
                <th className='text-left'>Quantity</th>
                <th className='text-left'>Price</th>
                <th className='text-left'>Date of Sale</th>
                <th className='text-left'>Action</th>
              </tr>
            </thead>
            <tbody className="table-hover">
            {renderDataSelling(currentPosts)}
            </tbody>
          </table>}
      </div>
      <div className='pagination-page'>
            <Paginations totalPosts={allSelling.length} setCurrent={setCurrent} current={current} potsPerPage={potsPerPage}/>
      </div>
    </div>
  )
}

export default SellingAdmin