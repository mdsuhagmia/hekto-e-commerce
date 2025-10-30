import React, { useState } from 'react'
import Container from './Container'
import lb1 from '../assets/lb1.png'
import lb2 from '../assets/lb2.png'
import lb3 from '../assets/lb3.png'
import { FaPenFancy } from 'react-icons/fa'
import { LuCalendarDays } from 'react-icons/lu'

const LeatestBlog = () => {
  let [aShow, setAShow] = useState(false)
  let [bShow, setBShow] = useState(false)
  let [cShow, setCShow] = useState(false)
  
  return (
    <section className='pb-16'>
      <Container>
        <div>
          <h2 className='text-[#151875] text-[35px] font-bold font-josefin pb-8 pt-0 sm:pt-12 text-center'>Leatest Blog</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4'>
            <div className=''>
              <div>
                <img src={lb1} alt="" className='w-full' />
              </div>
              <div className='flex items-center gap-x-10'>
                <div className='flex items-center gap-x-2 py-4 pl-4'>
                  <FaPenFancy className='text-red-500' />
                  <p className='text-[#151875] text-[14px] font-bold font-josefin'>SaberAli</p>
                </div>
                <div className='flex items-center gap-x-2 py-4'>
                  <LuCalendarDays className='text-[#FFA454]' />
                  <p className='text-[#151875] text-[14px] font-bold font-josefin'>21 August,2020</p>
                </div>
              </div>
              <h2 className='text-[#151875] text-[18px] font-bold font-josefin pl-4 py-2'>Top esssential Trends in 2021</h2>
              <p className='text-[#151875] text-[16px] font-medium font-lato px-4 leading-[30px] py-2'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              {aShow && (
                <p className='text-[#151875] text-[16px] font-medium font-lato px-4 leading-[30px] py-2'> More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              )}
              <button 
                onClick={()=>setAShow(!aShow)}
                className='pl-4 pt-4 text-[#151875] text-[16px] font-medium font-lato cursor-pointer pb-6 underline'> 
                  Read More
              </button>
            </div>
            <div className=''>
              <img src={lb2} alt="" className='w-full' />
              <div className='flex items-center gap-x-10'>
                <div className='flex items-center gap-x-2 py-4 pl-4'>
                  <FaPenFancy className='text-red-500' />
                  <p className='text-[#151875] text-[14px] font-bold font-josefin'>SaberAli</p>
                </div>
                <div className='flex items-center gap-x-2 py-4'>
                  <LuCalendarDays className='text-[#FFA454]' />
                  <p className='text-[#151875] text-[14px] font-bold font-josefin'>21 August,2020</p>
                </div>
              </div>
              <div className=''>
                <h2 className='text-[#151875] text-[18px] font-bold font-josefin pl-4 py-2'>Top esssential Trends in 2021</h2>
              <p className='text-[#151875] text-[16px] font-medium font-lato px-4 leading-[30px] py-2'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              {bShow && (
                <p className='text-[#151875] text-[16px] font-medium font-lato px-4 leading-[30px] py-2'> More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              )}
              <button 
                onClick={()=>setBShow(!bShow)}
                className='pl-4 pt-4 text-[#151875] text-[16px] font-medium font-lato cursor-pointer pb-6 underline'> 
                 Read More
              </button>
              </div>
            </div>
            <div className='mx-auto sm:col-span-2 lg:col-span-1'>
              <img src={lb3} alt="" className='w-full' />
              <div className='flex items-center gap-x-10'>
                <div className='flex items-center gap-x-2 py-4 pl-4'>
                  <FaPenFancy className='text-red-500' />
                  <p className='text-[#151875] text-[14px] font-bold font-josefin'>SaberAli</p>
                </div>
                <div className='flex items-center gap-x-2 py-4'>
                  <LuCalendarDays className='text-[#FFA454]' />
                  <p className='text-[#151875] text-[14px] font-bold font-josefin'>21 August,2020</p>
                </div>
              </div>
              <h2 className='text-[#151875] text-[18px] font-bold font-josefin pl-4 py-2'>Top esssential Trends in 2021</h2>
              <p className='text-[#151875] text-[16px] font-medium font-lato px-4 leading-[30px] py-2'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              {cShow && (
                <p className='text-[#151875] text-[16px] font-medium font-lato px-4 leading-[30px] py-2'> More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              )}
              <button 
                onClick={()=>setCShow(!cShow)}
                className='pl-4 pt-4 text-[#151875] text-[16px] font-medium font-lato cursor-pointer pb-6 underline'> 
                 Read More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LeatestBlog