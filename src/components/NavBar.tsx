import Link from 'next/link'
import React from 'react'
import NavBarTabs from './NavBarTabs'

const NavBar = () => {
  return (
    <div className='mb-4 font-bold flex justify-between items-center m-3'>
      <h1 className='text-4xl'><Link href="/">SPWS</Link></h1>
      <NavBarTabs />
    </div>
    
  )
}

export default NavBar