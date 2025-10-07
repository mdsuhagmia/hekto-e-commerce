import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from './slice/productSlice'
import { toast } from 'react-toastify'

const ListItem = ({allPage, showFilter, data, setShowFilter}) => {

  let [cateFilterShow, setCateFilterShow] = useState([])
  useEffect(() => {
    let cateAll = showFilter.slice(0, 12)
    setCateFilterShow(cateAll)
  }, [showFilter])

  let [showAll, setShowAll] = useState(true)
  let handleShowAll = () => {
    setCateFilterShow(showFilter)
    setShowAll(false)
  }

  let handleShoLess = () => {
    let cateAll = showFilter.slice(0, 12)
    setCateFilterShow(cateAll)
    setShowAll(true)
  }

  let [low, setLow] = useState({})
  let [high, setHigh] = useState({})
  let handlePrice = (value)=>{
    setLow(value.low)
    setHigh(value.high)
    let priceShow = data.filter((item)=>item.price > value.low && item.price < value.high)
    setShowFilter(priceShow)
  }

  let dispatch = useDispatch()
  let handleCart = (item)=>{
    dispatch(addToCart({...item, qun: 1}))
    toast.success("Added to cart successfully!")
  }

  return (
    <div className='grid grid-cols-5'>
      <div>
        <div className='pr-8 pb-8'>
          <h2 className='text-[20px] text-[#151875] font-bold font-josefin pb-3'>Price Filter</h2>
          <ul className='text-[15px] text-[#989BB5] font-semibold font-lato'>
            <li onClick={()=>setShowFilter("")} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>All Price</li>
            <li onClick={()=>handlePrice({low:0, high:100})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$00 - $100</li>
            <li onClick={()=>handlePrice({low:100, high:200})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$100 - $200</li>
            <li onClick={()=>handlePrice({low:200, high:300})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$200 - $300</li>
            <li onClick={()=>handlePrice({low:300, high:400})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$300 - $400</li>
            <li onClick={()=>handlePrice({low:400, high:500})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$400 - $500</li>
            <li onClick={()=>handlePrice({low:500, high:700})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$500 - $700</li>
            <li onClick={()=>handlePrice({low:700, high:800})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$700 - $800</li>
            <li onClick={()=>handlePrice({low:800, high:900})} className='py-1 cursor-pointer hover:bg-gray-300 hover:text-black pl-4 rounded-[5px]'>$800 - $900</li>
          </ul>
        </div>
      </div>
      <div className='col-span-4'>
        {cateFilterShow.length > 0 ? <div>
          <div>
            {cateFilterShow.map((item) => (
              <div className='px-2 pb-12'>
                <div className='flex gap-x-0 lg:gap-x-8 items-center'>
                  <div className='w-1/3 bg-gray-100 flex justify-center relative group'>
                    <Link to={`/products/allproducts/${item.id}`} className='w-full'>
                      <img src={item.image_path} alt="" className='w-full rounded-[5px] max-h-[260px]' />
                    </Link>
                    <div className='absolute left-4 top-[48%] opacity-0 group-hover:opacity-100'>
                      <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                        <AiOutlineShoppingCart 
                        onClick={()=>handleCart(item)}
                        className='text-blue-500 cursor-pointer text-md' />
                      </div>
                      <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                        <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                      </div>
                      <div className='bg-white p-2 rounded-full hover:bg-[#ffffffc2]'>
                        <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                      </div>
                    </div>
                  </div>
                  <div className='w-2/3'>
                    <Link to={`/products/allproducts/${item.id}`}>
                      <h1 className='text-[12px] sm:text-xl text-[#151875] font-semibold font-lato px-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
                    </Link>
                    <div className='flex gap-x-4 pb-2'>
                      <h4 className='pl-4 text-[12px] sm:text-[15px] text-[#111C85] font-medium font-josefin'>${item.discount_price}</h4>
                      <h4 className='pl-4 text-[12px] sm:text-[15px] text-[#FF2AAA] font-medium font-josefin line-through'>${item.price}</h4>
                    </div>
                    <h4 className='max-w-xl pl-4 text-[#9295AA] text-[8px] sm:text-[14px] md:sm:text-[16px] font-semibold font-lato'>{item.description}</h4>
                    <div className='flex pt-4 gap-x-6 pl-4'>
                      <div className=''>
                        <AiOutlineShoppingCart 
                        onClick={()=>handleCart(item)}
                        className='text-blue-500 cursor-pointer hover:text-blue-900 text-md sm:text-2xl' />
                      </div>
                      <div className=''>
                        <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md sm:text-2xl' />
                      </div>
                      <div className=''>
                        <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md sm:text-2xl' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {showFilter.length > 12 &&
              showAll ? <div className='pt-4'><h2 onClick={handleShowAll} className='text-white bg-blue-500 px-8 py-3 rounded-[5px] text-[18px] font-bold font-josefin inline cursor-pointer hover:bg-blue-400'>Show All</h2></div>
              : showFilter.length > 12 &&
              <div className='pt-4'><h2 onClick={handleShoLess} className='text-white bg-blue-500 px-8 py-3 rounded-[5px] text-[18px] font-bold font-josefin inline cursor-pointer hover:bg-blue-400'>Show Less</h2></div>
            }
          </div>
        </div> : allPage.map((item) => (
          <div className='px-2 pb-12'>
            <div className='flex gap-x-0 lg:gap-x-8 items-center'>
              <div className='w-1/3 bg-gray-100 flex justify-center relative group'>
                <Link to={`/products/allproducts/${item.id}`} className='w-full'>
                  <img src={item.image_path} alt="" className='w-full rounded-[5px] max-h-[260px]' />
                </Link>
                <div className='absolute left-4 top-[48%] opacity-0 group-hover:opacity-100'>
                  <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                    <AiOutlineShoppingCart 
                    onClick={()=>handleCart(item)}
                    className='text-blue-500 cursor-pointer text-md' />
                  </div>
                  <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                    <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                  </div>
                  <div className='bg-white p-2 rounded-full hover:bg-[#ffffffc2]'>
                    <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                  </div>
                </div>
              </div>
              <div className='w-2/3'>
                <Link to={`/products/allproducts/${item.id}`}>
                  <h1 className='text-[12px] sm:text-xl text-[#151875] font-semibold font-lato px-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
                </Link>
                <div className='flex gap-x-4 pb-2'>
                  <h4 className='pl-4 text-[12px] sm:text-[15px] text-[#111C85] font-medium font-josefin'>${item.discount_price}</h4>
                  <h4 className='pl-4 text-[12px] sm:text-[15px] text-[#FF2AAA] font-medium font-josefin line-through'>${item.price}</h4>
                </div>
                <h4 className='max-w-xl pl-4 text-[#9295AA] text-[8px] sm:text-[14px] md:sm:text-[16px] font-semibold font-lato'>{item.description}</h4>
                <div className='flex pt-4 gap-x-6 pl-4'>
                  <div className=''>
                    <AiOutlineShoppingCart 
                    onClick={()=>handleCart(item)}
                    className='text-blue-500 cursor-pointer hover:text-blue-900 text-md sm:text-2xl' />
                  </div>
                  <div className=''>
                    <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md sm:text-2xl' />
                  </div>
                  <div className=''>
                    <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md sm:text-2xl' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListItem