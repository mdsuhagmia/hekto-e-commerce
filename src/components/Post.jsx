import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { addToCart, addToWishlist } from './slice/productSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { RiCloseLargeFill } from 'react-icons/ri'

const Post = ({allPage, showFilter}) => {

  let [cateFilterShow, setCateFilterShow] = useState([])
  useEffect(()=>{
    let cateAll = showFilter.slice(0, 12)
    setCateFilterShow(cateAll)
  }, [showFilter])

  let [showAll, setShowAll] = useState(true)
  let handleShowAll = ()=>{
    setCateFilterShow(showFilter)
    setShowAll(false)
  }

  let handleShoLess = ()=>{
    let cateAll = showFilter.slice(0, 12)
    setCateFilterShow(cateAll)
    setShowAll(true)
  }

  let dispatch = useDispatch()

  let handleCart = (item)=>{
    dispatch(addToCart({...item, qun: 1}))
    toast.success("Added to cart successfully!")
  }

  let handleWish = (item)=>{
    dispatch(addToWishlist(item))
    toast.success("Added to Wishlist successfully!")
  }

  let [imageView, setImageView] = useState(false)
    let handleImageView = (item)=>{
      setImageView(item.image_path)
    }
  
    let ImageRef = useRef()
    useEffect(()=>{
      let handleClickOutside = (e)=>{
        if(imageView && !ImageRef.current.contains(e.target)){
          setImageView(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return()=>{
        document.removeEventListener("mousedown", handleClickOutside)
      }
    },[imageView])

  return (
    <div className=''>
      {cateFilterShow.length > 0 ? <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {cateFilterShow.map((item) => (
          <div className='px-2 pb-4'>
            <div className='bg-[#ffffff20] min-h-[220px] sm:min-h-[380px] w-full rounded-[5px] shadow-md border-1 border-[#0000001f]'>
              <div className='bg-gray-100 w-full flex justify-center relative group'>
                <Link to={`/products/allproducts/${item.id}`} className=''>
                  <img src={item.image_path} alt="" className='w-full  rounded-t-[5px]' />
                </Link>
                <div className='absolute left-4 top-[48%] opacity-0 group-hover:opacity-100'>
                  <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                    <AiOutlineShoppingCart onClick={()=>handleCart(item)} className='text-blue-500 cursor-pointer text-md' />
                  </div>
                  <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                    <FaRegHeart onClick={()=>handleWish(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                  </div>
                  <div className='bg-white p-2 rounded-full hover:bg-[#ffffffc2]'>
                    <FaSearchPlus onClick={()=>handleImageView(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                  </div>
                </div>
              </div>
              <div className=''>
                <Link to={`/products/allproducts/${item.id}`}>
                  <h1 className='text-[10px] sm:text-xl lg:text-lg text-[#151875] font-semibold font-lato px-2 sm:px-4 pt-4 pb-2 hover:underline cursor-pointer inline-block'>{item.name}</h1>
                </Link>
                <div className='flex gap-x-2 items-center sm:gap-x-4 pb-2'>
                  <h4 className='pl-2 sm:pl-4 text-[10px] sm:text-md lg:text-xl text-[#151875] font-medium font-lato'>${item.discount_price}</h4>
                  <h4 className='pl-2 sm:pl-4 text-[10px] sm:text-md lg:text-xl text-[#FB2E86] font-medium font-lato line-through'>${item.price}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          {showFilter.length > 12 &&
           showAll ? <div className='pt-4'><h2 onClick={handleShowAll} className='text-white bg-blue-500 px-8 py-3 rounded-[5px] text-[18px] font-bold font-josefin inline cursor-pointer hover:bg-blue-400'>Show All</h2></div>
            : showFilter.length > 12 &&
           <div className='pt-4'><h2 onClick={handleShoLess} className='text-white bg-blue-500 px-8 py-3 rounded-[5px] text-[18px] font-bold font-josefin inline cursor-pointer hover:bg-blue-400'>Show Less</h2></div>
          }
        </div>
      </div>
        :
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {allPage.map((item) => (
            <div className='px-2 pb-4'>
              <div className='bg-[#ffffff20] min-h-[220px] sm:min-h-[380px] w-full rounded-[5px] shadow-md border-1 border-[#0000001f]'>
                <div className='bg-gray-100 w-full flex justify-center relative group'>
                  <Link to={`/products/allproducts/${item.id}`}>
                    <img src={item.image_path} alt="" className='w-full rounded-t-[5px]' />
                  </Link>
                  <div className='absolute left-4 top-[48%] opacity-0 group-hover:opacity-100'>
                    <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                      <AiOutlineShoppingCart className='text-blue-500 cursor-pointer text-md' onClick={()=>handleCart(item)} />
                    </div>
                    <div className='bg-white mb-2 p-2 rounded-full hover:bg-[#ffffffc2]'>
                      <FaRegHeart onClick={()=>handleWish(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                    </div>
                    <div className='bg-white p-2 rounded-full hover:bg-[#ffffffc2]'>
                      <FaSearchPlus onClick={()=>handleImageView(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-md' />
                    </div>
                    
                  </div>
                </div>
                <div className=''>
                  <Link to={`/products/allproducts/${item.id}`}>
                    <h1 className='text-[10px] sm:text-xl lg:text-lg text-[#151875] font-semibold font-lato px-2 sm:px-4 pt-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
                  </Link>
                  <div className='flex gap-x-2 items-center sm:gap-x-4 pb-2'>
                    <h4 className='pl-2 sm:pl-4 text-[10px] sm:text-md lg:text-xl text-[#151875] font-medium font-lato'>${item.discount_price}</h4>
                    <h4 className='pl-2 sm:pl-4 text-[10px] sm:text-md lg:text-xl text-[#FB2E86] font-medium font-lato line-through'>${item.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        }
        {imageView && (
          <div ref={ImageRef} className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999]'>
            <div className='relative'>
              <img src={imageView} className='w-full' alt="" />
              <div className='absolute top-10 right-6'>
                <RiCloseLargeFill
                  onClick={() => setImageView(false)}
                  className='text-5xl text-red-500 bg-white p-2 rounded-full cursor-pointer hover:bg-gray-200 font-extrabold'
                />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Post