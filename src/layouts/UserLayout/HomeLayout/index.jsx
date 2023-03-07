import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import Footer from "../../../components/User/Footer"
import Header from "../../../components/User/Header"

const HomeLayout = (props) => {
  const isLogged = useSelector(state=>state.users.isLogged)
  const navigate = useNavigate()
  useState(()=>{
    console.log(isLogged,"isLogged");
    if(!isLogged)
    console.log('navigatesasd');
    navigate('/login-layout')
  },[])
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

export default HomeLayout