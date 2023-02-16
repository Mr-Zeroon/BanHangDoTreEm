import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../redux/features/user/silceUser'
import InputQLKH from './InputQLKH'
import TableQLKH from './TableQLKH'


const QuanLyKhachHang = () => {
  const dispatch = useDispatch()
  const [inputForm,setInputForm] = useState({
    id:'',
    taiKhoan:'',
    tenKH:'',
    ngaySinh:'',
    sdt:'',
    email:''
});

  const handleSubmit = () => {
    dispatch(addUser(inputForm));
  }
 
  return (
    
<div className='user'>
    <h1>Quản Lý Khách Hàng</h1>
    <div className='user-container'>
      <div className='user-content'>
        <h4>THÔNG TIN KHÁCH HÀNG</h4>
          <InputQLKH inputForm={inputForm} setInputForm={setInputForm} handleSubmit={handleSubmit}/>
      </div>

          <TableQLKH/>
    </div>
</div>
  )
}

export default QuanLyKhachHang