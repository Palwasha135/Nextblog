import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
const Navbar = () => {
  return (
    <div>
     <nav className='relative w-full  flex justify-between px-4 py-5 '>
      <Link  href='/' className=' font-bold text-2xl '> Palwasha&nbsp;
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-12 before:bg-green-500 relative inline-block">
      <span className="relative text-white">Blog</span></span></Link> 
      <ModeToggle/>
        </nav> 
    </div>
  )
}

export default Navbar
