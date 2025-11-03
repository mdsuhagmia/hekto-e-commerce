import Container from './Container'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { useContext, useEffect, useRef, useState } from 'react'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom'
import { RiCloseLargeFill } from 'react-icons/ri'

const TopCategories = () => {
  function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            onClick={onClick}
            className='absolute top-[50%] left-4 translate-y-[-50%] bg-blue-500 text-white p-1 text-md sm:text-xl lg:text-2x rounded-[5px] cursor-pointer'>
              <MdArrowBackIosNew />
          </div>
        );
      }
    
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            onClick={onClick}
            className='absolute top-[50%] right-4 translate-y-[-50%] bg-blue-500 text-white p-1 text-md sm:text-xl lg:text-2x rounded-[5px] z-[9999] cursor-pointer'>
              <MdArrowForwardIos />
          </div>
        );
      }
  
    const settings = {
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
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    };

    let data = useContext(apiData)
    let [gardenCateShow, setGardenCateShow] = useState([])
    useEffect(()=>{
      let gardenFilterCate = data.filter((item)=>item.category === "garden")
      let gardenSlice = gardenFilterCate.slice(10, 30)
      setGardenCateShow(gardenSlice)
    },[data])

  
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
        <div>
          <h2 className='text-[#151875] text-[35px] font-bold font-josefin pb-4 pt-16 text-center'>Top Categories</h2>
          <Slider {...settings} className='tc_slick py-8'>
            {gardenCateShow.map((item)=>(
            <div className='px-2'>
              <div className='bg-[#F6F7FB] flex items-center justify-center rounded-full relative group'>
                <img src={item.image_path} onClick={()=>handleImageView(item)} alt="" className='rounded-[50%] border-l-8 border-white hover:border-l-8 hover:border-indigo-500' />
                <div className='absolute left-[50%] bottom-4 translate-x-[-50%] opacity-0 group-hover:opacity-100'>
                  <Link to={`/products/allproducts/${item.id}`} target='_top' className='inline-block text-white text-[12px] font-medium font-josefin bg-[#08D15F] px-[16px] py-[5px] rounded-[5px] hover:bg-[#279e5b]'>
                    View Shop
                  </Link>
                </div>
              </div>
              <div className='text-center'>
                <h4 className='text-[#151875] text-[12px] sm:text-[16px] font-semibold font-lato pb-2 pt-4'>{item.name}</h4>
                <h5 className='text-[#151875] text-[14px] font-semibold font-lato pb-4'>${item.price}</h5>
              </div>
            </div>
            ))}
          </Slider>
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

export default TopCategories