import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './Container'
import ProductDetailsUp from './ProductDetailsUp'
import { FaFacebookF, FaInstagram, FaStar, FaStarHalfAlt, FaTwitter } from 'react-icons/fa'
import { CiHeart, CiStar } from 'react-icons/ci'

const ProductsDetails = () => {
  let [allProduct, setAllProduct] = useState([])
  let {id} = useParams()
  let [singleProducts, setSingleProducts] = useState([])

  let getData = ()=>{
    axios.get("https://furniture-api.fly.dev/v1/products?limit=100&offset=0").then((response)=>{
      setAllProduct(response.data.data)

      let product = response.data.data.find((item)=>(
        item.id === id
      ))
      setSingleProducts(product)
    })
  }
  useEffect(()=>{
    getData()
  },[])

  let clintReating = Array.from({length: 5}, (_, index)=>{
    let number = index + 0.5
    return(singleProducts.rating > index + 1 ? <FaStar className='text-[gold]' /> : singleProducts.rating > number ? <FaStarHalfAlt className='text-[gold]' /> : <CiStar /> )
  })
  
  return (
    <>
      <ProductDetailsUp />
      <section className='py-16'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
            <div className='pb-8 lg:pb-0 w-2/3 lg:w-full mx-auto'>
              <img src={singleProducts.image_path} alt="" className='h-auto w-full' />
            </div>
            <div>
              <h2 className='text-[#0D134E] text-[25px] sm:text-[36px] font-bold font-josefin pb-2'>{singleProducts.name}</h2>
              <div className='flex pb-2'>
                {clintReating}
              </div>
              <div className='flex gap-x-4 items-center pb-2'>
                <h3 className='text-[#151875] text-[16px] font-semibold font-josefin'>${singleProducts.price}</h3>
                <h3 className='text-[#df3636] text-[16px] font-semibold font-josefin line-through'>${singleProducts.price}</h3>
              </div>
              <p className='text-[#A9ACC6] text-[14px] sm:text-[16px] font-medium font-josefin pb-4 max-w-lg'>{singleProducts.description}</p>
              <div className='flex gap-x-4 items-center pb-2 cursor-pointer'>
                <p className='text-[#151875] text-[16px] font-medium font-josefin'>Add To cart</p>
                <CiHeart />
              </div>
              <p className='text-[#151875] text-[16px] font-semibold font-josefin pb-2'>Categories: {singleProducts.category}</p>
              <p className='text-[#151875] text-[16px] font-semibold font-josefin pb-2'>Stock: {singleProducts.stock}</p>
              <div className='flex items-center gap-x-2'>
                <h3 className='text-[#151875] text-[16px] font-semibold font-josefin'>Share:</h3>
                <div className='flex items-center gap-x-2'>
                  <FaFacebookF className='text-[20px] text-white bg-[#151875] p-1 rounded-full cursor-pointer' />
                  <FaInstagram className='text-[20px] text-white bg-[#FB2E86] p-1 rounded-full cursor-pointer' />
                  <FaTwitter className='text-[20px] text-white bg-[#151875] p-1 rounded-full cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductsDetails