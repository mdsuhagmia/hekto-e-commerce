import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import FooterDown from '../FooterDown'
import { FaAngleDoubleUp } from 'react-icons/fa'

const RootLayout = () => {
  let [showArrow, setShowArrow] = useState(false)
    useEffect(()=>{
     let handleScrollTo = ()=>{
      if(window.scrollY > 70){
        setShowArrow(true)
      }else{
        setShowArrow(false)
      }
     }
     window.addEventListener("scroll", handleScrollTo)
     return () => window.removeEventListener("scroll", handleScrollTo)
    },[])
  let handleScroll = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <div>
      <Header/>
      <Menu/>
      <Outlet/>
      <Footer/>
      <FooterDown/>
      {showArrow && (
      <div className='fixed bottom-6 right-[4px]'>
        <FaAngleDoubleUp onClick={handleScroll} className='bg-blue-500 p-2 rounded-full cursor-pointer text-4xl text-white' />
      </div>
      )}
    </div>
  )
}

export default RootLayout