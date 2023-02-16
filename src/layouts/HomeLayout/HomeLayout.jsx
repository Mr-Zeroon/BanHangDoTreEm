import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

const HomeLayout = () => {
  return (
    <div className="App">
        <Menu/>
        <div className='App_right'>
            <Header/>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default HomeLayout