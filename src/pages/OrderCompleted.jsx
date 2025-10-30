import React from 'react'
import OrderCompletedUp from '../components/OrderCompletedUp'
import Container from '../components/Container'
import checklist from '../assets/checklist.png'
import checklist2 from '../assets/clock.png'
import { Link } from 'react-router-dom'
import { IoMdCheckmark } from 'react-icons/io'
import jj from '../assets/jj.png'

const OrderCompleted = () => {
  return (
    <>
      <OrderCompletedUp/>
      <section className='py-16'>
        <Container>
          <div className='relative'>
            <div className='absolute top-0 left-0'>
              <img src={checklist2} alt="" className='w-10 sm:w-full'  />
            </div>
            <div className='flex justify-center'>
              <div className='text-center'>
                <div className=''>
                  <IoMdCheckmark className='text-[#FF1788] text-6xl sm:text-8xl bg-[#F6F7FA] rounded-full p-2 text-center inline-block mb-2' />
                </div>
                <h2 className='text-[#101750] text-[20px] sm:text-[36px] font-bold font-josefin pb-2'>Your Order Is Completed! </h2>
                <p className='text-[#8D92A7] text-[12px] sm:text-[16px] font-normal font-lato leading-[20px] sm:leading-[30px] max-w-[600px] pb-6'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
                </p>
                <div className='pb-12'>
                  <Link to={"/products"} className='text-[16px] font-semibold font-josefin bg-[#FB2E86] rounded-[5px] px-6 py-2 sm:px-8 sm:py-4 text-white'>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            <div className='absolute right-0 bottom-0'>
              <img src={checklist} alt="" className='w-10 sm:w-full' />
            </div>
          </div>
          <div className='pt-12'>
            <img src={jj} alt="" className='w-full' />
          </div>
        </Container>
      </section>
    </>
  )
}

export default OrderCompleted