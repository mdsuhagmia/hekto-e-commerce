import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { apiData } from './ContextApi'

const Menu = () => {
  let info = useContext(apiData)
  let [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let [search, setSearch] = useState("")
  let [searchFilter, setSearchFilter] = useState([])
  let handdleSearch = (e)=>{
    setSearch(e.target.value)
    if(e.target.value == ""){
      setSearchFilter([])
    }else{
      let searchOne = info.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchFilter(searchOne)
    }
  }

  let navigate = useNavigate()
  let handleSearchItem = (item)=>{
    navigate(`/products/allproducts/${item.id}`)
    setSearchFilter([])
    setSearch("")
  }

  let [activeIndex, setActiveIndex] = useState(-1)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev =>
        prev < searchFilter.length - 1 ? prev + 1 : prev
      );
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev =>
        prev > 0 ? prev - 1 : - 1
      );
    }
    if (e.key === "Enter") {
      if (activeIndex !== -1) {
        handleSearchItem(searchFilter[activeIndex]);
      }
    }
  };

  let searchRef = useRef()
  useEffect(()=>{
    let handleClickOutsite = (e)=>{
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFilter([])
        setSearch("")
      }
    }
    document.addEventListener("mousedown", handleClickOutsite)
    return ()=>{
      document.addEventListener("mousedown", handleClickOutsite)
    }
  }, [])

  let itemRefs = useRef([]);
  useEffect(() => {
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeIndex]);

  let handleSearchProduct = () => {
  if (searchFilter.length > 0) {
    const firstItem = searchFilter[0];
    navigate(`/products/allproducts/${firstItem.id}`);
    setSearch("");
    setSearchFilter([]);
  }
};


  return (
    <nav className={`hidden md:block ${isSticky ? "bg-[#f7eeee] fixed top-0 left-0 w-full z-[9999] transition-all duration-200 ease-in-out py-3" : "bg-white w-full py-4" }`}>
      <Container>
        <div className={`flex justify-between items-center`}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className='flex gap-x-4 lg:gap-x-6 items-center'>
              <li>
                <NavLink to={"/"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pages"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Pages
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Shop
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}
                  className={({isActive})=> `text-[14px] lg:text-[16px] font-lato font-medium ${isActive ? "text-red-600" : "text-[#0D0E43]" }`}>
                    Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='relative' ref={searchRef}>
            <div className='flex items-center'>
              <div className='bg-[#D9D9D9] rounded-l-[5px]'>
                <input 
                  type="search"
                  onChange={handdleSearch}
                  onKeyDown={handleKeyDown}
                  placeholder='Search...'
                  value={search}
                  className='h-[30px] lg:h-[35px] outline-0 px-2 lg:px-4' />
              </div>
              <div className='bg-[#FB2E86] h-[30px] lg:h-[35px] px-2 rounded-r-[5px] flex items-center cursor-pointer' onClick={handleSearchProduct}>
                <FiSearch className='text-white text-xl' />
              </div>
            </div>
            {searchFilter.length > 0 && (
            <div className='w-full bg-[#D9D9D9] absolute top-[34px] left-0 z-[9999] max-h-[350px] overflow-y-auto rounded-b-[5px]'>
              {searchFilter.map((item, index)=>(
                <div ref={el => itemRefs.current[index] = el} className={`flex items-center justify-between cursor-pointer py-4 px-4 hover:text-red-500 ${activeIndex === index ? "bg-gray-200 text-[#262626] rounded-[5px]" : ""}`} onClick={()=>handleSearchItem(item)}>
                  <div className="">
                    <h2 className='text-[14px]'>{item.name}</h2>
                  </div>
                  <div className="">
                    <img src={item.image_path} className='h-10 w-10' alt="" />
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Menu