import React from 'react'
import { useSelector } from 'react-redux'


const TableQLKH = () => {
    const productData = useSelector(state=>state.users.users)
  return (
    <div className='user-table'>
        <table>
            <thead>
                <tr>
                    <th className='table__heading'>ID</th>
                    <th className='table__heading'>Tài Khoản</th>
                    <th className='table__heading'>Tên KH</th>
                    <th className='table__heading'>Ngày Sinh</th>
                    <th className='table__heading'>SĐT</th>
                    <th className='table__heading'>Email</th>
                    <th className='table__heading'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                productData.map ((e)=>(
                    <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.taiKhoan}</td>
                    <td>{e.tenKH}</td>
                    <td>{e.ngaySinh}</td>
                    <td>{e.sdt}</td>
                    <td>{e.email}</td>
                    <td>
                        <button className='btn-table btn-sua'>Sửa</button>
                        <button className='btn-table btn-xoa'>Xoá</button>    
                    </td>
                    </tr>
            ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableQLKH