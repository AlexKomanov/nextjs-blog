import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <h1><Link href="/">SPWS</Link></h1>
      <Link href="/">HOME</Link>
      <Link href="/posts"> POSTS</Link>
      <Link href="/comments"> COMMENTS</Link>
      <Link href="/portfolio"> PORTFOLIO</Link>
      <Link href="/about"> ABOUT</Link>
    </div>
    
  )
}

export default NavBar