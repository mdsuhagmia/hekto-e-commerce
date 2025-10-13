import React from 'react'
import Container from './Container'
import jj from '../assets/jj.png'

const FaqInfo = () => {
  return (
    <section className='py-16'>
      <Container>
        <div className='grid grid-cols-2 gap-x-8'>
          <div>
            <h2 className='text-[30px] md:text-[36px] text-[#1D3178] font-bold font-josefin pb-4 lg:pb-6'>Generel Information</h2>
            <div className='pb-8'>
              <h2 className='text-[14px] md:text-[16px] text-[#1D3178] font-bold font-josefin pb-2'>Eu dictumst cum at sed euismood condimentum?</h2>
              <p className='text-[12px] md:text-[14px] text-[#A1ABCC] font-bold font-josefin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
            <div className='pb-8'>
              <h2 className='text-[14px] md:text-[16px] text-[#1D3178] font-bold font-josefin pb-2'>Magna bibendum est fermentum eros.</h2>
              <p className='text-[12px] md:text-[14px] text-[#A1ABCC] font-bold font-josefin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
            <div className='pb-8'>
              <h2 className='text-[14px] md:text-[16px] text-[#1D3178] font-bold font-josefin pb-2'>Odio muskana hak eris conseekin sceleton?</h2>
              <p className='text-[12px] md:text-[14px] text-[#A1ABCC] font-bold font-josefin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
            <div className='pb-8'>
              <h2 className='text-[14px] md:text-[16px] text-[#1D3178] font-bold font-josefin pb-2'>Elit id blandit sabara boi velit gua mara?</h2>
              <p className='text-[12px] md:text-[14px] text-[#A1ABCC] font-bold font-josefin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
          </div>
          <div className='bg-[#F8F8FD] px-8 py-8'>
            <form action="">
              <h2 className='text-[14px] md:text-[36px] text-[#1D3178] font-bold font-josefin pb-8'>Ask a Question</h2>
              <div className='pb-[23px]'>
                <input type="text"
                  placeholder='Your Name*'
                  className='px-4 py-2 border-2 border-[#CDCEDC] rounded-sm outline-0 w-full' />
              </div>
              <div className='pb-[23px]'>
                <input type="email"
                  placeholder='Subject*'
                  className='px-4 py-2 border-2 border-[#CDCEDC] rounded-sm outline-0 w-full' />
              </div>
              <div className='pb-[23px]'>
                <textarea name="" id=""
                  className='w-full h-[197px] px-4 py-2 border-2 border-[#CDCEDC] rounded-sm outline-0'
                  placeholder='Type Your Message'>
                </textarea>
              </div>
              <div className='pb-[23px] flex gap-4'>
                <button type='submit'
                  className='text-[18px] md:text-[16px] font-bold font-dms px-20 py-2 bg-[#FB2E86] text-white rounded-md cursor-pointer hover:bg-[#fb2e87b2]'>
                    Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='pt-16'>
          <img src={jj} alt="" className='w-full bg-cover' />
        </div>
      </Container>
    </section>
  )
}

export default FaqInfo