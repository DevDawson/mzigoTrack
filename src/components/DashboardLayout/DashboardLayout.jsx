import React from 'react'
import NavBar from '../DashboardComponents/NAvbar'


const DashboardLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default DashboardLayout