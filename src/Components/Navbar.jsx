import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul>
            <li>
                <a href="#">Menu</a>
            </li>
            <li>
                <a href="#">Location</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            </ul>
            <button>Login</button>
        </nav>
    </>
  )
}

export default Navbar