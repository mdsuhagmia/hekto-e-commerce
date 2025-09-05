import React from 'react'
import Container from './Container'
import unique from '../assets/unique.png'

const Unique = () => {
  return (
    <section className='bg-[#F1F0FF] py-8 mb-3'>
      <Container>
        <div className='grid grid-cols-2'>
          <div>
            <img src={unique} alt="" className='w-full' />
          </div>
          <div>
            <h2 className='text-[#151875] text-[35px] font-bold font-josefin pb-5 pt-16'>Unique Features Of leatest & <br />  Trending Poducts</h2>
            <ul>
              <div className='flex items-center gap-x-4 pb-4'>
                <div className='h-4 w-4 rounded-full bg-amber-600'></div>
                <li className='text-[#ACABC3] text-[16px] font-lato font-medium'>All frames constructed with hardwood solids and laminates</li>
              </div>
              <div className='flex gap-x-4 pb-2'>
                <div className='h-4 w-4 rounded-full bg-indigo-500'></div>
                <li className='text-[#ACABC3] text-[16px] font-lato font-medium'>Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails</li>
              </div>
              <div className='flex items-center gap-x-4 pb-8'>
                <div className='h-4 w-4 rounded-full bg-[#2fff0a]'></div>
                <li className='text-[#ACABC3] text-[16px] font-lato font-medium'>All frames constructed with hardwood solids and laminates</li>
              </div>
            </ul>
            <div className='flex gap-x-6'>
              <div>
                <button className='bg-[#FB2E86] text-[17px] font-josefin font-semibold px-[24px] py-[14px] text-white rounded-[5px] cursor-pointer hover:bg-[#fb2e87cc]'>
                  Add To Cart
                </button>
              </div>
              <div>
                <h4 className='text-[#151875] text-[14px] font-josefin font-semibold pb-1'>B&B Italian Sofa </h4>
                <h5 className='text-[#151875] text-[14px] font-josefin font-semibold'>$32.00</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Unique