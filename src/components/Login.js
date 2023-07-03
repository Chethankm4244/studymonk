import React from 'react'
import './Login.css'
import img2 from '../images/loginpage.png'
import img3 from '../images/Screenshot 2023-07-01 111225.png'


const Login = () => {
  return (
    <div className='l-container'>
        <div>
            <img src={img2} alt="" className='loginimg' />
            
        </div>
       <form className='form'>
        <div>
          <img src={img3} className='logoimg2' alt="" />
            <span className='company-name2'> 𝐒𝐭𝐮𝐝𝐲𝐌𝐨𝐧𝐤 </span>
            <p>Workplace Psychological Safety - made simple</p>
        </div>
           <h2>Welcome Back</h2>
           <span className='input1'>
            <label >Email</label>
            <input type="email"  placeholder='Enter the email' className='input' />
           </span>
           <span className='input1'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter the Password' className='input' />
           </span>
           <span>
            <p className='forgot'>Forgot Password? </p>
           <button className='btn1'>Sign up</button>
           <button className='btn2'>Login</button>
           </span>
          
       </form>
    </div>
  )
}

export default Login
