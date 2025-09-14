import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { MdOutlineMailOutline } from 'react-icons/md'
import { LuPhoneCall, LuUser } from 'react-icons/lu'
import { Link, NavLink } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import logo from '../assets/logo.png'
import { RiMenu3Fill } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'

const Header = () => {

  let [openMenu, setOpenMenu] = useState(false)
  let handleOpneMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  
  return (
    <header className='bg-[#ffffff] md:bg-[#7E33E0] py-2 border-b-2 border-[#00000019] shadow-sm'>
      <Container>
        <div>
          <div className='block md:hidden'>
            <div className='flex justify-between items-center py-2'>
              <div className='w-[20%]'>
                <img src={logo} alt="" />
              </div>
              <div className='w-[50%]'>
                <div className='flex items-center'>
                  <div className='bg-[#fff] w-full rounded-[4px] border-2 border-[#00000020]'>
                    <input type="search"
                      placeholder='Search...'
                      className='w-38 sm:w-60 outline-0 px-2 py-[2px]' />
                  </div>
                </div>
              </div>
              <div onClick={handleOpneMenu} className='cursor-pointer w-[10%] flex justify-end'>
                {openMenu ? "" : <RiMenu3Fill className="text-3xl cursor-pointer" /> }
              </div>
              <div className={` bg-white z-[99999] shadow-2xl transition-all duration-700 ease-in-out ${openMenu ? "absolute top-0 left-0 w-full h-auto opacity-100" : "absolute top-0 left-[-768px] w-full h-auto opacity-0"}`}>
                {openMenu && (
                <div>
                  <div onClick={handleOpneMenu} className='flex justify-end pt-4 pr-4' >
                    {openMenu ? <IoCloseSharp className="text-3xl cursor-pointer" /> : "" }
                  </div>
                  <ul className='py-4 text-center'>
                    <li className='pb-2' onClick={() => setOpenMenu(false)}>
                      <NavLink to={"/"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                        Home
                      </NavLink>
                    </li>
                    <li className='pb-2' onClick={() => setOpenMenu(false)}>
                      <NavLink to={"/pages"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                        Pages
                      </NavLink>
                    </li>
                    <li className='pb-2' onClick={() => setOpenMenu(false)}>
                      <NavLink to={"/products"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                        Products
                      </NavLink>
                    </li>
                    <li className='pb-2' onClick={() => setOpenMenu(false)}>
                      <NavLink to={"/blog"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                        Blog
                      </NavLink>
                    </li>
                    <li className='pb-2' onClick={() => setOpenMenu(false)}>
                      <NavLink to={"/shop"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                        Shop
                      </NavLink>
                    </li>
                    <li className='pb-2' onClick={() => setOpenMenu(false)}>
                      <NavLink to={"/contact"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                )}
              </div>
            </div>
          </div>
          <div className={`hidden md:block`}>
            <div className="flex justify-between items-center">
              <div className='flex items-center gap-x-6'>
                <div className='flex items-center gap-x-2 text-white'>
                  <MdOutlineMailOutline />
                  <p className='text-[14px] lg:text-[16px]'>mhhasanul@gmail.com</p>
                </div>
                <div className='flex items-center gap-x-2 text-white'>
                  <LuPhoneCall />
                  <p className='text-[14px] lg:text-[16px]'>(12345)67890</p>
                </div>
              </div>
              <div className='flex gap-x-4 items-center'>
                <div className='text-white text-center md:text-left text-[14px] lg:text-[16px]'>
                  <select name="language" id="language" className='px-4 border-none py-1 border-white outline-0 cursor-pointer font-josefin font-normal'>
                    <option value="english" className='bg-blue-500 font-josefin font-normal'>English</option>
                    <option value="bangla" className='bg-blue-500 font-josefin font-normal'>Bangla</option>
                  </select>
                </div>
                <div className='text-white py-2 md:py-0 text-center md:text-left'>
                  <select name="language" id="language" className='px-4 border-none py-1 border-white outline-0 cursor-pointer font-josefin font-normal text-[14px] lg:text-[16px]'>
                    <option value="english" className='bg-blue-500 font-josefin font-normal'>USD</option>
                    <option value="bangla" className='bg-blue-500 font-josefin font-normal'>Taka</option>
                  </select>
                </div>
                <div className='flex items-center gap-x-1 text-white cursor-pointer'>
                  <Link className='font-josefin font-normal pr-1 text-[14px] lg:text-[16px]'>Login</Link>
                  <LuUser className='cursor-pointer' />
                </div>
                <div className='flex items-center gap-x-1 text-white cursor-pointer'>
                  <Link className='font-josefin font-normal pr-1 text-[14px] lg:text-[16px]'>Wishlist</Link>
                  <FaHeart className='cursor-pointer' />
                </div>
                <div className='flex items-center gap-x-1 text-white pl-4'>
                  <BsCart className='cursor-pointer text-xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header