import Container from './Container'
import tc1 from '../assets/tc1.png'
import tc2 from '../assets/tc2.png'
import tc3 from '../assets/tc3.png'
import tc4 from '../assets/tc4.png'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const TopCategories = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
  return (
    <section className='pb-16'>
      <Container>
        <div>
          <h2 className='text-[#151875] text-[35px] font-bold font-josefin pb-4 pt-16 text-center'>Top Categories</h2>
          <Slider {...settings} className='tc_slick py-8'>
            <div className='px-2'>
              <div className='bg-[#F6F7FB] flex items-center justify-center rounded-full border-l-8 border-white hover:border-l-8 hover:border-indigo-500 cursor-pointer relative group'>
                <img src={tc1} alt="" className='py-12' />
                <div className='absolute left-[50%] bottom-4 translate-x-[-50%] opacity-0 group-hover:opacity-100'>
                  <button className='cursor-pointer text-white text-[12px] font-medium font-josefin bg-[#08D15F] px-[16px] py-[5px] rounded-[5px] hover:bg-[#08d15fb6]'>
                    View Shop
                  </button>
                </div>
              </div>
              <div className='text-center'>
                <h4 className='text-[#151875] text-[16px] font-semibold font-lato pb-2 pt-4'>Mini LCW Chair</h4>
                <h5 className='text-[#151875] text-[14px] font-semibold font-lato pb-4'>$56.00</h5>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-[#F6F7FB] flex items-center justify-center rounded-full border-l-8 border-white hover:border-l-8 hover:border-indigo-500 cursor-pointer relative group'>
                <img src={tc2} alt="" className='py-12' />
                <div className='absolute left-[50%] bottom-4 translate-x-[-50%] opacity-0 group-hover:opacity-100'>
                  <button className='cursor-pointer text-white text-[12px] font-medium font-josefin bg-[#08D15F] px-[16px] py-[5px] rounded-[5px] hover:bg-[#08d15fb6]'>
                    View Shop
                  </button>
                </div>
              </div>
              <div className='text-center'>
                <h4 className='text-[#151875] text-[16px] font-semibold font-lato pb-2 pt-4'>Mini LCW Chair</h4>
                <h5 className='text-[#151875] text-[14px] font-semibold font-lato pb-4'>$56.00</h5>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-[#F6F7FB] flex items-center justify-center rounded-full border-l-8 border-white hover:border-l-8 hover:border-indigo-500 cursor-pointer relative group'>
                <img src={tc3} alt="" className='py-12' />
                <div className='absolute left-[50%] bottom-4 translate-x-[-50%] opacity-0 group-hover:opacity-100'>
                  <button className='cursor-pointer text-white text-[12px] font-medium font-josefin bg-[#08D15F] px-[16px] py-[5px] rounded-[5px] hover:bg-[#08d15fb6]'>
                    View Shop
                  </button>
                </div>
              </div>
              <div className='text-center'>
                <h4 className='text-[#151875] text-[16px] font-semibold font-lato pb-2 pt-4'>Mini LCW Chair</h4>
                <h5 className='text-[#151875] text-[14px] font-semibold font-lato pb-4'>$56.00</h5>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-[#F6F7FB] flex items-center justify-center rounded-full border-l-8 border-white hover:border-l-8 hover:border-indigo-500 cursor-pointer relative group'>
                <img src={tc4} alt="" className='py-12' />
                <div className='absolute left-[50%] bottom-4 translate-x-[-50%] opacity-0 group-hover:opacity-100'>
                  <button className='cursor-pointer text-white text-[12px] font-medium font-josefin bg-[#08D15F] px-[16px] py-[5px] rounded-[5px] hover:bg-[#08d15fb6]'>
                    View Shop
                  </button>
                </div>
              </div>
              <div className='text-center'>
                <h4 className='text-[#151875] text-[16px] font-semibold font-lato pb-2 pt-4'>Mini LCW Chair</h4>
                <h5 className='text-[#151875] text-[14px] font-semibold font-lato pb-4'>$56.00</h5>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-[#F6F7FB] flex items-center justify-center rounded-full border-l-8 border-white hover:border-l-8 hover:border-indigo-500 cursor-pointer relative group'>
                <img src={tc2} alt="" className='py-12' />
                <div className='absolute left-[50%] bottom-4 translate-x-[-50%] opacity-0 group-hover:opacity-100'>
                  <button className='cursor-pointer text-white text-[12px] font-medium font-josefin bg-[#08D15F] px-[16px] py-[5px] rounded-[5px] hover:bg-[#08d15fb6]'>
                    View Shop
                  </button>
                </div>
              </div>
              <div className='text-center'>
                <h4 className='text-[#151875] text-[16px] font-semibold font-lato pb-2 pt-4'>Mini LCW Chair</h4>
                <h5 className='text-[#151875] text-[14px] font-semibold font-lato pb-4'>$56.00</h5>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  )
}

export default TopCategories