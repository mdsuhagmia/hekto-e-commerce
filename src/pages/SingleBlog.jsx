import React, { useContext, useEffect, useState } from 'react'
import SingleBlogUp from '../components/SingleBlogUp'
import Container from '../components/Container'
import blog1 from '../assets/blog1.png'
import { FaFacebookF, FaPenFancy, FaTwitter } from 'react-icons/fa'
import { LuCalendarDays } from 'react-icons/lu'
import { CiSearch } from 'react-icons/ci'
import re1 from '../assets/re1.png'
import re2 from '../assets/re2.png'
import re3 from '../assets/re3.png'
import re4 from '../assets/re4.png'
import sol1 from '../assets/sol1.png'
import sol2 from '../assets/sol2.png'
import sol3 from '../assets/sol3.png'
import { apiData } from '../components/ContextApi'
import vright from '../assets/vright.png'
import { Link } from 'react-router-dom'
import { RiInstagramFill } from 'react-icons/ri'
import abd from '../assets/abd.png'
import abd1 from '../assets/abd1.png'
import jj from '../assets/jj.png'

const SingleBlog = () => {

  let data = useContext(apiData)
  let [aCategory, setACategory] = useState([])
  let [filterShowCate, setFilterShowCate] = useState([])
  let [filterShowCate1, setFilterShowCate1] = useState([])
  useEffect(() => {
    let cate = ([...new Set(data.map((item) => item.category))])
    let cateWithCount = cate.map(cat => ({
      name: cat,
      count: data.filter(item => item.category === cat).length
    }))
    setACategory(cateWithCount)

    let randomData = [...data].sort(()=> 0.5 - Math.random())
    let showRandom = randomData.slice(0, 4)
    setFilterShowCate(showRandom)

    let dataFil = data.filter((item)=>item.category === "garden")
    let randomData1 = [...dataFil].sort(()=> 0.5 - Math.random())
    let showRandom1 = randomData1.slice(0, 4)
    setFilterShowCate1(showRandom1)
  }, [data])
  return (
    <>
      <SingleBlogUp/>
      <section className='py-16'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='col-span-2'>
              <div className='mb-8'>
                <div>
                  <img src={blog1} alt="" className='w-full' />
                </div>
                <div className='flex items-center gap-x-10'>
                  <div className='flex items-center gap-x-2 py-4'>
                    <FaPenFancy className='text-red-500' />
                    <p className='text-[#151875] text-[10px] sm:text-[14px] font-bold font-josefin bg-[#FFE7F9] px-6'>Surf Auxion</p>
                  </div>
                  <div className='flex items-center gap-x-2 py-4'>
                    <LuCalendarDays className='text-[#FFA454]' />
                    <p className='text-[#151875] text-[10px] sm:text-[14px] font-bold font-josefin bg-[#FFECE2] px-6'>Aug 09 2020</p>
                  </div>
                </div>
                <h2 className='text-[#151875] text-[18px] md:text-[30px] font-bold font-josefin py-2'>Mauris at orci non vulputate diam tincidunt nec.</h2>
                <p className='text-[#151875] text-[14px] md:text-[16px] font-medium font-lato leading-[20px] sm:leading-[30px] pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                <p className='text-[#151875] text-[14px] md:text-[16px] font-medium font-lato leading-[20px] sm:leading-[30px] pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                <p className='text-[#151875] text-[14px] md:text-[16px] font-medium font-josefin italic leading-[20px] sm:leading-[33px] pt-6'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</p>
              </div>
              <div className='mb-8'>
                <div className='grid grid-cols-2 items-center gap-x-4 pb-8'>
                  <div>
                    <video src="https://www.pexels.com/download/video/6394054/" controls loop muted className='h-[178px] w-full' ></video>
                  </div>
                  <div>
                    <img src={vright} alt="" className='h-auto w-full bg-cover bg-center bg-no-repeat' />
                  </div>
                </div>
                <p className='text-[#151875] text-[14px] md:text-[16px] font-medium font-lato leading-[20px] sm:leading-[30px] pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                <div>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2'>
                    {filterShowCate.map((item) => (
                      <div className='mb-2 lg:mb-0'>
                        <Link to={`/products/allproducts/${item.id}`} target='_top'>
                          <img src={item.image_path} alt="" className='rounded-t-[5px]' />
                        </Link>
                        <div className='bg-gray-100 rounded-b-[5px]'>
                          <Link to={`/products/allproducts/${item.id}`} target='_top' className='px-2 pt-3 pb-2 inline-block'>
                            <h2 className='text-[12px] font-josefin font-semibold hover:underline underline-offset-2 inline-block'>{item.name}</h2>
                          </Link>
                          <div className='flex items-center gap-x-2 px-2 pb-4'>
                            <p className='text-[10px] font-josefin font-medium'>{item.discount_price}</p>
                            <p className='text-[10px] font-josefin font-medium text-[#FF38B0] line-through'>{item.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className='text-[#151875] text-[14px] md:text-[16px] font-medium font-lato leading-[20px] sm:leading-[30px] py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                  <p className='text-[#151875] text-[14px] md:text-[16px] font-medium font-lato leading-[20px] sm:leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                  <div className='flex items-center justify-center gap-x-4 py-8'>
                    <FaFacebookF className='text-4xl text-white bg-[#5625DF] p-2 rounded-full cursor-pointer' />
                    <RiInstagramFill className='text-4xl text-white bg-[#FF27B7] p-2 rounded-full cursor-pointer' />
                    <FaTwitter className='text-4xl text-white bg-[#37DAF3] p-2 rounded-full cursor-pointer' />
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-x-4 px-2 py-2 shadow-xl mb-8 border-2 border-[#0000001c]'>
                    <div>
                      <img src={abd} alt="" />
                    </div>
                    <div>
                      <div className='flex items-center gap-x-6 pb-2'>
                        <h4 className='text-[#363385] font-bold font-josefin text-[18px]'>Sapien ac</h4>
                        <h4 className='text-[#A3A2B6] font-semibold font-josefin text-[14px]'>Jan 09 2020</h4>
                      </div>
                      <p className='max-w-[500px] text-[#A3A2B6] font-medium font-josefin text-[12px] sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-x-4 px-2 py-2 shadow-xl mb-8 border-2 border-[#0000001c]'>
                    <div>
                      <img src={abd1} alt="" />
                    </div>
                    <div>
                      <div className='flex items-center gap-x-6 pb-2'>
                        <h4 className='text-[#363385] font-bold font-josefin text-[18px]'>Augue conva</h4>
                        <h4 className='text-[#A3A2B6] font-semibold font-josefin text-[14px]'>Aug 18 2020</h4>
                      </div>
                      <p className='max-w-[500px] text-[#A3A2B6] font-medium font-josefin text-[12px] sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                  </div>
                </div>
                <div className='pt-8'>
                  <form action="" className='max-w-[550px]'>
                    <div className='w-full pb-2 md:flex items-center justify-between'>
                      <input type="name"
                        placeholder='Your Name*'
                        className='border-2 border-[#00000030] px-2 py-1 rounded-[5px] text-[#8A8FB9] outline-0 focus:text-black w-[100%] md:w-[49%] mb-2 md:mb-0'
                        required
                        autoComplete='name' />
                      <input type="email"
                        placeholder='Write Your Email*'
                        className='border-2 border-[#00000030] px-2 py-1 rounded-[5px] text-[#8A8FB9] outline-0 focus:text-black w-[100%] md:w-[49%]'
                        required
                        autoComplete='email' />
                    </div>
                    <div className='pb-6'>
                      <textarea name="message" id="message"
                        placeholder='Write your comment*'
                        required
                        className='border-2 border-[#00000030] px-2 py-1 rounded-[5px] text-[#8A8FB9] outline-0 focus:text-black w-full min-h-[106px] lg:min-h-[146px] pt-2'>
                      </textarea>
                      <div className='flex items-center gap-x-1 pt-2'>
                        <input type="checkbox" required />
                        <label htmlFor="" className='text-[8px] sm:text-[14px]'>
                          Save my name, email, and website in this browser for the next time I comment.
                        </label>
                      </div>
                    </div>
                    <div className=''>
                      <button type='submit' className='text-[#fff] text-[16px] font-semibold font-josefin w-full py-[9px] bg-[#FB2E86] rounded-[5px] hover:bg-[#952656] transition-all duration-300 ease-in-out cursor-pointer'>
                        Continue Shipping
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='pl-0 lg:pl-12'>
              <div className=''>
                <div className='max-w-[270px] pb-8'>
                  <h2 className='text-[#151875] font-bold font-josefin text-2xl pb-2'>Search</h2>
                  <div className='relative'>
                    <input type="search"
                      placeholder='Search For Posts'
                      className='w-full border-2 border-[#BDBDD8] py-2 px-3 rounded-[5px] placeholder:text-[#15187531] placeholder:text-bold no-clear focus:border-blue-300 outline-0 placeholder:text-lg'
                    />
                    <CiSearch className='absolute top-[50%] right-4 translate-y-[-50%]' />
                  </div>
                </div>
                <div className='max-w-90'>
                  <h2 className='text-[#151875] font-bold font-josefin text-2xl pb-4'>Categories</h2>
                  <div className='grid grid-cols-2'>
                    {aCategory.map((cat) => (
                      <div
                        className='text-[18px] inline-block cursor-pointer text-[#3F509E] font-bold font-josefin py-2 pl-3 hover:bg-[#F939BF] hover:text-white hover:rounded-[5px]'
                      >
                        {cat.name} ({cat.count})
                      </div>
                    ))}
                  </div>
                </div>
                <div className='py-8'>
                  <h2 className='text-[#151875] font-bold font-josefin text-2xl pb-4'>Recent Post</h2>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={re1} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>It is a long established fact</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={re2} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>It is a long established fact</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={re3} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>It is a long established fact</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={re4} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>It is a long established fact</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                </div>
                <div className='pb-8'>
                  <h2 className='text-[#151875] font-bold font-josefin text-2xl pb-4'>Sale Product</h2>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={sol1} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>Elit ornare in enim mauris.</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={sol2} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>Viverra pulvinar et enim.</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={sol3} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>Mattis varius donec fdsfd</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                </div>
                <div className='pb-8'>
                  <h2 className='text-[#151875] font-bold font-josefin text-2xl pb-4'>Sale Product</h2>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={sol1} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>Elit ornare in enim mauris.</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={sol2} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>Viverra pulvinar et enim.</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                  <div className='flex gap-x-2 pb-6'>
                    <div>
                      <img src={sol3} alt="" />
                    </div>
                    <div>
                      <h2 className='text-[16px] text-[#3F509E] font-bold font-josefin pb-1'>Mattis varius donec fdsfd</h2>
                      <p className='text-[11px] text-[#8A8FB9] font-bold font-lato'>Aug 09 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-16'>
            <img src={jj} alt="" className='w-full bg-cover' />
          </div>
        </Container>
      </section>
    </>
  )
}

export default SingleBlog