import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './Container'

const ProductsDetails = () => {
  let [singleProduct, setSingleProduct] = useState([])
  let productId = useParams()
  let getproductId = ()=>{
    axios.get(`https://furniture-api.fly.dev/v1/products?limit=100&offset=0/${productId.id}`).then((response)=>{
      setSingleProduct(response.data)
    })
  }
  useEffect(()=>{
    getproductId()
  }, [])

  return (
    <section>
      <Container>
        <div className="text-center">
          <img 
            src={singleProduct.image_path} 
            alt={singleProduct.title} 
            className="mx-auto w-64 h-64"
          />
          <h2 className="text-2xl font-bold mt-4">{singleProduct.name}</h2>
        </div>
      </Container>
    </section>
  )
}

export default ProductsDetails
