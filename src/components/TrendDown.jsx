import React from 'react'
import Container from './Container'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import g5 from '../assets/g5.png'

const TrendDown = () => {
  return (
    <section className='lg:pb-8'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4'>
          <div className='bg-[#FFF6FB] pt-6 pl-6 mb-6 lg:mb-0'>
            <h2 className='text-[#151875] text-[26px] md:text-[18px] lg:text-[26px] font-semibold font-josefin pb-2'>23% off in all products</h2>
            <button className='text-[#FB2E86] text-[16px] md:text-[14px] lg:text-[16px] font-semibold font-lato underline cursor-pointer'>Shop Now</button>
            <div className='flex justify-end'>
              <img src={g1} alt="" />
            </div>
          </div>
          <div className='bg-[#EEEFFB] pl-6 pt-8 mb-6 lg:mb-0'>
            <h2 className='text-[#151875] text-[26px] md:text-[18px] lg:text-[26px] font-semibold font-josefin pb-2'>23% off in all products</h2>
            <button className='text-[#FB2E86] text-[16px] md:text-[14px] lg:text-[16px] font-semibold font-lato underline cursor-pointer'>View Collection</button>
            <div className='flex justify-end'>
              <img src={g2} alt=""  />
            </div>
          </div>
          <div className='grid grid-rows-3 md:mb-4 lg:mb-0 sm:col-span-2 mx-auto md:col-span-1'>
            <div className='flex items-center gap-x-4'>
              <div className='bg-[#F5F6F8] py-2 px-8'>
                <img src={g3} alt="" />
              </div>
              <div>
                <h4 className='text-[#151875] text-[18px] md:text-[14px] lg:text-[18px] font-semibold font-josefin pb-2'>Executive Seat chair</h4>
                <h5 className='text-[#151875] text-[16px] md:text-[14px] lg:text-[16px] font-semibold font-josefin line-through'>$32.00</h5>
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='bg-[#F5F6F8] py-2 px-8'>
                <img src={g4} alt="" />
              </div>
              <div>
                <h4 className='text-[#151875] text-[18px] md:text-[14px] lg:text-[18px] font-semibold font-josefin pb-2'>Executive Seat chair</h4>
                <h5 className='text-[#151875] text-[16px] md:text-[14px] lg:text-[16px] font-semibold font-josefin line-through'>$32.00</h5>
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='bg-[#F5F6F8] py-2 px-8'>
                <img src={g5} alt="" />
              </div>
              <div>
                <h4 className='text-[#151875] text-[18px] md:text-[14px] lg:text-[18px] font-semibold font-josefin pb-2'>Executive Seat chair</h4>
                <h5 className='text-[#151875] text-[16px] md:text-[14px] lg:text-[16px] font-semibold font-josefin line-through'>$32.00</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrendDown