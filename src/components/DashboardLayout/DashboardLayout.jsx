import React from 'react'
import NavBar from '../DashboardComponents/NavBar'
const DashboardLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default DashboardLayout