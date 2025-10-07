import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { apiData } from './ContextApi'
import { useDispatch } from 'react-redux'
import { addToCart } from './slice/productSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Unique = () => {
  let data = useContext(apiData)
  let [filterShow, setFilterShow] = useState([])
  useEffect(()=>{
    let filterPro = data.filter((item)=>item.category === "matress")
    let filterS = filterPro.slice(2, 3)
    setFilterShow(filterS)
  },[data])

  let dispatch = useDispatch()
  let handleCart = (item)=>{
    dispatch(addToCart({...item, qun: 1}))
    toast.success("Added to cart successfully!")
  }
  return (
    <section className='bg-[#F1F0FF] py-8'>
      <Container>
        {filterShow.map((item) => (
          <div className='grid grid-cols-3 sm:grid-cols-2 items-center'>
            <div className='px-0 sm:px-8 py-0 sm:py-8'>
              <Link to={`/products/allproducts/${item.id}`} target='_top'>
                <img src={item.image_path} alt="" className='w-full rounded-full' />
              </Link>
            </div>
            <div className='col-span-2 sm:col-span-1 pl-2 sm:pl-0'>
              <h2 className='text-[#151875] text-[12px] sm:text-[20px] md:text-[25px] lg:text-[35px] font-bold font-josefin pb-2 sm:pb-5'>{item.name}</h2>
                <p className='text-[#ACABC3] text-[6px] sm:text-[8px] md:text-[12px] lg:text-[16px] font-lato font-medium pb-2 sm:pb-4'>{item.description}</p>
              <div className='flex gap-x-2 sm:gap-x-6'>
                <div>
                  <button onClick={() => handleCart(item)} className='bg-[#FB2E86] text-[8px] md:text-[17px] font-josefin font-semibold px-[10px] sm:px-[24px] py-[6px] sm:py-[14px] text-white rounded-[5px] cursor-pointer hover:bg-[#fb2e87cc]'>
                    Add To Cart
                  </button>
                </div>
                <div className='hidden sm:block'>
                  <h4 className='text-[#151875] text-[14px] font-josefin font-semibold pb-2 capitalize'>{item.wood_type} Italian Mettress </h4>
                  <h5 className='text-[#151875] text-[14px] font-josefin font-semibold'>${item.price}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default Unique