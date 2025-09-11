import React from 'react'
import Banner from '../components/Banner'
import FeaturedProducts from '../components/FeaturedProducts'
import LeatestProducts from '../components/LeatestProducts'
import Shopex from '../components/Shopex'
import Unique from '../components/Unique'
import TrendingProducts from '../components/TrendingProducts'
import TrendDown from '../components/TrendDown'
import DiscountItem from '../components/DiscountItem'
import TopCategories from '../components/TopCategories'
import UpdateProd from '../components/UpdateProd'
import LeatestBlog from '../components/LeatestBlog'
import Unique2 from '../components/Unique2'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturedProducts/>
      <LeatestProducts/>
      <Shopex/>
      <Unique/>
      <Unique2/>
      <TrendingProducts/>
      <TrendDown/>
      <DiscountItem/>
      <TopCategories/>
      <UpdateProd/>
      <LeatestBlog/>
    </div>
  )
}

export default Home