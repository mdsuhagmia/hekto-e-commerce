import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { apiData } from './ContextApi'
import { useDispatch } from 'react-redux'
import { addToCart, addToWishlist } from './slice/productSlice'
import { toast } from 'react-toastify'
import { RiCloseLargeFill } from 'react-icons/ri'

const FeaturedProducts = () => {
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
        className='absolute top-[50%] right-4 translate-y-[-50%] bg-blue-500 text-white p-1 text-md sm:text-xl lg:text-2xl rounded-[5px] z-[9999] cursor-pointer'>
          <MdArrowForwardIos />
      </div>
    );
  }

  var settings = {
    dots: true,
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
  let data = useContext(apiData)
  let [shopMatress, setShopMatress] = useState([])
  useEffect(()=>{
    let filterShopMatress = data.filter((item)=>item.category === "matress")
    setShopMatress(filterShopMatress)
  },[data])

  let handleCartAdd = (item)=>{
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
    <section className='bg-white py-16'>
      <Container>
        <div>
          <h2 className='text-[#1A0B5B] text-lg sm:text-2xl md:text-3xl font-bold font-lato text-center pb-6'>Shop the Latest Mattress Trends</h2>
        </div>
        <Slider {...settings} className='featureP'>
          {shopMatress.map((item)=>(
          <div className='px-2 mb-2'>
            <div className='w-full bg-[#F6F7FB] border-1 border-[#00000013] shadow-md rounded-[5px] mr-6'>
              <div className='flex justify-center relative group'>
                <Link to={`/products/allproducts/${item.id}`} target='_top'>
                  <img src={item.image_path} alt="" className='rounded-t-[5px]' />
                </Link>
                <div className='flex gap-x-4 absolute top-2 left-8 opacity-0 group-hover:opacity-100'>
                  <div><AiOutlineShoppingCart onClick={()=>handleCartAdd(item)} className='text-blue-500 cursor-pointer hover:text-blue-900 text-[24px]' /></div>
                  <div>
                    <FaRegHeart onClick={()=>handleWish(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-[20px]' />
                  </div>
                  <div><FaSearchPlus onClick={()=>handleImageView(item)} className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-[21px]' /></div>
                </div>
                <div className='absolute bottom-4'>
                  <Link to={`/products/allproducts/${item.id}`} target='_top'
                    className='text-[#fff] bg-[#08D15F] px-[13px] py-[8px] rounded-[5px] opacity-0 group-hover:opacity-100 hover:bg-[#109248]'>
                    View Details
                  </Link>
                </div>
              </div>
              <div className='bg-white min-h-[120px] text-center hover:bg-[#2F1AC4] group'>
                <h3 className='pt-4 pb-2 text-[#FB2E86] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold font-lato group-hover:text-white'>{item.name}</h3>
                <div className='flex justify-center gap-x-2 pb-2'>
                  <div className='h-[4px] w-[20px] bg-[#05E6B7]'></div>
                  <div className='h-[4px] w-[20px] bg-[#F701A8]'></div>
                  <div className='h-[4px] w-[20px] bg-[#00009D] group-hover:bg-[#fff]'></div>
                </div>
                <h4 className='pb-2 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white capitalize'>{item.finish}</h4>
                <p className='pb-4 text-[#1016ba] text-[14px] font-medium font-josefin group-hover:text-white'>${item.price}</p>
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

export default FeaturedProducts