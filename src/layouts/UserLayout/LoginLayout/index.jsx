import React from 'react'
import { Outlet } from 'react-router-dom'


function LoginLayout() {
  // Login Page va Register page duoc bao boc boi LoginLayout
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LoginLayout