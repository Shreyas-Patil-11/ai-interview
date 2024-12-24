import React from 'react'
import Header from './_components/Header'
import Footer from '../Footer'

function DashboardLayout({children}) {
  return (
    <div>
      <Header />
      <div className='mx-5 md:mx-20 lg:mx-36 pt-20 mb-7'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout