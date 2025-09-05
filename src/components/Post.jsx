import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Post = ({allPage, showFilter}) => {
  return (
    <div className={`grid grid-cols-4`}>
      {showFilter.length > 0 ? showFilter.map((item) => (
        <div className='px-2 pb-4'>
          <div className='bg-[#ffffff20] min-h-[380px] w-full rounded-[5px] shadow-md border-1 border-[#0000001f]'>
            <div className='bg-gray-100 w-full flex justify-center relative group'>
              <Link to={"/products"} className=''>
                <img src={item.image_path} alt="" className='w-full  rounded-t-[5px]' />
              </Link>
              <div className='absolute left-4 top-[48%] opacity-0 group-hover:opacity-100'>
                <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                  <AiOutlineShoppingCart className='text-blue-500 cursor-pointer text-md' />
                </div>
                <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                  <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                </div>
                <div className='bg-white p-2 rounded-full hover:bg-[#ffffffc2]'>
                  <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                </div>
              </div>
            </div>
            <div className=''>
              <Link to={"/products"}>
                <h1 className='text-xl text-[#151875] font-semibold font-lato px-4 pt-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
              </Link>
              <div className='flex gap-x-4 pb-2'>
                <h4 className='pl-4 text-md text-[#151875] font-medium font-lato'>${item.discount_price}</h4>
                <h4 className='pl-4 text-md text-[#FB2E86] font-medium font-lato line-through'>${item.price}</h4>
              </div>
            </div>
          </div>
        </div>
      )) : allPage.map((item) => (
        <div className='px-2 pb-4'>
          <div className='bg-[#ffffff20] min-h-[380px] w-full rounded-[5px] shadow-md border-1 border-[#0000001f]'>
            <div className='bg-gray-100 w-full flex justify-center relative group'>
              <Link to={"/products"} className=''>
                <img src={item.image_path} alt="" className='w-full rounded-t-[5px]' />
              </Link>
              <div className='absolute left-4 top-[48%] opacity-0 group-hover:opacity-100'>
                <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                  <AiOutlineShoppingCart className='text-blue-500 cursor-pointer text-md' />
                </div>
                <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                  <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                </div>
                <div className='bg-white p-2 rounded-full hover:bg-[#ffffffc2]'>
                  <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                </div>
              </div>
            </div>
            <div className=''>
              <Link to={"/products"}>
                <h1 className='text-xl text-[#151875] font-semibold font-lato px-4 pt-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
              </Link>
              <div className='flex gap-x-4 pb-2'>
                <h4 className='pl-4 text-md text-[#151875] font-medium font-lato'>${item.discount_price}</h4>
                <h4 className='pl-4 text-md text-[#FB2E86] font-medium font-lato line-through'>${item.price}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post