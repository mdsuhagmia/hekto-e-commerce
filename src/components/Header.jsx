import React from 'react'
import Container from './Container'
import { MdOutlineMailOutline } from 'react-icons/md'
import { LuPhoneCall, LuUser } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'

const Header = () => {
  return (
    <header className='bg-[#7E33E0] py-3'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-6'>
            <div className='flex items-center gap-x-2 text-white'>
              <MdOutlineMailOutline />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className='flex items-center gap-x-2 text-white'>
              <LuPhoneCall />
              (12345)67890
            </div>
          </div>
          <div className='flex gap-x-4 items-center'>
            <div className='text-white'>
              <select name="language" id="language" className='px-4 border-none py-1 border-white outline-0 cursor-pointer font-josefin font-normal'>
                <option value="english" className='bg-blue-500 font-josefin font-normal'>English</option>
                <option value="bangla" className='bg-blue-500 font-josefin font-normal'>Bangla</option>
              </select>
            </div>
            <div className='text-white'>
              <select name="language" id="language" className='px-4 border-none py-1 border-white outline-0 cursor-pointer font-josefin font-normal'>
                <option value="english" className='bg-blue-500 font-josefin font-normal'>USD</option>
                <option value="bangla" className='bg-blue-500 font-josefin font-normal'>Taka</option>
              </select>
            </div>
            <div className='flex items-center gap-x-1 text-white cursor-pointer'>
              <Link className='font-josefin font-normal pr-1'>Login</Link>
              <LuUser className='cursor-pointer' />
            </div>
            <div className='flex items-center gap-x-1 text-white cursor-pointer'>
              <Link className='font-josefin font-normal pr-1'>Wishlist</Link>
              <FaHeart className='cursor-pointer' />
            </div>
            <div className='flex items-center gap-x-1 text-white pl-4'>
              <BsCart className='cursor-pointer text-xl' />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header