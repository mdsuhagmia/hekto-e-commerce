import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Container from './Container'

const ProductDetailsUp = () => {
  let { id } = useParams()
  return (
    <section className='py-10 bg-[#F6F5FF]'>
      <Container>
        <div>
          <h2 className='text-[#151875] text-[30px] md:text-[35px] font-bold font-josefin pb-1'>Product Details</h2>
          <ul className='flex items-center gap-x-1'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                Home .
              </NavLink>
            </li>
            <li>
              <NavLink to={"/pages"}
                className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                Pages .
              </NavLink>
            </li>
            <li>
              <NavLink to={`/products/allproducts/${id}`}
                className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                Products Details
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetailsUp