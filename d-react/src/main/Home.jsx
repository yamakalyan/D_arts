import React, { useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
function Home({mode, dark}) {
  const [login, setLogin] = useState(true)
  const navigator = useNavigate()
  return (
    <>
      <section id='home' className='home-page'>
        <div className='container'>
          <div className='row'>
          <div className='col-8'>
          </div>
          </div>
        </div>
      </section>

      <section className='art-section-1'>
        <div className='container'>

        <div className='row'>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>
        </div>
 
        <div className='row'>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>
          <div className='col-md col-lg-3 mt-4 my-4'>
            <div className='border rounded border-3 bg-light' >
            <img src='k.jpg' className='img-fluid mb-2 p-3 ' alt='Lord Krishna'/>
            <p className='text-center'>Lord Krishna Art AI</p>
            <h5 className='d-flex justify-content-between align-items-center mx-3 my-3'>Price : 99 /-
            <span>
              <button className='btn btn-dark mx-2' onClick={()=>{login ? navigator('/cart') : navigator('/login')}}><AiOutlineShoppingCart/></button>
              <button className='btn btn-dark' onClick={()=>{login ? navigator('/ordercreate') : navigator('/login')}}>Order</button>
            </span>
            </h5>
            </div>
          </div>

        </div>

        </div>
      </section>
    </>
  )
}

export default Home
