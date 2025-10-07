import React from 'react'
import Container from './Container'
import updaban from '../assets/hh.png'
import jj from '../assets/jj.png'
import { Link } from 'react-router-dom'

const UpdateProd = () => {
  return (
    <section>
      <Link to={"/products"} target='_top'>
        <img src={updaban} alt="" className='w-full' />
      </Link>
      <Container>
        <div className='py-12'>
          <img src={jj} alt="" className='w-full' />
        </div>
      </Container>
    </section>
  )
}

export default UpdateProd