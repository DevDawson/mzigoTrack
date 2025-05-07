import React from 'react'
import Navbar from '../DashboardComponents/NAvbar'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default DashboardLayout