import React from 'react'
import './Header2.css'
import {BiMailSend} from 'react-icons/bi'

const Header2 = () => {
  return (
    <div className='h-container'>
        <div className="contact">
          <span className='phone'>call us (91)79847534</span>
          <div className='logo1'>
           <BiMailSend />
          </div>
         
          <span className='mail'>studymonk@gamil.com</span>
        </div>
     
    </div>
  )
}

export default Header2
