import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [userName, setuserName] = useState('')
  const [userMobile, setuserMobile] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userPassword, setuserPassword] = useState('')
  const [createuser, setUserCreate] = useState('')
  const [createuserMsg, setUserCreateMsg] = useState('')

  const navigator = useNavigate()

  const saveUser =(e)=>{
e.preventDefault()
    let options = {
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        username : userName,
        useremail : userEmail,
        usermobile : userMobile,
        userpassword : userPassword
      })
    }
     fetch('http://localhost:4000/user/register', options)
    .then(response =>response.json())
    .then(data =>{
      if (data.server) {
        setUserCreate(data.server)
        navigator('/login')
      } else { 
        setUserCreate(data.server)
      }
    })
    
  }
  return (
    <>
    <div className='container my-5 bg-dark text-light border border-2 mx-auto'>
    <form  onSubmit={saveUser}>
      <div className='row p-5'>
        <div className='col-md-4 col-lg-4'>
          <img src='Sign up.png' className='img-fluid' alt='signup'/>
        </div>
        <div className='col-md-8 col-lg-8'>
          <h3 className='text-primary text-center'>Registration</h3><hr/>
          {createuser ? createuserMsg : createuserMsg}
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control" onChange={(e)=>setuserName(e.target.value)} required placeholder='Enter your Name'/>
      </div>
      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input type="number" className="form-control" onChange={(e)=>setuserMobile(e.target.value)} required placeholder='Enter your Mobile'/>
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" onChange={(e)=>setuserEmail(e.target.value)} required placeholder='Enter your email'/>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" onChange={(e)=>setuserPassword(e.target.value)} required placeholder='Enter your password'/>
      </div>

    <div className='row my-3'>
      <div className="col-md-6 col-lg-6">
        <span> Already an user ? <a href='/login'>Login</a></span>
    </div>
      <div className="col-md-6 col-lg-6">
        <input type="checkbox" required/>
        <label className="form-label mx-2"> Agree <a href='termsconditions'>terms and conditions</a></label>
      </div>
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

export default Register
