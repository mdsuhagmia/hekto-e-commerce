import React from 'react'
import Container from './Container'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const FooterDown = () => {
  return (
    <section className='bg-[#E7E4F8] py-3'>
      <Container>
        <div className='flex justify-between items-center px-0 lg:px-20'>
          <div>
            <p className='text-[14px] md:text-[16px] text-[#9DA0AE] font-lato font-semibold'>©Webecy - All Rights Reserved</p>
          </div>
          <div className='flex items-center gap-x-3 text-white'>
            <div className='bg-[#151875] p-1 rounded-full cursor-pointer'>
              <FaFacebookF className='text-[12px] md:text-[16px]' />
            </div>
            <div className='bg-[#151875] p-1 rounded-full cursor-pointer'>
              <FaInstagram className='text-[12px] md:text-[16px]' />
            </div>
            <div className='bg-[#151875] p-1 rounded-full cursor-pointer'>
              <FaTwitter className='text-[12px] md:text-[16px]' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FooterDown