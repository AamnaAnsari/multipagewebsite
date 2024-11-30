import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Aura Events</div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/contact">Contact</Link>
      </div>
    
    </nav> 
    
  )
}

export default Header