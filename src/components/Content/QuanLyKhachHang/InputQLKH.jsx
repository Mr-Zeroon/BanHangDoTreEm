import React from 'react'

const InputQLKH = ({inputForm, setInputForm, handleSubmit}) => {
        const handleInput = (e) => {
        const {name, value} = e.target 
        setInputForm({
            ...inputForm,
            [name]:value,
        }
        )
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        handleSubmit();
    }
  
    return (
   
  <form className='user-content-input' onSubmit={(e) => onSubmit(e)} >
    <div className='user-content-inp'>
      <p>ID</p>
      <input type="text" name="id" value={inputForm.id} onChange={(e) => handleInput(e)}/>
    </div>

    <div className='user-content-inp'>
      <p>Tài Khoản</p>
      <input type="text" name="taiKhoan" value={inputForm.taiKhoan} onChange={(e) => handleInput(e)}/>
    </div>

    <div className='user-content-inp'>
      <p>Tên KH</p>
      <input type="text" name="tenKH" value={inputForm.tenKH} onChange={(e) => handleInput(e)}/>
    </div>

    <div className='user-content-inp'>
      <p>Ngày Sinh</p>
      <input type="date" name="ngaySinh" value={inputForm.ngaySinh} onChange={(e) => handleInput(e)}/>
    </div>

    <div className='user-content-inp'>
      <p>SĐT</p>
      <input type="text" name="sdt" value={inputForm.sdt} onChange={(e) => handleInput(e)}/>
    </div>

    <div className='user-content-inp'>
      <p>Email</p>
      <input type="text" name="email" value={inputForm.email} onChange={(e) => handleInput(e)}/>
    </div>
    <button className='user-content-btnthem'>Thêm</button>
  </form> 
  )
}

export default InputQLKH