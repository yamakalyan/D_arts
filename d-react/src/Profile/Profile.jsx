import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <>
    <div className='container text-light my-5'>
      <div className='row p-2'>
        <div className='col-md-5 col-lg-5 shadow mx-2'>
      <h3 className='text-center text-primary'>Profile page</h3><hr/>
    <div className='d-flex flex-row'>
        <img src='k.jpg' className='img-fluid' width="160px" alt=''/>
      <div className='mx-2 '>
        <h5>Name : <span>kalyan</span></h5>
        <h5>Gmail : <span>kalyan@gmail.com</span></h5>
        <h5>Mobile : <span>9550049382</span></h5>
        <h5>Address : <span>Hyderabad</span></h5>
      </div>
    </div>
      </div>
        <div className='col-md-5 col-lg-5 border border-2 p-2 my-2'>
          <div className='text-center mt-2'>
          <span className="mx-3"><NavLink className="edit-link" to="edit">Edit profile</NavLink></span>
          <span className='mx-3'><NavLink  className="edit-link" to="delete">Delete profile</NavLink></span>
          </div><hr/>
        <Outlet/>
        </div>
         
      </div>
    </div>
    </>
  )
}

export default Profile
