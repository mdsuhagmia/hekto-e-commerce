import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { initFlowbite } from 'flowbite'
import { apiData } from './ContextApi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/productSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const LeatestProducts = () => {
  useEffect(() => {
      initFlowbite();
    }, []);

    let dispatch = useDispatch()
    let handleCartAdd = (item)=>{
      dispatch(addToCart({...item, qun: 1}))
      toast.success("Added to cart successfully!")
    }

    let data = useContext(apiData)
    let [showLampCate, setShowLampCate] = useState([])
    let [showLampCate2, setShowLampCate2] = useState([])
    let [showLampCate3, setShowLampCate3] = useState([])
    let [showGardenCate, setShowGardenCate] = useState([])

    useEffect(()=>{
      let filterShowLamp = data.filter((item) => item.category === "lamp")
      let LampCate = filterShowLamp.slice(20, 26)
      setShowLampCate(LampCate)

      let lampCate2 = filterShowLamp.slice(27, 33)
      setShowLampCate2(lampCate2)

      let lampCate3 = filterShowLamp.slice(6, 12)
      setShowLampCate3(lampCate3)

      let filterShowGarden = data.filter((item) => item.category === "garden")
      let gardenCate = filterShowGarden.slice(6, 12)
      setShowGardenCate(gardenCate)

    },[data])

  return (
    <section className='pb-6'>
      <Container>
        <h2 className='text-center text-[#151875] font-bold font-lato pb-4 text-3xl'>Leatest Products</h2>
        <div className=''>
          <div className="mb-4">
            <ul className="flex justify-center gap-x-1 sm:gap-x-0 flex-wrap -mb-px text-[12px] sm:text-sm md:text-xl font-medium font-josefin text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <li className="me-2" role="presentation">
                <button className="inline-block p-0 sm:p-4 text-[#151875] cursor-pointer hover:text-red-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">New Arrival</button>
              </li>
              <li className="me-2" role="presentation">
                <button className="inline-block p-0 sm:p-4 hover:text-red-500  text-[#151875] cursor-pointer" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Best Seller</button>
              </li>
              <li className="me-2" role="presentation">
                <button className="inline-block p-0 sm:p-4 hover:text-red-500 text-[#151875] cursor-pointer" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Featured</button>
              </li>
              <li role="presentation">
                <button className="inline-block p-0 sm:p-4 hover:text-red-500 text-[#151875] cursor-pointer" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Special Offer</button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div className="hidden p-4 max-w-[1152px]" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {showLampCate.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" className='rounded-t-[5px]' />
                      </Link>
                      <div className='absolute left-4 bottom-8 opacity-0 group-hover:opacity-100'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[16px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <div className='flex items-center gap-x-4'>
                          <p className='text-[12px] text-[#151875] font-josefin font-semibold'>${item.discount_price}</p>
                          <p className='line-through text-[12px] text-[#FB2448] font-josefin font-semibold'>${item.price}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <div className='grid grid-cols-3 gap-4'>
                {showLampCate2.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" className='rounded-t-[5px]' />
                      </Link>
                      <div className='absolute left-4 bottom-8 opacity-0 group-hover:opacity-100'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[16px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <div className='flex items-center gap-x-4'>
                          <p className='text-[12px] text-[#151875] font-josefin font-semibold'>${item.discount_price}</p>
                          <p className='line-through text-[12px] text-[#FB2448] font-josefin font-semibold'>${item.price}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <div className='grid grid-cols-3 gap-4'>
                {showGardenCate.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" className='rounded-t-[5px]' />
                      </Link>
                      <div className='absolute left-4 bottom-8 opacity-0 group-hover:opacity-100'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[16px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <div className='flex items-center gap-x-4'>
                          <p className='text-[12px] text-[#151875] font-josefin font-semibold'>${item.discount_price}</p>
                          <p className='line-through text-[12px] text-[#FB2448] font-josefin font-semibold'>${item.price}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <div className='grid grid-cols-3 gap-4'>
                {showLampCate3.map((item) => (
                  <div className='shadow-md'>
                    <div className='relative group'>
                      <Link to={`/products/allproducts/${item.id}`} target='_top'>
                        <img src={item.image_path} alt="" className='rounded-t-[5px]' />
                      </Link>
                      <div className='absolute left-4 bottom-8 opacity-0 group-hover:opacity-100'>
                        <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item)} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-4'><FaRegHeart className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        <div className='pb-2'><FaSearchPlus className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                      </div>
                    </div>
                      <div className='bg-[#F7F7F7] px-2 flex justify-between items-center py-4'>
                        <h4 className='text-[16px] text-[#151875] font-josefin font-semibold'>{item.name}</h4>
                        <div className='flex items-center gap-x-4'>
                          <p className='text-[12px] text-[#151875] font-josefin font-semibold'>${item.discount_price}</p>
                          <p className='line-through text-[12px] text-[#FB2448] font-josefin font-semibold'>${item.price}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LeatestProducts