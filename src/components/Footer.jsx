import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FiSearch } from 'react-icons/fi'

const Footer = () => {
  return (
  <>
    <footer className='bg-[#EEEFFB] py-[80px]'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-[44%]'>
            <img src={logo} alt="" />
            <div className='flex items-center pt-8'>
              <div className='bg-[#fff] rounded-l-[5px]'>
                <input type="search"
                  placeholder='Enter Email Address'
                  className='h-[40px] outline-0 px-4' />
              </div>
              <div className='bg-[#FB2E86] h-[40px] px-2 rounded-r-[5px] flex items-center cursor-pointer'>
                <p className='text-white px-4'>Sign Up</p>
              </div>
            </div>
            <p className='text-[#8A8FB9] font-josefin pt-6 pb-2'>Contact Info</p>
            <p className='text-[#8A8FB9] font-josefin pb-2'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div className='w-[23%]'>
            <h2 className='text-black text-xl font-josefin font-bold pb-6'>Catagories</h2>
            <ul>
              <li className='pb-2'>
                <a href="#" 
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-16'>
                    Laptops & Computers
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Cameras & Photography
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Smart Phones & Tablets
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Video Games & Consoles
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Waterproof Headphones
                </a>
              </li>
            </ul>
          </div>
          <div className='w-[19%]'>
            <h2 className='text-black text-xl font-josefin font-bold pb-6'>Customer Care</h2>
            <ul>
              <li className='pb-2'>
                <a href="#" 
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-16'>
                    My Account
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Discount
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Returns
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Orders History
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Order Tracking
                </a>
              </li>
            </ul>
          </div>
          <div className='w-[14%]'>
            <h2 className='text-black text-xl font-josefin font-bold pb-6'>Pages</h2>
            <ul>
              <li className='pb-2'>
                <a href="#" 
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-16'>
                    My Account
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Discount
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Returns
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Orders History
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-md text-[#8A8FB9] font-lato font-semibold pb-3'>
                    Order Tracking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  </>
  )
}

export default Footer