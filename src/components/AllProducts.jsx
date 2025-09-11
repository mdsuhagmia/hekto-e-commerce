import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import ShopGrid from './ShopGrid'
import { TbLayoutGrid } from 'react-icons/tb'
import { BsListUl } from 'react-icons/bs'
import Post from './Post'
import Pagination from './Pagination'
import { apiData } from './ContextApi'
import ListItem from './ListItem'

const AllProducts = () => {
  let data = useContext(apiData)

  let [perPage, setPerPage] = useState(12)
  let [currentPage, setCurrentPage] = useState(1)

  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = data.slice(firstPage, lastPage)

  let pageNumber = []
  for(let i = 0; i < Math.ceil(data.length / perPage); i++){
    pageNumber.push(i)
  };

  let paginate = (pagiIndex)=>{
    setCurrentPage(pagiIndex + 1)
    // window.scrollTo({top: 0, behavior: 'smooth'})
  }
  
  let next = ()=>{
    if(currentPage < pageNumber.length){
      setCurrentPage((nIndex)=>nIndex + 1)
      // window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }

  let prev = ()=>{
    if(currentPage > 1){
      setCurrentPage((pIndex)=>pIndex - 1)
      // window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }

  let handlePerPage = (event)=>{
    setPerPage(event.target.value)
  }

  let [shopCategory, setShopCategory] = useState([])
  useEffect(()=>{
    setShopCategory([...new Set(data.map((item)=>item.category))])
  },[data])

  let [showFilter, setShowFilter] = useState([])
  let handleCategory = (e)=>{
    let selectCategory = e.target.value
    let FilterCate = data.filter((item)=>item.category === selectCategory)
    setShowFilter(FilterCate)
  }
  
  let [view, setView] = useState(true)
  return (
    <section className='pb-16'>
        <ShopGrid/>
      <Container>
        <div className='flex items-center justify-between py-12'>
          <div className='hidden lg:block'>
            <h2 className='text-[#151875] text-[16px] font-bold font-josefin pb-1'>Ecommerce Furniture Item </h2>
            <p className='text-[#8A8FB9] text-[16px] font-medium font-josefin'>About {data.length} results</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <h2 className='text-[#151875] text-[16px] font-medium font-josefin pr-2 hidden sm:block'>Per Page:</h2>
            <select name="per-page" id="per-page" className='px-6 py-1 border-2 border-[#00000064] rounded-[5px]'
              onChange={handlePerPage}>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className='flex items-center gap-x-2'>
            <h2 className='text-[#151875] text-[16px] font-medium font-josefin pr-2 hidden md:block'>Sort By:</h2>
            <select name="per-page" id="per-page" className='px-2 py-1 border-2 border-[#00000064] rounded-[5px] hidden md:block'>
              <option value="">Price</option>
              <option value="low-to-high">Low To High</option>
              <option value="high-to-low">High To Low</option>
            </select>
          </div>
          <div className='flex items-center gap-x-2'>
            <h2 className='text-[#151875] text-[16px] font-medium font-josefin pr-2 hidden sm:block'>Category:</h2>
            <div className='flex items-center gap-x-2'>
              <select name="category" id="category"
                className='px-2 py-1 border-2 border-[#00000064] rounded-[5px]'
                onChange={handleCategory}>
                <option value="all-products" onChange={()=>setShowFilter("")}>All Products</option>
                {shopCategory.map((item)=>(
                  <option value={item}>{item}</option>
                ))} 
              </select>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <h2 className='text-[#151875] text-[16px] font-medium font-josefin pr-2 hidden sm:block'>View:</h2>
            <div className='flex items-center gap-x-2'
              onClick={()=>setView(!view)}>
                {view == true ? <div className="p-1 rounded-[4px] cursor-pointer bg-blue-500 text-white">
                <BsListUl /> </div> : <div className="p-1 rounded-[4px] cursor-pointer bg-blue-500 text-white">
                <TbLayoutGrid />
              </div> }
            </div>
          </div>
        </div>
        <div>
          {view == true ? <Post 
          allPage={allPage}
          showFilter={showFilter}/>  : <ListItem 
          allPage={allPage}
          showFilter={showFilter}/>}
        </div>
        <Pagination
          pageNumber={pageNumber}
          paginate={paginate}
          next={next}
          prev={prev}
          currentPage={currentPage}
          showFilter={showFilter}/>
      </Container>
    </section>
  )
}

export default AllProducts