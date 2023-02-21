import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../../../components/User/Footer"
import Header from "../../../components/User/Header"

const HomeLayout = (props) => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

export default HomeLayout