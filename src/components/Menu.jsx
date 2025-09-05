import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

const Menu = () => {
  return (
    <nav className='bg-white py-4'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className='flex gap-x-6 items-center'>
              <li>
                <NavLink to={"/"}
                  className={({isActive})=> `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pages"}
                  className={({isActive})=> `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Pages
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"}
                  className={({isActive})=> `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}
                  className={({isActive})=> `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}
                  className={({isActive})=> `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Shop
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}
                  className={({isActive})=> `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='flex items-center'>
            <div className='bg-[#D9D9D9] rounded-l-[5px]'>
              <input type="search" 
                className='h-[40px] outline-0 px-4' />
            </div>
            <div className='bg-[#FB2E86] h-[40px] px-2 rounded-r-[5px] flex items-center cursor-pointer'>
              <FiSearch className='text-white text-xl'/>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Menu