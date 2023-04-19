import React, { useState } from 'react'
import Home from './main/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Body.css'
import Orders from './tools/Orders'
import Login from './tools/Login'
import Register from './tools/Register'
import Profile from './Profile/Profile'
import Cart from './creaters/Cart'
import Payment from './creaters/Payment'
import OrderCreate from './creaters/OrderCreate'
import { AuthProvider } from './Auth'
import Navbar from './main/Navbar'
import About from './main/About'
import Editprofile from './Profile/Editprofile'
import Deleteprofile from './Profile/Deleteprofile'

function App() {
  const [btn, setBtn] = useState('dark')
   const [dark, setDark] = useState('light')

   const handleMode =()=>{
    if (dark === 'light') {
      setDark('dark')
      setBtn('light')
      document.body.style.background = '#13233a'
    } else {
      setDark('light')
      setBtn('dark')
      document.body.style.background = '#3178dc'
    }
   }
  return ( 
    <AuthProvider>
    <Router>
        <Navbar mode={dark} btn={btn} handleMode={handleMode}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>

        <Route path='/profile' element={<Profile/>}>
          <Route index element={<Editprofile/>}></Route>
          <Route index='edit' path='edit' element={<Editprofile/>}></Route>
          <Route path='delete' element={<Deleteprofile/>}></Route>
        </Route>

        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/ordercreate' element={<OrderCreate/>}></Route>
      </Routes>
      <About  mode={btn} dark={dark}/>
    </Router>
    </AuthProvider>
  )
}

export default App
