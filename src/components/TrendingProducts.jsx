import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { apiData } from './ContextApi'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart, addToWishlist } from './slice/productSlice'
import { toast } from 'react-toastify'
import { RiCloseLargeFill } from 'react-icons/ri'

const TrendingProducts = () => {
  let produc = useContext(apiData)

  function SampleNextArrow(props) {
      const { onClick } = props;
      return (
        <div
          onClick={onClick}
          className='absolute top-[50%] left-4 translate-y-[-50%] bg-blue-500 text-white p-1 text-md sm:text-xl lg:text-2xl rounded-[5px] cursor-pointer'>
            <MdArrowBackIosNew />
        </div>
      );
    }
  
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
        <div
          onClick={onClick}
          className='absolute top-[50%] right-4 translate-y-[-50%] bg-blue-500 text-white p-1 text-md sm:text-xl lg:text-2xl rounded-[5px] z-[999] cursor-pointer'>
            <MdArrowForwardIos />
        </div>
      );
    }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

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
    <section className='pb-16'>
      <Container>
        <h2 className='text-[#151875] text-[25px] md:text-[35px] font-bold font-josefin pb-6 pt-10 sm:pt-16 text-center'>Trending Products</h2>
        <Slider {...settings}>
          {produc.map((item)=>(
            <div className='px-2'>
              <div className='bg-[#ffffff20] min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px] w-full rounded-[5px] shadow-md border-1 border-[#0000001f] mb-8'>
                  <div className='bg-gray-100 w-full flex justify-center relative group'>
                <Link to={"/products"} target='_top' className=''>
                    <img src={item.image_path} alt="" className='w-full rounded-t-[5px]' />
                </Link>
                    <div className='flex gap-x-6 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-[#f8efef] w-full py-4 justify-center'>
                      <div onClick={()=>handleCart(item)}>
                        <AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 text-2xl' />
                      </div>
                      <div><FaRegHeart onClick={()=>handleWish(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' /></div>
                      <div><FaSearchPlus onClick={()=>handleImageView(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' /></div>
                    </div>
                  </div>
                <div className=''>
                  <Link to={"/products"}>
                    <h1 className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#151875] font-semibold font-lato px-4 pt-4 pb-2 hover:underline cursor-pointer'>{item.name}</h1>
                  </Link>
                  <p className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#151875] font-semibold font-lato px-4 pb-4'>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
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

export default TrendingProducts