import React from 'react'
import Container from './Container'
import sofa from '../assets/sofa.png'
import { Link } from 'react-router-dom'

const DiscountItem = () => {
  return (
    <section className='pb-6'>
      <Container>
        <div>
          <h2 className='text-[#151875] text-[35px] font-bold font-josefin pb-4 pt-16 text-center'>Discount Item</h2>
          <ul className='flex items-center gap-x-4 justify-center'>
            <li className='text-[#FB4997] text-[14px] md:text-[18px] font-semibold font-lato cursor-pointer hover:underline'>Wood Chair</li>
            <li className='text-[#FB4997] text-[14px] md:text-[18px] font-semibold font-lato cursor-pointer hover:underline'>Plastic Chair</li>
            <li className='text-[#FB4997] text-[14px] md:text-[18px] font-semibold font-lato cursor-pointer hover:underline'>Sofa Colletion</li>
          </ul>
          <div>
            <Link to={"/products"}>
              <img src={sofa} alt="" className='w-full' />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DiscountItem