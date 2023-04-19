import React from 'react'

export default function Deleteprofile() {
  return (
    <>
     <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-12 my-2'>
            <div className='p-3'>
            <div className='mb-2'>
            <input type='email' className="form-control"  placeholder='Enter@gmail.com'/>
            </div>
            <div className='mb-2'>
            <input type='password' className="form-control"  placeholder='Enter password'/>
            </div>
          <div className='text-center'>
          <button className='btn btn-danger'>Delete</button>
          </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
