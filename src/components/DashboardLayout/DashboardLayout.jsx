import React from 'react'
import NAvbar from '../DashboardComponents/NAvbar'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <NAvbar/>
        {children}
    </div>
  )
}

export default DashboardLayout