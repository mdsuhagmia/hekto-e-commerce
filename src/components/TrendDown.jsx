import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom'

const TrendDown = () => {

  let data = useContext(apiData)
  let [lampCateShow, setLampCateShow] = useState([])
  let [mirrorCateShow, setMirrorCateShow] = useState([])
  let [tvCateShow, setTvCateShow] = useState([])

  useEffect(() => {
    let filterCate = data.filter((item) => item.category === "lamp")
    let filterLampCateShow = filterCate.slice(11, 12)
    setLampCateShow(filterLampCateShow)

    let filterCate2 = data.filter((item) => item.category === "mirror")
    let filterMirrorCateShow = filterCate2.slice(3, 4)
    setMirrorCateShow(filterMirrorCateShow)

    let filterCate3 = data.filter((item) => item.category === "tv table")
    let filterTvCateShow = filterCate3.slice(3, 4)
    setTvCateShow(filterTvCateShow)
  }, [data])

  return (
    <section className='lg:pb-8'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4'>
          <div className='bg-[#FFF6FB] pt-6 pl-6 mb-4 sm:mb-0'>
            <h2 className='text-[#151875] text-[14px] md:text-[18px] lg:text-[26px] font-semibold font-josefin pb-2'>23% off in all products</h2>
            <Link to={"/products"} target='_top' className='text-[#FB2E86] text-[14px] md:text-[14px] lg:text-[16px] font-semibold font-lato underline cursor-pointer'>Shop Now</Link>
            <div className='flex justify-end'>
              <img src={g1} alt="" />
            </div>
          </div>
          <div className='bg-[#EEEFFB] pl-6 pt-8 mb-6 sm:mb-0'>
            <h2 className='text-[#151875] text-[14px] md:text-[18px] lg:text-[26px] font-semibold font-josefin pb-2'>23% off in all products</h2>
            <Link to={"/products"} target='_top' className='text-[#FB2E86] text-[14px] md:text-[14px] lg:text-[16px] font-semibold font-lato underline cursor-pointer'>View Collection</Link>
            <div className='flex justify-end'>
              <img src={g2} alt=""  />
            </div>
          </div>
          <div className='grid grid-rows-3'>
            {tvCateShow.map((item) => (
              <div className='flex items-center gap-x-4 mb-4'>
                <div className='bg-[#F5F6F8] px-4 h-full flex justify-center items-center'>
                  <Link to={`/products/allproducts/${item.id}`} target='_top'>
                    <img src={item.image_path} alt="" className='h-14 w-20 rounded-sm' />
                  </Link>
                </div>
                <div>
                  <h4 className='text-[#151875] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[16px] font-semibold font-josefin pb-2'>{item.name}</h4>
                  <div className='flex gap-x-4'>
                    <h5 className='text-[#151875] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[14px] font-semibold font-josefin'>${item.discount_price}</h5>
                    <h5 className='text-[#d1237a] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[14px] font-semibold font-josefin line-through'>${item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
            {mirrorCateShow.map((item) => (
              <div className='flex items-center gap-x-4 mb-4'>
                <div className='bg-[#F5F6F8] px-4 h-full flex justify-center items-center'>
                  <Link to={`/products/allproducts/${item.id}`} target='_top'>
                    <img src={item.image_path} alt="" className='h-14 w-20 rounded-sm' />
                  </Link>
                </div>
                <div>
                  <h4 className='text-[#151875] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[16px] font-semibold font-josefin pb-2'>{item.name}</h4>
                  <div className='flex gap-x-4'>
                    <h5 className='text-[#151875] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[14px] font-semibold font-josefin'>${item.discount_price}</h5>
                    <h5 className='text-[#d1237a] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[14px] font-semibold font-josefin line-through'>${item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
            {lampCateShow.map((item) => (
              <div className='flex items-center gap-x-4'>
                <div className='bg-[#F5F6F8] px-4 h-full flex justify-center items-center'>
                  <Link to={`/products/allproducts/${item.id}`} target='_top'>
                    <img src={item.image_path} alt="" className='h-14 w-20 rounded-sm' />
                  </Link>
                </div>
                <div>
                  <h4 className='text-[#151875] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[16px] font-semibold font-josefin pb-2'>{item.name}</h4>
                  <div className='flex gap-x-4'>
                    <h5 className='text-[#151875] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[14px] font-semibold font-josefin'>${item.discount_price}</h5>
                    <h5 className='text-[#d1237a] text-[14px] sm:text-[9px] md:text-[12px] lg:text-[14px] font-semibold font-josefin line-through'>${item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrendDown