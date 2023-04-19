import React from 'react'
function Editprofile() {
  return (
    <>
    <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-12 my-2'>
            <div className='p-2'>
            <div className='mb-2'>
            <input type='text' className="form-control"  placeholder='New username'/>
            </div>
            <div className='mb-2'>
            <input type='number' className="form-control"  placeholder='New Number'/>
            </div>
            <div className='mb-2'>
            <input type='email' className="form-control"  placeholder='New Email'/>
            </div>
            <div className='mb-2'>
              <label className='form-label'>Enter password</label>
            <input type='password' className="form-control"  placeholder='Enter to confirm'/>
            </div>
          <div className='text-center'>
          <button className='btn btn-success'>Update</button>
          </div>
            </div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default Editprofile
