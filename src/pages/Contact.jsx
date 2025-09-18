import React from 'react'
import Container from '../components/Container'
import { NavLink } from 'react-router-dom'
import ContactsInfo from '../components/ContactsInfo'

const Contact = () => {
  return (
    <>
      <section className='py-10 bg-[#F6F5FF]'>
        <Container>
          <div>
            <h2 className='text-[#151875] text-[30px] md:text-[35px] font-bold font-josefin pb-1'>Contact Us</h2>
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
                <NavLink to={"/contact"}
                  className={({ isActive }) => `text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]"}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <ContactsInfo/>
    </>
  )
}

export default Contact