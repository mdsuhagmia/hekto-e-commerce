import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ListItem = ({allPage, showFilter}) => {

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

  return (
    <div>
      {cateFilterShow.length > 0 ? <div>
        <div>
          {cateFilterShow.map((item) => (
            <div className='px-2 pb-12'>
              <div className='flex gap-x-8 items-center'>
                <div className='w-1/3 bg-gray-100 flex justify-center relative group'>
                  <Link to={`/products/allproducts/${item.id}`} className='w-full'>
                    <img src={item.image_path} alt="" className='w-full rounded-[5px]' />
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
                <div className='w-2/3'>
                  <Link to={`/products/allproducts/${item.id}`}>
                    <h1 className='text-xl text-[#151875] font-semibold font-lato px-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
                  </Link>
                  <div className='flex gap-x-4 pb-2'>
                    <h4 className='pl-4 text-[15px] text-[#111C85] font-medium font-josefin'>${item.discount_price}</h4>
                    <h4 className='pl-4 text-[15px] text-[#FF2AAA] font-medium font-josefin line-through'>${item.price}</h4>
                  </div>
                  <h4 className='w-xl pl-4 text-[#9295AA] text-[18px] font-semibold font-lato'>{item.description}</h4>
                  <div className='flex pt-4 gap-x-6'>
                    <div className=''>
                      <AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 text-2xl' />
                    </div>
                    <div className=''>
                      <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' />
                    </div>
                    <div className=''>
                      <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' />
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
          <div className='flex gap-x-8 items-center'>
            <div className='w-1/3 bg-gray-100 flex justify-center relative group'>
              <Link to={`/products/allproducts/${item.id}`} className='w-full'>
                <img src={item.image_path} alt="" className='w-full rounded-[5px] h-60' />
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
            <div className='w-2/3'>
              <Link to={`/products/allproducts/${item.id}`}>
                <h1 className='text-xl text-[#151875] font-semibold font-lato px-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
              </Link>
              <div className='flex gap-x-4 pb-2'>
                <h4 className='pl-4 text-[15px] text-[#111C85] font-medium font-josefin'>${item.discount_price}</h4>
                <h4 className='pl-4 text-[15px] text-[#FF2AAA] font-medium font-josefin line-through'>${item.price}</h4>
              </div>
              <h4 className='w-xl pl-4 text-[#9295AA] text-[18px] font-semibold font-lato'>{item.description}</h4>
              <div className='flex pt-4 gap-x-6'>
                <div className=''>
                  <AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 text-2xl' />
                </div>
                <div className=''>
                  <FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' />
                </div>
                <div className=''>
                  <FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListItem