import React from 'react'
import Container from '../components/Container'
import CartUp from '../components/CartUp'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from 'react-icons/io'
import { allRemoceCart, decrement, increment, productRemove } from '../components/slice/ProductSlice'
import { Link } from 'react-router-dom'
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { BsCartXFill } from 'react-icons/bs'

const Cart = () => {
  let data = useSelector((item)=>item.product.cartItem)
  let dispatch = useDispatch()

  let {totalPrice, totalQunatity} = data.reduce((acce, item)=>{
    acce.totalPrice += item.price * item.qun
    acce.totalQunatity += item.qun
    return acce;
  }, {totalPrice: 0, totalQunatity: 0})
  return (
    <>
      <CartUp/>
      <section className='py-16'>
        <Container>
          <div className='flex justify-between gap-6'>
            <div className='lg:w-2/3 w-full'>
              <table className='w-full'>
                {data.length > 0 && (
                  <thead>
                    <tr>
                      <th className='text-start py-6 text-[#1D3178] text-[20px] font-bold font-josefin'>Product</th>
                      <th className='text-start py-6 text-[#1D3178] text-[20px] font-bold font-josefin px-8'>Price</th>
                      <th className='text-start py-6 text-[#1D3178] text-[20px] font-bold font-josefin px-8'>Quantity</th>
                      <th className='text-start py-6 text-[#1D3178] text-[20px] font-bold font-josefin px-8'>Total</th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className='border-b-2 border-[#E1E1E4]'>
                      <th className='text-start text-[#1D3178] text-[14px] font-medium font-josefin py-4'>
                        <div className='flex items-center gap-x-4'>
                          <div className='relative'>
                            <img src={item.image_path} alt="" className='h-25 w-30' />
                            <div className='absolute top-[-8px] right-[-8px]'>
                              <IoMdClose
                                onClick={() => dispatch(productRemove(index))}
                                className='bg-white rounded-full text-2xl p-1 font-bold cursor-pointer border border-[#0000002e] hover:text-red-600'
                              />
                            </div>
                          </div>
                          <div>
                            <h2 className='font-bold font-josefin text-[#000] pb-2'>{item.name}</h2>
                            <p className='font-medium font-josefin text-[#A1A8C1] pb-2'>Finish: {item.finish}</p>
                            <p className='font-medium font-josefin text-[#A1A8C1]'>Wood Type: {item.wood_type}</p>
                          </div>
                        </div>
                      </th>
                      <th className='text-start text-[#1D3178] text-[14px] font-medium font-josefin px-8'>
                        <p>${item.price}</p>
                      </th>
                      <th className='text-start text-[#1D3178] text-[14px] font-medium font-josefin px-8'>
                        <div className='flex items-center gap-x-2'>
                          <button className='cursor-pointer' onClick={() => dispatch(decrement(index))}>
                            <FaMinus />
                          </button>
                          <p className='text-[#15245E] text-[16px] font-bold font-josefin'>{item.qun}</p>
                          <button className='cursor-pointer' onClick={() => dispatch(increment(index))}>
                            <FaPlus />
                          </button>
                        </div>
                      </th>
                      <th className='text-start text-[#1D3178] text-[14px] font-medium font-josefin px-8'>
                        {(item.price * item.qun).toFixed(2)}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.length > 0 && (
                <div className='flex justify-between items-center pt-8'>
                  <div>
                      <Link to={"/products"} className='text-[16px] font-semibold font-josefin bg-[#FB2E86] rounded-[5px] px-8 py-2 text-white cursor-pointer inline-block'>
                      Update Curt
                    </Link>
                  </div>
                  <div>
                      <button onClick={() => dispatch(allRemoceCart())} className='text-[16px] font-semibold font-josefin bg-[#FB2E86] rounded-[5px] px-8 py-2 text-white cursor-pointer'>
                      Clear Curt
                      </button>
                  </div>
                </div>
              )}
            </div>
            {data.length > 0 && (
             <div className='lg:w-1/3 w-full '>
              <div className='w-full pl-0 lg:pl-4 mt-6'>
                <h2 className='pb-6 text-center text-[#1D3178] text-[20px] font-bold font-josefin'>Cart Totals</h2>
                <table className='bg-[#F4F4FC] w-full rounded-[5px]'>
                  <tbody>
                    <tr className='border-b-2 border-[#E8E6F1]'>
                      <th className='py-6 text-start pl-6'>
                        <h4>Subtotals:</h4>
                      </th>
                      <th className='py-6 text-start'>${totalPrice.toFixed(2)}</th>
                    </tr>
                    <tr className='border-b-2 border-[#E8E6F1]'>
                      <th className='py-6 text-start pl-6'>
                        <h4>Total Quantity:</h4>
                      </th>
                      <th className='py-6 text-start'>{totalQunatity}</th>
                    </tr>
                    <tr className='border-b-2 border-[#E8E6F1]'>
                      <th className='py-6 pl-6 text-start'>
                        <h4>Totals:</h4>
                      </th>
                      <th className='py-6 text-start'>${totalPrice.toFixed(2)}</th>
                    </tr>
                    <tr>
                      <td colSpan={2} className='py-6'>
                        <div className='pb-6'>
                          <label htmlFor="" className='text-[14px] pl-6 flex gap-x-2'>
                            <input type="checkbox" required className='rounded-full accent-[#19D16F]' />
                            Shipping & taxes calculated at checkout
                          </label>
                        </div>
                        <div className='text-center px-6'>
                          <Link
                            to={"/checkout"}
                            className='bg-[#19D16F] w-full py-2 rounded-[5px] inline-block text-white text-[14px] font-bold font-lato'
                          >
                            Proceed To Checkout
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='w-full pl-0 lg:pl-4 mt-8'>
                <h2 className='pb-6 text-center text-[#1D3178] text-[20px] font-bold font-josefin'>Calculate Shopping</h2>
                <table className='bg-[#F4F4FC] w-full rounded-[5px]'>
                  <tbody>
                    <tr className='border-b-2 border-[#E8E6F1]'>
                      <th className='pb-2 pt-6 text-start pl-6'>
                        <input type="text" 
                          className='w-full py-2 border-0 outline-0'
                          required
                          autoComplete='address'
                          placeholder='Bangladesh'
                        />
                      </th>
                    </tr>
                    <tr className='border-b-2 border-[#E8E6F1]'>
                      <th className='pb-2 pt-6 text-start pl-6'>
                        <input type="text" 
                          className='w-full py-2 border-0 outline-0'
                          required
                          autoComplete='address'
                          placeholder='Mirpur Dhaka - 1200'
                        />
                      </th>
                    </tr>
                    <tr className='border-b-2 border-[#E8E6F1]'>
                      <th className='pb-2 pt-6 text-start pl-6'>
                        <input type="text" 
                          className='w-full py-2 border-0 outline-0'
                          required
                          autoComplete='address'
                          placeholder='Postal Code'
                        />
                      </th>
                    </tr>
                    <tr className=''>
                      <th className='pb-6 pt-6 text-start pl-6'>
                        <button className='text-[16px] font-semibold font-josefin bg-[#FB2E86] rounded-[5px] px-12 py-3 text-white cursor-pointer'>
                          Calculate Shiping
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
             </div>
            )}
          </div>
          {data.length > 0 ? "" : <div className='text-center'>
            <h2 className='text-3xl text-[#262626] font-bold font-dms text-center pb-6'>Your Cart is Empty <BsCartXFill className='inline-block'/></h2>
            <div className='text-center'>
              <Link to={"/products"} className='text-2xl text-[#fff] font-bold font-dms bg-[#262626] py-2 px-12 rounded-[5px] hover:bg-[#262626a8]'>
                Continue Shopping
              </Link>
            </div>
          </div>}
        </Container>
      </section>
    </>
  )
}

export default Cart