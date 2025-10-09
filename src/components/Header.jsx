import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuPhoneCall, LuUser } from 'react-icons/lu';
import { Link, NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Header = () => {
  let menuRef = useRef();
  let [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  let data = useSelector((state) => state.product.cartItem);

  // let wishlistData = useSelector((state)=>state.product.wishlist)
  
  return (
    <header className='bg-[#ffffff] md:bg-[#7E33E0] py-2 border-b-2 border-[#00000019] shadow-sm relative'>
      <Container>
        <div>
          <div className='block md:hidden'>
            <div className='flex justify-between items-center py-2 '>
              <div className='w-[20%]'>
                <img src={logo} alt="Logo" />
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
              
              <div onClick={()=>setMenuOpen((prev)=> !prev)} className='cursor-pointer w-[10%] flex justify-end'>
                {menuOpen ? "" : <RiMenu3Fill className="text-3xl cursor-pointer" /> }
              </div>
              
              <div ref={menuRef} className={`bg-white z-[9999] shadow-2xl absolute top-0 left-0 h-auto w-full transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-[1200px]'}`}>
                <div className='relative h-auto w-full'>
                  <div onClick={() => setMenuOpen(false)} className='absolute top-2 right-4 cursor-pointer z-50'>
                      <IoCloseSharp className="text-4xl text-[#0D0E43]" />
                  </div>
                  <ul className='pt-8 pb-4 text-center'>
                    <li className='pb-2'>
                      <NavLink to={"/"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}> 
                        Home
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/pages"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}>
                        Pages
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/products"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}>
                        Products
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/blog"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}>
                        Blog
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/shop"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}>
                        Shop
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/contact"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}>
                        Contact
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/cart"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}>
                        Cart
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/myaccount"}
                        className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`} 
                        onClick={() => setMenuOpen(false)}>
                        My Account
                      </NavLink>
                    </li>
                  </ul>
                </div>
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
                  <Link to={"/myaccount"} className='font-josefin font-normal pr-1 text-[14px] lg:text-[16px]'>Login</Link>
                  <LuUser className='cursor-pointer' />
                </div>
                <div className='relative'>
                  <div className='flex items-center gap-x-1 text-white cursor-pointer'>
                    <Link to={"/wishlist"} className='font-josefin font-normal pr-1 text-[14px] lg:text-[16px]'>Wishlist</Link>
                    <FaHeart className='cursor-pointer' />
                  </div>
                  {/* <div className='absolute top-0 right-0'>
                    {wishlistData.length}
                  </div> */}
                </div>
                <div className='flex items-center gap-x-1 text-white pl-4 relative'>
                  <Link to={"/cart"}>
                    <div className='absolute -top-2 left-8 h-5 w-5 rounded-full bg-[#fff] text-blue-600 flex items-center justify-center'>
                      <p className='text-[14px]'>{data.length}</p>
                    </div>
                    <BsCart className='cursor-pointer text-xl' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;