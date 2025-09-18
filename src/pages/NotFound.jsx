import React from 'react'
import notFound from '../assets/notfound.png'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <Container>
        <div className='w-full sm:w-1/2 mx-auto'>
          <div>
            <img src={notFound} alt="" />
          </div>
          <div className='text-center'>
            <Link to={"/"}
              className='text-[#fff] text-[16px] font-semibold font-josefin px-[30px] py-[9px] bg-[#FB2E86] rounded-[5px] hover:bg-[#952656] transition-all duration-300 ease-in-out'>
              Back To Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NotFound