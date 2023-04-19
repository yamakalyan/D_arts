import React, { useState } from 'react'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { AuthUser } from '../Auth';
import {MdDarkMode} from 'react-icons/md'

function Navbar({mode, btn, handleMode}) {

  const user = AuthUser()
  const navigator = useNavigate()
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${mode} sticky-top bg-${mode}`}>
    <div className="container">
        <Link className="navbar-brand mx-4 fs-2" to="/">Dev Arts</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            {user &&
            <>
            <li className="nav-item">
              <NavLink className="nav-link"  to="orders">Orders</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="edit">edit</Link></li>
                <li><Link className="dropdown-item" to="delete">Address</Link></li>
                <li><Link className="dropdown-item" to="#">Delete Account</Link></li>
              </ul> */}
            </li>
            </>}
             <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
          </ul>
          <div className="d-flex">
            {user ?
            <>
            <button className="btn btn-outline-primary" >Log-out</button>
            <button className={`btn btn-outline-${btn} mx-2`} onClick={handleMode}><MdDarkMode/></button>
            </>
            :
            <>
            <button className="btn btn-outline-primary mx-2" onClick={()=>navigator('/login')}>Login</button>
            <button className="btn btn-outline-primary" onClick={()=>navigator('/register')}>Register</button>
            <button className={`btn btn-outline-${btn} mx-2`} onClick={handleMode}><MdDarkMode/></button>
            </>
            }
          </div>
        </div>
    </div>
</nav>  
    </>
  )
}

export default Navbar
