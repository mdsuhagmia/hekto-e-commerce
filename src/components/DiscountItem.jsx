import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { initFlowbite } from 'flowbite'
import { useDispatch } from 'react-redux'
import { addToCart, addToWishlist } from './slice/productSlice'
import { toast } from 'react-toastify'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { RiCloseLargeFill } from 'react-icons/ri'

const DiscountItem = () => {
  useEffect(()=>{
    initFlowbite()
  },[])

  let dispatch = useDispatch()
  let handleCartAdd = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }))
    toast.success("Added to cart successfully!")
  }

  let data = useContext(apiData)
  let [showGardenCate, setShowGardenCate] = useState([])
  let [showTvTableCate, setShowTvTableCate] = useState([])
  let [showMirrorCate, setShowMirrorCate] = useState([])
  let [showLampCate, setShowLampCate] = useState([])

  useEffect(() => {
    let filterShowGarden = data.filter((item) => item.category === "garden")
    let gardenCate = filterShowGarden.slice(16, 20)
    setShowGardenCate(gardenCate)

    let filterShowTvTable = data.filter((item) => item.category === "tv table")
    let gardenCate2 = filterShowTvTable.slice(0, 4)
    setShowTvTableCate(gardenCate2)

    let filterShowMirror = data.filter((item) => item.category === "mirror")
    let mirrorCate = filterShowMirror.slice(0, 4)
    setShowMirrorCate(mirrorCate)

    let filterShowLamp = data.filter((item) => item.category === "lamp")
    let lampCate = filterShowLamp.slice(32, 36)
    setShowLampCate(lampCate)

  }, [data])

  let discountPercentage = (price, discountPrice) => {
    if (!price || !discountPrice || price <= 0) return "0% Off"
    let discount = price - discountPrice
    let percentage = (discount / price) * 100
    return `${Math.round(percentage)}% Off`
  };

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
    <section className='pb-6'>
      <Container>
        <div>
          <h2 className='text-[#151875] text-[35px] font-bold font-josefin pb-4 pt-16 text-center'>Discount Item</h2>
          <div>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap justify-center -mb-px text-xs sm:text-xl font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-[#FB2E86] dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg cursor-pointer" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Garden</button>
                </li>
                <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Tv Table</button>
                </li>
                <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Mirror</button>
                </li>
                <li role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Lamp</button>
                </li>
              </ul>
            </div>
            <div id="default-styled-tab-content">
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {showGardenCate.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group overflow-hidden'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" />
                      </Link>
                      <div>
                        <Link to={`/products/allproducts/${item.id}`} target='_top'>
                          <div className='shadow-md'>
                            <div className='absolute top-2 left-2 bg-pink-500 text-white text-[8px] sm:text-sm px-2 py-1 rounded hover:text-gray-200'>
                              {discountPercentage(item.price, item.discount_price)}
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className='absolute -left-8 group-hover:left-4 bottom-8 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart onClick={()=>handleWish(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus onClick={()=>handleImageView(item)}  className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[8px] sm:text-[14px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <p className='text-[8px] sm:text-[12px] text-[#151875] font-josefin font-semibold'>${item.price}</p>
                      </div>
                  </div>
                ))}
              </div>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {showTvTableCate.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group overflow-hidden'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" />
                      </Link>
                      <div>
                        <Link to={`/products/allproducts/${item.id}`} target='_top'>
                          <div className='shadow-md'>
                            <div className='absolute top-2 left-2 bg-pink-500 text-white text-[8px] sm:text-sm px-2 py-1 rounded hover:text-gray-200'>
                              {discountPercentage(item.price, item.discount_price)}
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className='absolute -left-8 group-hover:left-4 bottom-8 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart onClick={()=>handleWish(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus onClick={()=>handleImageView(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[8px] sm:text-[14px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <p className='text-[8px] sm:text-[14px] text-[#151875] font-josefin font-semibold'>${item.price}</p>
                      </div>
                  </div>
                ))}
              </div>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {showMirrorCate.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group overflow-hidden'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" />
                      </Link>
                      <div>
                        <Link to={`/products/allproducts/${item.id}`} target='_top'>
                          <div className='shadow-md'>
                            <div className='absolute top-2 left-2 bg-pink-500 text-white text-[8px] sm:text-sm px-2 py-1 rounded hover:text-gray-200'>
                              {discountPercentage(item.price, item.discount_price)}
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className='absolute -left-8 group-hover:left-4 bottom-8 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart onClick={()=>handleWish(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus onClick={()=>handleImageView(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[8px] sm:text-[14px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <p className='text-[8px] sm:text-[14px] text-[#151875] font-josefin font-semibold'>${item.price}</p>
                      </div>
                  </div>
                ))}
              </div>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {showLampCate.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group overflow-hidden'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" />
                      </Link>
                      <div>
                        <Link to={`/products/allproducts/${item.id}`} target='_top'>
                          <div className='shadow-md'>
                            <div className='absolute top-2 left-2 bg-pink-500 text-white text-[8px] sm:text-sm px-2 py-1 rounded hover:text-gray-200'>
                              {discountPercentage(item.price, item.discount_price)}
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className='absolute -left-8 group-hover:left-4 bottom-8 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart onClick={()=>handleWish(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus onClick={()=>handleImageView(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[8px] sm:text-[14px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <p className='text-[8px] sm:text-[14px] text-[#151875] font-josefin font-semibold'>${item.price}</p>
                      </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
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
      </Container>
    </section>
  )
}

export default DiscountItem