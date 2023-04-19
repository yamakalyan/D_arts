import React from 'react'
import {BsInstagram , BsWhatsapp} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

function About({mode, dark}) {
  return (
    <>
      <div className={`container-fluid bg-${mode} text-${dark}`} id='about'>
      <div className='container'>
        <div className='row mb-3'>
        <form>
            <h2 className='text-center mt-3'>Any queries ? write to us</h2>
            <div className="form-group my-3">
                <input type="email" className="form-control" placeholder="name@gmail.com"/>
            </div>
            <div className="form-group">
                <textarea className="form-control" rows="4" placeholder='write your message here..'></textarea>
            </div>
            <div className='d-flex justify-content-center'>
            <button className='btn-sm btn-primary btn-lg btn-block mx-5 my-2'>Submit</button>
            </div>
            </form>
        </div>
        </div>
        <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='col-md my-5 col-3'>
                <ul>
                <h6>About</h6><hr/>
                    <li>Name</li>
                    <li>Contact</li>
                    <li>Email</li>
                    <li>Address</li>
                    <li>pincode</li>
                </ul>
            </div>
            <div className='col-md my-5 col-3'>
                <ul>
                <h6>FAQ</h6><hr/>
                    <li>Name</li>
                    <li>Contact</li>
                    <li>Email</li>
                    <li>Address</li>
                    <li>pincode</li>
                </ul>
            </div>
            <div className='col-md my-5 col-3'>
                <ul>
                <h6>Contact</h6><hr/>
                    <li>Name</li>
                    <li>Contact</li>
                    <li>Email</li>
                    <li>Address</li>
                    <li>pincode</li>
                </ul>
            </div>
            
        </div>    
        <div className='row'>
            <ul className='d-flex justify-content-between align-items-center'>
                <li><BsInstagram/> </li>
                <li><GrFacebook/> </li>
                <li><FaTwitter/></li>
                <li><FcGoogle /></li>
                <li><BsWhatsapp/></li>  
            </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default About
