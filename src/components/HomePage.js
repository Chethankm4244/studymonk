import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'


const HomePage = () => {
  return (

   <div className='home-container'>
       <div className='mainpage'>
        <div className="main">
       <p>We build digital</p>
        <p className='main2'>for a living.</p>
       </div>
       
   <div className="sub">
    <p>StudyMonk comprises a team of brilliant minds and 
      innovative individuals who create digital products
       people love to use.</p>
    <p>We believe that seamless, user-centric and meaningful 
        experiences transcend mediums and touchpoints.</p>
   </div>
 
    <div className="click">
     
      <Link className='btn' to="/search" >Search for Candidates</Link>
      <Link className='btn' to="/login" >Sign up or Login</Link>
    
    </div>
    
   </div>
   </div>
  
  )
}

export default HomePage
