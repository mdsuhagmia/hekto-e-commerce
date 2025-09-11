import React, { useContext } from 'react'
import Container from './Container'
import { apiData } from './ContextApi'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'

const TrendingProducts = () => {
  let produc = useContext(apiData)

  function SampleNextArrow(props) {
      const { onClick } = props;
      return (
        <div
          onClick={onClick}
          className='absolute top-[50%] left-4 translate-y-[-50%] bg-blue-500 text-white p-1 text-2xl rounded-[5px] cursor-pointer'>
            <MdArrowBackIosNew />
        </div>
      );
    }
  
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
        <div
          onClick={onClick}
          className='absolute top-[50%] right-4 translate-y-[-50%] bg-blue-500 text-white p-1 text-2xl rounded-[5px] z-[9999] cursor-pointer'>
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='pb-16'>
      <Container>
        <h2 className='text-[#151875] text-[25px] md:text-[35px] font-bold font-josefin pb-6 pt-16 text-center'>Trending Products</h2>
        <Slider {...settings}>
          {produc.map((item)=>(
            <div className='px-2'>
              <div className='bg-[#ffffff20] min-h-[360px] w-full rounded-[5px] shadow-md border-1 border-[#0000001f] mb-8 mt-4'>
                  <div className='bg-gray-100 w-full flex justify-center relative group'>
                <Link to={"/products"} target='_top' className=''>
                    <img src={item.image_path} alt="" className='w-full' />
                </Link>
                    <div className='flex gap-x-6 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-[#f8efef] w-full py-4 justify-center'>
                      <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900 text-2xl' /></div>
                      <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' /></div>
                      <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900 text-2xl' /></div>
                    </div>
                  </div>
                <div className=''>
                  <Link to={"/products"}>
                    <h1 className='text-xl text-[#151875] font-semibold font-lato px-4 py-4 hover:underline cursor-pointer'>{item.name}</h1>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default TrendingProducts