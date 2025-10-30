import React from 'react'
import AboutUsUp from '../components/AboutUsUp'
import Container from '../components/Container'
import aboutus from '../assets/aboutus.png'
import { Link } from 'react-router-dom'
import shopex1 from '../assets/shopex1.png'
import shopex2 from '../assets/shopex2.png'
import shopex3 from '../assets/shopex3.png'
import shopex4 from '../assets/shopex4.png'
import groupabout from '../assets/groupabout.png'

const AboutUs = () => {
  return (
    <>
      <AboutUsUp />
      <section className='py-16'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
            <div>
              <img src={aboutus} alt="" className='w-full' />
            </div>
            <div className='pt-8'>
              <h2 className='text-[#151875] text-[25px] md:text-[30px] lg:text-[36px] font-bold font-josefin pb-2'>Know About Our Ecomerce Business, History</h2>
              <p className='text-[#8A8FB9] text-[14px] md:text-[14px] lg:text-[16px] font-semibold font-lato pb-2 max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
              <div className='pt-8'>
                <Link to={"/contact"} target='_top' className='text-[#fff] text-[16px] sm:text-[18px] font-bold font-josefin px-8 py-2 rounded-[5px] bg-[#FB2E86]'>
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <h2 className='text-2xl text-[#151875] font-bold font-josefin text-center pt-18'>Our Features</h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 py-6'>
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
              <h3 className='text-[#151875] text-md sm:text-lg font-lato font-semibold pb-4'>100% Cash Back</h3>
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
          <div className='py-20 text-center'>
            <h2 className='text-3xl text-[#151875] font-bold font-josefin text-center pb-6'>Our Client Say!</h2>
            <div className='flex justify-center'>
              <img src={groupabout} alt="" />
            </div>
            <h2 className='text-xl text-[#151875] font-bold font-josefin text-center pt-4'>Selina Gomez</h2>
            <h4 className='text-xl text-[#8A8FB9] font-bold font-josefin text-center pb-4'>Ceo At Webecy Digital</h4>
            <p className='text-[14px] sm:text-sm text-[#8A8FB9] font-bold font-lato text-center pb-2 max-w-[600px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            <div className='flex items-center gap-x-4 justify-center pt-6'>
              <div className='h-1 w-5 bg-[#FF75B0]'></div>
              <div className='h-1 w-8 bg-[#FF75B0]'></div>
              <div className='h-1 w-5 bg-[#FF75B0]'></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AboutUs