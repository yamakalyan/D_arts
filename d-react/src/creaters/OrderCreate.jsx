import React from 'react'

function OrderCreate() {
  return (
    <>
    <div className='container bg-light my-3'>
        <div className='row'>
                <div className='col-md-5 col-lg-5'>
                  <img src='Cash payment.png' className='img-fluid' alt=''/>
                </div>
            <div className='col-md-5 col-lg-5 mt-5'>
                <h2 className='text-center text-primary'>Proceed to payment</h2>
                <ul className=" border border-2 p-3">
                  <li>Item name : lord krishna</li>
                  <li>Quantity : 1</li>
                  <li>Amount : 99rs</li>
                  <li>Tax : 9rs</li>
                  <li>delivery charges : 29rs</li>
                  <li>Address : himayat nagar, hyderabad 500029.</li><hr/>
                <div className="d-flex justify-content-between">
                  <span className="text-primary mx-3">Total = 139 rs</span>
                <button className="btn-sm btn-success mx-3">Confirm & pay</button>
                </div>
                </ul>
              </div>
        </div>
    </div>
    </>
  )
}

export default OrderCreate
