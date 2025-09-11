import React from 'react'
import Container from './Container'
import lea1  from '../assets/lea1.png'
import lea2  from '../assets/lea2.png'
import lea3  from '../assets/lea3.png'
import lea4  from '../assets/lea4.png'
import lea5  from '../assets/lea5.png'
import lea6  from '../assets/lea6.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import sale from '../assets/sale.png'

const LeatestProducts = () => {
  return (
    <section className='pb-6'>
      <Container>
        <h2 className='text-center text-[#151875] font-bold font-lato pb-4 text-3xl'>Leatest Products</h2>
        <div className=''>
          <ul className='flex gap-x-4 items-center justify-center pb-12'>
            <li className='text-[#151875] text-[12px] sm:text-[16px] md:text-[18px] font-lato font-medium cursor-pointer'>New Arrival</li>
            <li className='text-[#151875] text-[12px] sm:text-[16px] md:text-[18px] font-lato font-medium cursor-pointer'>Best Seller</li>
            <li className='text-[#151875] text-[12px] sm:text-[16px] md:text-[18px] font-lato font-medium cursor-pointer'>Featured</li>
            <li className='text-[#151875] text-[12px] sm:text-[16px] md:text-[18px] font-lato font-medium cursor-pointer'>Special Offer</li>
          </ul>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 pb-4'>
            <div className='bg-white rounded-[5px] shadow-lg mb-12'>
              <div className='bg-[#F7F7F7] py-10 flex justify-center relative group'>
                <img src={lea1} alt="" />
                <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100'>
                  <div className='pb-12'>
                    <img src={sale} alt="" />
                  </div>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                </div>
              </div>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <p className='text-[#151875] text-[16px] font-josefin font-medium'>Comfort Handy Craft</p>
                </div>
                <div className='flex items-center gap-x-3 py-4'>
                  <div>
                    <p className='text-[#151875] text-[14px] font-josefin font-medium'>$42.00</p>
                  </div>
                  <div>
                    <p className='text-[#FB2448] text-[14px] font-josefin font-medium'>$65.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-lg mb-12'>
              <div className='bg-[#F7F7F7] py-10 flex justify-center relative group'>
                <img src={lea2} alt="" />
                <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100'>
                  <div className='pb-12'>
                    <img src={sale} alt="" />
                  </div>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                </div>
              </div>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <p className='text-[#151875] text-[16px] font-josefin font-medium'>Comfort Handy Craft</p>
                </div>
                <div className='flex items-center gap-x-3 py-4'>
                  <div>
                    <p className='text-[#151875] text-[14px] font-josefin font-medium'>$42.00</p>
                  </div>
                  <div>
                    <p className='text-[#FB2448] text-[14px] font-josefin font-medium'>$65.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-lg mb-12'>
              <div className='bg-[#F7F7F7] py-10 flex justify-center relative group'>
                <img src={lea3} alt="" />
                <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100'>
                  <div className='pb-12'>
                    <img src={sale} alt="" />
                  </div>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                </div>
              </div>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <p className='text-[#151875] text-[16px] font-josefin font-medium'>Comfort Handy Craft</p>
                </div>
                <div className='flex items-center gap-x-3 py-4'>
                  <div>
                    <p className='text-[#151875] text-[14px] font-josefin font-medium'>$42.00</p>
                  </div>
                  <div>
                    <p className='text-[#FB2448] text-[14px] font-josefin font-medium'>$65.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-lg mb-12'>
              <div className='bg-[#F7F7F7] py-10 flex justify-center relative group'>
                <img src={lea4} alt="" />
                <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100'>
                  <div className='pb-12'>
                    <img src={sale} alt="" />
                  </div>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                </div>
              </div>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <p className='text-[#151875] text-[16px] font-josefin font-medium'>Comfort Handy Craft</p>
                </div>
                <div className='flex items-center gap-x-3 py-4'>
                  <div>
                    <p className='text-[#151875] text-[14px] font-josefin font-medium'>$42.00</p>
                  </div>
                  <div>
                    <p className='text-[#FB2448] text-[14px] font-josefin font-medium'>$65.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-lg mb-12'>
              <div className='bg-[#F7F7F7] py-10 flex justify-center relative group'>
                <img src={lea5} alt="" />
                <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100'>
                  <div className='pb-12'>
                    <img src={sale} alt="" />
                  </div>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                </div>
              </div>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <p className='text-[#151875] text-[16px] font-josefin font-medium'>Comfort Handy Craft</p>
                </div>
                <div className='flex items-center gap-x-3 py-4'>
                  <div>
                    <p className='text-[#151875] text-[14px] font-josefin font-medium'>$42.00</p>
                  </div>
                  <div>
                    <p className='text-[#FB2448] text-[14px] font-josefin font-medium'>$65.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-lg mb-12'>
              <div className='bg-[#F7F7F7] py-10 flex justify-center relative group'>
                <img src={lea6} alt="" />
                <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100'>
                  <div className='pb-12'>
                    <img src={sale} alt="" />
                  </div>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 mb-4' /></div>
                </div>
              </div>
              <div className='flex items-center justify-between px-4'>
                <div>
                  <p className='text-[#151875] text-[16px] font-josefin font-medium'>Comfort Handy Craft</p>
                </div>
                <div className='flex items-center gap-x-3 py-4'>
                  <div>
                    <p className='text-[#151875] text-[14px] font-josefin font-medium'>$42.00</p>
                  </div>
                  <div>
                    <p className='text-[#FB2448] text-[14px] font-josefin font-medium'>$65.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LeatestProducts