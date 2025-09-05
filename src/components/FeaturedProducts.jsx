import React from 'react'
import Container from './Container'
import fea1 from '../assets/fea1.png'
import fea2 from '../assets/fea2.png'
import fea3 from '../assets/fea3.png'
import fea4 from '../assets/fea4.png'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const FeaturedProducts = () => {
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
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className='bg-white py-16'>
      <Container>
        <div>
          <h2 className='text-[#1A0B5B] text-3xl font-bold font-lato text-center pb-6'>Featured Products</h2>
        </div>
        <Slider {...settings}>
          <div className='px-2 w-1/4 mb-2'>
            <div className='w-full bg-[#F6F7FB] border-1 border-[#00000013] shadow-md rounded-[5px] mr-6'>
              <div className='py-15 flex justify-center relative group'>
                <Link>
                  <img src={fea4} alt="" className='' />
                </Link>
                <div className='flex gap-x-4 absolute top-4 left-8 opacity-0 group-hover:opacity-100'>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                </div>
                <div className='absolute bottom-4'>
                  <a href="#"
                    className='text-[#fff] bg-[#08D15F] px-[13px] py-[8px] rounded-[5px] opacity-0 group-hover:opacity-100 hover:bg-[#109248]'>
                    View Details
                  </a>
                </div>
              </div>
              <div className='bg-white min-h-[120px] text-center hover:bg-[#2F1AC4] group'>
                <h3 className='pt-4 pb-2 text-[#FB2E86] text-[18px] font-bold font-lato group-hover:text-white'>Cantilever chair</h3>
                <div className='flex justify-center gap-x-2 pb-2'>
                  <div className='h-[4px] w-[20px] bg-[#05E6B7]'></div>
                  <div className='h-[4px] w-[20px] bg-[#F701A8]'></div>
                  <div className='h-[4px] w-[20px] bg-[#00009D] group-hover:bg-[#fff]'></div>
                </div>
                <h4 className='pb-2 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>Code - Y523201</h4>
                <p className='pb-4 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>$42.00</p>
              </div>
            </div>
          </div>
          <div className='px-2 w-1/4'>
            <div className='w-full bg-[#F6F7FB] border-1 border-[#00000013] shadow-md rounded-[5px] mr-6'>
              <div className='py-15 flex justify-center relative group'>
                <Link>
                  <img src={fea2} alt="" className='' />
                </Link>
                <div className='flex gap-x-4 absolute top-4 left-8 opacity-0 group-hover:opacity-100'>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                </div>
                <div className='absolute bottom-4'>
                  <a href="#"
                    className='text-[#fff] bg-[#08D15F] px-[13px] py-[8px] rounded-[5px] opacity-0 group-hover:opacity-100 hover:bg-[#109248]'>
                    View Details
                  </a>
                </div>
              </div>
              <div className='bg-white min-h-[120px] text-center hover:bg-[#2F1AC4] group'>
                <h3 className='pt-4 pb-2 text-[#FB2E86] text-[18px] font-bold font-lato group-hover:text-white'>Cantilever chair</h3>
                <div className='flex justify-center gap-x-2 pb-2'>
                  <div className='h-[4px] w-[20px] bg-[#05E6B7]'></div>
                  <div className='h-[4px] w-[20px] bg-[#F701A8]'></div>
                  <div className='h-[4px] w-[20px] bg-[#00009D] group-hover:bg-[#fff]'></div>
                </div>
                <h4 className='pb-2 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>Code - Y523201</h4>
                <p className='pb-4 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>$42.00</p>
              </div>
            </div>
          </div>
          <div className='px-2 w-1/4'>
            <div className='w-full bg-[#F6F7FB] border-1 border-[#00000013] shadow-md rounded-[5px] mr-6'>
              <div className='py-14 flex justify-center relative group'>
                <Link>
                  <img src={fea1} alt="" className='' />
                </Link>
                <div className='flex gap-x-4 absolute top-4 left-8 opacity-0 group-hover:opacity-100'>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                </div>
                <div className='absolute bottom-4'>
                  <a href="#"
                    className='text-[#fff] bg-[#08D15F] px-[13px] py-[8px] rounded-[5px] opacity-0 group-hover:opacity-100 hover:bg-[#109248]'>
                    View Details
                  </a>
                </div>
              </div>
              <div className='bg-white min-h-[160px] text-center hover:bg-[#2F1AC4] group'>
                <h3 className='pt-4 pb-2 text-[#FB2E86] text-[18px] font-bold font-lato group-hover:text-white'>Cantilever chair</h3>
                <div className='flex justify-center gap-x-2 pb-2'>
                  <div className='h-[4px] w-[20px] bg-[#05E6B7]'></div>
                  <div className='h-[4px] w-[20px] bg-[#F701A8]'></div>
                  <div className='h-[4px] w-[20px] bg-[#00009D] group-hover:bg-[#fff]'></div>
                </div>
                <h4 className='pb-2 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>Code - Y523201</h4>
                <p className='pb-4 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>$42.00</p>
              </div>
            </div>
          </div>
          <div className='px-2 w-1/4'>
            <div className='w-full bg-[#F6F7FB] border-1 border-[#00000013] shadow-md rounded-[5px] mr-6'>
              <div className='py-14 flex justify-center relative group'>
                <Link>
                  <img src={fea3} alt="" className='' />
                </Link>
                <div className='flex gap-x-4 absolute top-4 left-8 opacity-0 group-hover:opacity-100'>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                </div>
                <div className='absolute bottom-4'>
                  <a href="#"
                    className='text-[#fff] bg-[#08D15F] px-[13px] py-[8px] rounded-[5px] opacity-0 group-hover:opacity-100 hover:bg-[#109248]'>
                    View Details
                  </a>
                </div>
              </div>
              <div className='bg-white min-h-[160px] text-center hover:bg-[#2F1AC4] group'>
                <h3 className='pt-4 pb-2 text-[#FB2E86] text-[18px] font-bold font-lato group-hover:text-white'>Cantilever chair</h3>
                <div className='flex justify-center gap-x-2 pb-2'>
                  <div className='h-[4px] w-[20px] bg-[#05E6B7]'></div>
                  <div className='h-[4px] w-[20px] bg-[#F701A8]'></div>
                  <div className='h-[4px] w-[20px] bg-[#00009D] group-hover:bg-[#fff]'></div>
                </div>
                <h4 className='pb-2 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>Code - Y523201</h4>
                <p className='pb-4 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>$42.00</p>
              </div>
            </div>
          </div>
          <div className='px-2 w-1/4'>
            <div className='w-full bg-[#F6F7FB] border-1 border-[#00000013] shadow-md rounded-[5px] mr-6'>
              <div className='py-14 flex justify-center relative group'>
                <Link>
                  <img src={fea1} alt="" className='' />
                </Link>
                <div className='flex gap-x-4 absolute top-4 left-8 opacity-0 group-hover:opacity-100'>
                  <div><AiOutlineShoppingCart className='text-blue-500 cursor-pointer hover:text-blue-900' /></div>
                  <div><FaRegHeart className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                  <div><FaSearchPlus className='text-[#1389FF] cursor-pointer hover:text-blue-900' /></div>
                </div>
                <div className='absolute bottom-4'>
                  <a href="#"
                    className='text-[#fff] bg-[#08D15F] px-[13px] py-[8px] rounded-[5px] opacity-0 group-hover:opacity-100 hover:bg-[#109248]'>
                    View Details
                  </a>
                </div>
              </div>
              <div className='bg-white min-h-[160px] text-center hover:bg-[#2F1AC4] group'>
                <h3 className='pt-4 pb-2 text-[#FB2E86] text-[18px] font-bold font-lato group-hover:text-white'>Cantilever chair</h3>
                <div className='flex justify-center gap-x-2 pb-2'>
                  <div className='h-[4px] w-[20px] bg-[#05E6B7]'></div>
                  <div className='h-[4px] w-[20px] bg-[#F701A8]'></div>
                  <div className='h-[4px] w-[20px] bg-[#00009D] group-hover:bg-[#fff]'></div>
                </div>
                <h4 className='pb-2 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>Code - Y523201</h4>
                <p className='pb-4 text-[#151875] text-[14px] font-medium font-josefin group-hover:text-white'>$42.00</p>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  )
}

export default FeaturedProducts