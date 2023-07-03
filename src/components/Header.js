import React from 'react'
import img1 from '../images/Screenshot 2023-07-01 111225.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
    <div className="left">
      <img src={img1} className='logoimg' alt="" />
      <span className='company-name'> 𝐒𝐭𝐮𝐝𝐲𝐌𝐨𝐧𝐤 </span>
      
    </div>
    <div className="right">
      <ul >
        <li className='lit'>Home</li>
        <Link className='singup' to="/contact">About</Link>
        <Link  className='singup' to="/work">Work</Link>
        <Link className='singup' to="/contact">Contact</Link>
       
        <Link className='singup' to="/login">Sign up</Link>
      </ul>
    </div>
    
  </div>
  )
}

export default Header
