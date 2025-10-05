import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { apiData } from './ContextApi'
import { useDispatch } from 'react-redux'
import { addToCart } from './slice/productSlice'
import { toast } from 'react-toastify'

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
          <div className='grid grid-cols-2 items-center'>
            <div className='px-8 py-8'>
              <img src={item.image_path} alt="" className='w-full rounded-full' />
            </div>
            <div className=''>
              <h2 className='text-[#151875] text-[35px] font-bold font-josefin pb-5'>{item.name}</h2>
                <p className='text-[#ACABC3] text-[16px] font-lato font-medium pb-4'>{item.description}</p>
              <div className='flex gap-x-6'>
                <div>
                  <button onClick={() => handleCart(item)} className='bg-[#FB2E86] text-[17px] font-josefin font-semibold px-[24px] py-[14px] text-white rounded-[5px] cursor-pointer hover:bg-[#fb2e87cc]'>
                    Add To Cart
                  </button>
                </div>
                <div>
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