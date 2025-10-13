import React from 'react'
import Container from './Container'
import shopex1 from '../assets/shopex1.png'
import shopex2 from '../assets/shopex2.png'
import shopex3 from '../assets/shopex3.png'
import shopex4 from '../assets/shopex4.png'

const Shopex = () => {
  return (
    <section>
      <Container>
        <h2 className='text-2xl text-[#151875] font-bold font-josefin text-center pb-6'>What Shopex Offer!</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 pb-12'>
          <div className='border-2 border-[#00000012] rounded-[5px] text-center shadow-md mb-4 lg:mb-0 hover:border-b-[#FF9100]'>
            <div className='flex justify-center'>
              <img src={shopex1} alt="" className='pt-6 sm:pt-12 pb-4' />
            </div>
            <h3 className='text-[#151875] text-lg font-lato font-semibold pb-4'>Free Delivery</h3>
            <p className='text-[#1a0b5b75] text-[8px] sm:text-[12px] md:text-[16px] font-lato font-semibold pb-8 px-4 max-w-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className='border-2 border-[#00000012] rounded-[5px] text-center shadow-md mb-4 lg:mb-0 hover:border-b-[#FF9100]'>
            <div className='flex justify-center'>
              <img src={shopex2} alt="" className='pt-6 sm:pt-12 pb-4' />
            </div>
            <h3 className='text-[#151875] text-lg font-lato font-semibold pb-4'>100% Cash Back</h3>
            <p className='text-[#1a0b5b75] text-[8px] sm:text-[12px] md:text-[16px] font-lato font-semibold pb-8 px-4 max-w-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className='border-2 border-[#00000012] rounded-[5px] text-center shadow-md hover:border-b-[#FF9100]'>
            <div className='flex justify-center'>
              <img src={shopex3} alt="" className='pt-6 sm:pt-12 pb-4' />
            </div>
            <h3 className='text-[#151875] text-lg font-lato font-semibold pb-4'>Quality Product</h3>
            <p className='text-[#1a0b5b75] text-[8px] sm:text-[12px] md:text-[16px] font-lato font-semibold pb-8 px-4 max-w-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className='border-2 border-[#00000012] rounded-[5px] text-center shadow-md hover:border-b-[#FF9100]'>
            <div className='flex justify-center'>
              <img src={shopex4} alt="" className='pt-6 sm:pt-12 pb-4' />
            </div>
            <h3 className='text-[#151875] text-lg font-lato font-semibold pb-4'>24/7 Support</h3>
            <p className='text-[#1a0b5b75] text-[8px] sm:text-[12px] md:text-[16px] font-lato font-semibold pb-8 px-4 max-w-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Shopex