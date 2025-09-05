import React from 'react'
import Container from './Container'
import updaban from '../assets/hh.png'
import jj from '../assets/jj.png'

const UpdateProd = () => {
  return (
    <section>
      <img src={updaban} alt="" className='w-full' />
      <Container>
        <div className='py-12'>
          <img src={jj} alt="" className='w-full' />
        </div>
      </Container>
    </section>
  )
}

export default UpdateProd