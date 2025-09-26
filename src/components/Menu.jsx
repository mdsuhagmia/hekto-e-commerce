import React, { useEffect, useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

const Menu = () => {
  let [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`hidden md:block ${isSticky ? "bg-[#f7eeee] fixed top-0 left-0 w-full z-[9999] transition-all duration-200 ease-in-out py-3" : "bg-white w-full py-4" }`}>
      <Container>
        <div className={`flex justify-between items-center`}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className='flex gap-x-4 lg:gap-x-6 items-center'>
              <li>
                <NavLink to={"/"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pages"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Pages
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Shop
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='flex items-center'>
            <div className='bg-[#D9D9D9] rounded-l-[5px]'>
              <input type="search" 
                className='h-[30px] lg:h-[35px] outline-0 px-2 lg:px-4' />
            </div>
            <div className='bg-[#FB2E86] h-[30px] lg:h-[35px] px-2 rounded-r-[5px] flex items-center cursor-pointer'>
              <FiSearch className='text-white text-xl'/>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Menu