import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './Container'

const ProductsDetails = () => {
  let [allProducts, setAllProducts] = useState([])
  let [singleProduct, setSingleProduct] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    axios.get(`https://furniture-api.fly.dev/v1/products?limit=100&offset=0`)
      .then((response) => {
        setAllProducts(response.data.data)

        const product = response.data.data.find(
          (item) => String(item.id) === id
        )
        setSingleProduct(product)
      })
      .catch((error) => {
        console.error("Error fetching product:", error)
      })
  }, [id])

  if (!singleProduct) {
    return <p className="text-center">Loading...</p>
  }

  return (
    <section>
      <Container>
        <div className="text-center">
          <img 
            src={singleProduct.image_path} 
            alt={singleProduct.title} 
            className="mx-auto w-64 h-64 object-contain"
          />
          <h2 className="text-2xl font-bold mt-4">{singleProduct.title}</h2>
          <p className="mt-2 text-gray-600">{singleProduct.description}</p>
          <p className="mt-2 font-semibold text-lg">${singleProduct.price}</p>
        </div>
      </Container>
    </section>
  )
}

export default ProductsDetails
