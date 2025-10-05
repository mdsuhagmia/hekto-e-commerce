import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from './Container'
import ProductDetailsUp from './ProductDetailsUp'
import { FaFacebookF, FaInstagram, FaStar, FaStarHalfAlt, FaTwitter } from 'react-icons/fa'
import { CiHeart, CiStar } from 'react-icons/ci'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { addToCart } from './slice/productSlice'
import jj from '../assets/jj.png'
import { initFlowbite } from 'flowbite'

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
  },[id])

  let clintReating = Array.from({length: 5}, (_, index)=>{
    let number = index + 0.5
    return(singleProducts.rating > index + 1 ? <FaStar className='text-[gold]' /> : singleProducts.rating > number ? <FaStarHalfAlt className='text-[gold]' /> : <CiStar /> )
  })

  let discount = (singleProducts.price - singleProducts.discount_price)

  //? discount persen ber korar code ex. 6% discount
  // const discountPercentage = ((singleProducts.price - singleProducts.discount_price) / singleProducts.price) * 100;
  // const roundedDiscount = Math.round(discountPercentage); 
  // console.log(roundedDiscount)

  let navigate = useNavigate()
  let Dispatch = useDispatch()

  let handleCart = (item)=>{
    Dispatch(addToCart({...item, qun: 1}))
    toast.success("Add to cart success!")
    setTimeout(()=>{
      navigate("/cart")
    }, 2000)
  }
  
  let [more, setMore] = useState(false)
  let handleMore = ()=>{
    setMore(!more)
  }

  useEffect(() => {
    initFlowbite();
  }, []);

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
                <h3 className='text-[#151875] text-[16px] font-semibold font-josefin'>${singleProducts.discount_price}</h3>
                <h3 className='text-[#df3636] text-[16px] font-semibold font-josefin line-through'>${singleProducts.price}</h3>
                <h3 className='text-[#df3636] text-[16px] font-semibold font-josefin'>Discount: ${discount.toFixed(2)}</h3>
              </div>
              <p className='text-[#A9ACC6] text-[14px] sm:text-[16px] font-medium font-josefin max-w-lg'>{singleProducts.description}</p>
              <div className='w-40 py-4'>
                <div className='flex justify-between items-center cursor-pointer group border-2 border-[#0000001a] px-6 py-1 rounded-[5px] hover:border-[#f01313]' onClick={()=>handleCart(singleProducts)}>
                  <p className='text-[#151875] text-[16px] font-medium font-josefin group-hover:text-[#f01313]'>Add To cart</p>
                  <CiHeart className='group-hover:text-[#f01313]' />
                </div>
                
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
          <div className='pt-20'>
            <div className="mb-4">
              <ul className="flex flex-wrap -mb-px text-[6px] sm:text-sm md:text-xl font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg text-[#0911f7] cursor-pointer" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Description</button>
                </li>
                <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-[#0911f7] cursor-pointer" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Additional Info</button>
                </li>
                <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-[#0911f7] cursor-pointer" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Reviews</button>
                </li>
                <li role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-[#0911f7] cursor-pointer" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Video</button>
                </li>
              </ul>
            </div>
            <div id="default-tab-content">
              <div className="hidden p-4 max-w-[1152px]" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h4 className='text-[#151875] font-bold font-lato text-[18px] pb-4'>Varius tempor.</h4>
                <p className="text-[16px] text-[#A9ACC6] font-medium font-josefin pb-6">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                {more && (
                  <div className='pb-8'>
                    <p className="text-[16px] text-[#A9ACC6] font-medium font-josefin pb-2">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    <p className="text-[16px] text-[#A9ACC6] font-medium font-josefin pb-2">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                  </div>
                )}
                <h4 className="text-[16px] text-[#151875] font-medium font-josefin cursor-pointer hover:text-red-600 inline-block" onClick={handleMore}>
                  {more == true ? "Hide Details" : "More Details" }
                </h4>
                
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p className="text-[16px] text-[#A9ACC6] font-medium font-josefin pb-6">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr. Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <p className="text-[16px] text-[#A9ACC6] font-medium font-josefin pb-6">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <p className="text-[16px] text-[#A9ACC6] font-medium font-josefin pb-6">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr. Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </div>
            </div>
          </div>
          <div className='pt-20'>
            <h2 className='text-[30px] font-bold font-josefin text-[#151875]'>Related Products</h2>
          </div>
          <div className='pt-12'>
            <img src={jj} alt="" className='w-full' />
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductsDetails