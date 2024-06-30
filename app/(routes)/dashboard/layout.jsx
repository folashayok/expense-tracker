import React from 'react'
import Navbar from './_components/Navbar'

function DashboardLayout({children}) {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
      {children}  
      </div>
    </div>
  )
}

export default DashboardLayout