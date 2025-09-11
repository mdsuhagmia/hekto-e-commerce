import React from 'react'
import unique3 from '../assets/unique3.png'
import { Link } from 'react-router-dom'

const Unique2 = () => {
  return (
    <section className='block lg:hidden'>
      <Link to={"/products"}>
        <img src={unique3} alt="" className='w-full block lg:hidden' />
      </Link>
    </section>
  )
}

export default Unique2