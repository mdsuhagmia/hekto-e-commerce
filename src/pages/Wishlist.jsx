import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import { addToCart, addToWishlist, allWishlistRemove, removeWishList } from '../components/slice/productSlice'
import { MdDelete } from 'react-icons/md'
import { ImHeartBroken } from 'react-icons/im'
import { apiData } from '../components/ContextApi'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Wishlist = () => {
  let data = useSelector((state)=>state.product.wishlist)
  let dispatch = useDispatch()

  let products = useContext(apiData)
    const [suggested, setSuggested] = useState([])
   
    useEffect(() => {
        const productRandom = [...products].sort(() => 0.5 - Math.random())
        const selected = productRandom.slice(0, 16)
        setSuggested(selected)
    }, [products])

    let handleAddWish = (item)=>{
      dispatch(addToWishlist(item))
      toast.success("Added to wishlist successfully!")
    }

    let navigate = useNavigate()
    let handleCartAdd = (item)=>{
      dispatch(addToCart(item))
      toast.success("Added to cart successfully!")
      navigate("/cart")
    }


  return (
    <section className='py-16'>
      <Container>
        {data.length > 0 ? <div className='relative'>
          {data.map((item, index)=>(
            <div className='grid grid-cols-10 gap-x-6 mb-6 items-center bg-gray-300 rounded relative'>
              <div className='col-span-2'>
                <img src={item.image_path} alt="" className='w-full rounded-l' />
              </div>
              <div className='col-span-5'>
                <h2 className='font-bold font-josefin text-[#000] pb-1 sm:pb-2 text-[8px] sm:text-[16px] lg:text-[30px]'>{item.name}</h2>
                <p className='font-medium font-josefin text-[#000000a6] pb-1 sm:pb-2 text-[8px] sm:text-[14px]'>Finish: {item.finish}</p>
                <p className='font-medium font-josefin text-[#000000a6] text-[8px] sm:text-[14px]'>Wood Type: {item.wood_type}</p>
              </div>
              <div>
                <MdDelete onClick={()=>dispatch(removeWishList(index))} className='text-3xl cursor-pointer hover:text-red-500 text-violet-700' />
              </div>
              <div className='col-span-2 pr-6'>
                <button onClick={()=>dispatch(addToCart(item), dispatch(removeWishList(index)))} className='text-[16px] font-bold font-josefin text-white bg-blue-500 w-full py-2 rounded cursor-pointer hover:bg-blue-400'>
                  Move To Cart
                </button>
              </div>
            </div>
          ))}
          <div className='absolute -top-13 right-0'>
            <button onClick={() => dispatch(allWishlistRemove(data))} className='text-red-500 bg-gray-100 px-6 py-2 rounded font-bold font-josefin text-[14px] hover:bg-gray-200 cursor-pointer'>
              All Remove <MdDelete className='inline-block text-[18px]' />
            </button>
          </div>
        </div> : <div>
          <div>
              <div className='text-center pb-16'>
                <h2 className='text-3xl text-[#262626] font-bold font-dms text-center pb-6'>Your WishList is Empty <ImHeartBroken className='inline-block' /></h2>
                <div className='text-center'>
                  <Link to={"/products"} className='text-md sm:text-2xl text-[#fff] font-bold font-dms bg-[#262626] py-2 px-6 sm:px-12 rounded-[5px] hover:bg-[#262626a8]'>
                    Continue Shopping
                  </Link>
                </div>
              </div>
              <div>
                <h1 className='text-blue-500 pb-6 text-[25px] font-bold font-josefin'>Just for you</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4'>
                  {suggested.map((item) => (
                    <div className='shadow-lg mb-4'>
                      <div className='relative group overflow-hidden'>
                        <Link to={`/products/allproducts/${item.id}`} target='_top'>
                          <img src={item.image_path} alt="" className='rounded-t-[5px]' />
                        </Link>
                        <div className='absolute -left-15 group-hover:left-2 bottom-8 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500'>
                          <div className='pb-4'><AiOutlineShoppingCart onClick={() => handleCartAdd(item) (window.scrollTo({top: 0}))} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[37px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                          <div className='pb-4'><FaRegHeart onClick={()=>handleAddWish(item) (window.scrollTo({top: 0, behavior: 'smooth'}))} className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                          <div className='pb-2'><FaSearchPlus className='text-[#fff] cursor-pointer hover:text-gray-200 text-[34px] shadow-2xl shadow-black p-1 rounded-full' /></div>
                        </div>
                      </div>
                      <div className='bg-[#F7F7F7] px-2 sm:flex justify-between items-center py-4'>
                        <h4 className='text-[12px] text-[#151875] font-josefin font-semibold pb-2 sm:pb-0'>{item.name}</h4>
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
        </div> }
      </Container>
    </section>
  )
}

export default Wishlist