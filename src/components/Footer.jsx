import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { apiData } from './ContextApi'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  let data = useContext(apiData)
  let [showCategory, setShowCategory] = useState([])
  useEffect(()=>{
    let cateShow = ([...new Set(data.map((item)=>item.category))])
    setShowCategory(cateShow)
  },[data])

  let [activeCategory, setActiveCategory] = useState("");

  let navigate = useNavigate()
  let handleCateF = (citem)=>{
    setActiveCategory(citem);
    let cateFil = data.filter((item)=>item.category === citem)
    navigate("/products", {state: {cateData: cateFil, category: citem}})
  }

  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/products") {
      setActiveCategory("");
    }
  }, [location.pathname]);

  return (
  <>
    <footer className='bg-[#EEEFFB] py-[80px]'>
      <Container>
        <div className='md:flex justify-between'>
          <div className='w-full md:w-[29%] lg:w-[28%] pb-8 md:pb-0'>
            <img src={logo} alt="ff" />
            <div className='flex items-center pt-8 w-[65%] sm:w-[40%] md:w-full lg:w-full'>
              <div className='bg-[#fff] rounded-l-[5px] w-[70%]'>
                <input type="search"
                  placeholder='Enter Email Address'
                  className='h-[40px] outline-0 placeholder:text-[12px] placeholder:lg:text-[16px] pl-2 lg:pl-4' />
              </div>
              <div className='bg-[#FB2E86] h-[40px] px-2 rounded-r-[5px] flex items-center justify-center cursor-pointer w-[30%]'>
                <p className='text-white text-[12px] lg:text-[16px]'>Sign Up</p>
              </div>
            </div>
            <p className='text-[#8A8FB9] font-josefin pt-6 pb-2'>Contact Info</p>
            <p className='text-[#8A8FB9] font-josefin pb-2 text-[14px] lg:text-[16px]'>17 Princess Road, <br /> London, Greater London NW1 8JR, UK</p>
          </div>
          <div className='w-full md:w-[10%] lg:w-[10%]  pb-8 md:pb-0'>
            <h2 className='text-black text-lg lg:text-2xl font-josefin font-bold pb-6'>Catagories</h2>
            <ul>
                {showCategory.map((item) => (
                  <li onClick={()=>handleCateF(item)} className='pb-2'>
                    <Link
                      className={`text-sm lg:text-[15px] font-lato font-semibold pb-16 hover:underline  capitalize ${activeCategory === item ? "text-red-500" : "text-[#8A8FB9] hover:text-indigo-950"}`}>
                       {item}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className='w-full md:w-[18%] lg:w-[16%]  pb-8 md:pb-0'>
            <h2 className='text-black text-lg lg:text-2xl font-josefin font-bold pb-6'>Customer Care</h2>
            <ul>
              <li className='pb-2'>
                <Link to="/myaccount" 
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-16 hover:underline hover:text-indigo-950'>
                    My Account
                </Link>
              </li>
              <li className='pb-2'>
                <Link to="/discount"
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950'>
                    Discount
                </Link>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950'>
                    Returns
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950'>
                    Orders History
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950'>
                    Order Tracking
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-[17%] lg:w-[20%]'>
            <h2 className='text-black text-lg lg:text-2xl font-josefin font-bold pb-6'>Pages</h2>
            <ul>
              <li className='pb-2'>
                <NavLink to={"/blog"}
                  className={({ isActive }) => `text-sm lg:text-[15px] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950 ${isActive ? "underline text-indigo-950" : "text-[#8A8FB9]"}`}>
                    Blog
                </NavLink>
              </li>
              <li className='pb-2'>
                <NavLink to={"/hektodemo"}
                  className={({ isActive }) => `text-sm lg:text-[15px] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950 ${isActive ? "underline text-indigo-950" : "text-[#8A8FB9]"}`}>
                    Hekto Demo
                </NavLink>
              </li>
              <li className='pb-2'>
                <NavLink to={"/faq"}
                  className={({ isActive }) => `text-sm lg:text-[15px] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950 ${isActive ? "underline text-indigo-950" : "text-[#8A8FB9]"}`}>
                    FAQ
                </NavLink>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950'>
                    Pre-Built Pages
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950'>
                    Visual Composer Elements
                </a>
              </li>
              <li className='pb-2'>
                <a href='#'
                  className='text-sm lg:text-[15px] text-[#8A8FB9] font-lato font-semibold pb-3 hover:underline hover:text-indigo-950'>
                    WooCommerce Pages
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