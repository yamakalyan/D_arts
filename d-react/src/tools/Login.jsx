import React, { useState } from 'react'
import { AuthUser } from '../Auth'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState('')
  const [userPass, setUserPass]=useState('')
  const navigator = useNavigate()
  const auth = AuthUser()

  const testing =()=>{
      auth.login(user)
      navigator('/')
  }
  return (
    <>
    <div className='container my-5 bg-dark text-light border border-2 mx-auto'>
    <form onSubmit={testing}>
      <div className='row p-5'>
        <div className='col-md-4 col-lg-4'>
          <img src='otp.png' className='img-fluid' alt='' />
        </div>
        <div className='col-md-8 col-lg-8 mt-5'>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" onChange={e=>setUser(e.target.value)} placeholder='Enter your email'/>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" onChange={e=>setUserPass(e.target.value)} placeholder='Enter your password'/>
      </div>
      <div>
        <h6>New user ? <a href='/register'>Register</a> </h6>
      </div>
      <div className='d-flex justify-content-center'>
       <button type="submit" className="btn btn-primary">Submit</button>
      </div>
        </div>
      </div>
</form>
    </div>
    </>
  )
}

export default Login
