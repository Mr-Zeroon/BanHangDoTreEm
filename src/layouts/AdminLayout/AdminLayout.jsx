import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

const AdminLayout = () => {
  return (
    <div className="App">
        <Menu/>
        <div className='App-content'>
            <Header/>
            <div className='outlet' style={{marginTop: 60}}>
                <Outlet/>
            </div>
        </div>
        
    </div>
  )
}

export default AdminLayout