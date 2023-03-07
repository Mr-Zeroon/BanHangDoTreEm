import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

const AdminLayout = () => {
  const isLogged = useSelector(state=>state.users.isLogged)
  const navigate = useNavigate()
  useState(()=>{
    if(!isLogged)
    navigate('/login-layout')
  },[])
  return (
    <div className="App">
        <Menu/>
        <div className='App-content'>
            <Header/>
            <div className='outlet' style={{marginTop: 80}}>
                <Outlet/>
            </div>
        </div>
        
    </div>
  )
}

export default AdminLayout