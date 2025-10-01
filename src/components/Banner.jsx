import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../../public/banner.png'
import Slider from 'react-slick';

const Banner = () => {
   const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <section>
      <Slider {...settings} className='ban_slick'>
        <div>
          <Link to={"/products"}>
            <img src={bg} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/products"}>
            <img src={bg} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/products"}>
            <img src={bg} alt="" />
          </Link>
        </div>
      </Slider>
    </section>
  )
}

export default Banner