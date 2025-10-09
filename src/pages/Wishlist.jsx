import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'

const Wishlist = () => {
  let data = useSelector((state)=>state.product.wishlist)
  return (
    <section className='py-12'>
      <Container>
        <div className=''>
          {data.map((item)=>(
            <img src={item.image_path} alt="" className='w-90 mb-6' />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Wishlist