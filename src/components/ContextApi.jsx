import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

let apiData = createContext()

const ContextApi = ({children}) => {
  // https://api.escuelajs.co/api/v1/products
  // https://fakestoreapi.com/products?
  // https://furniture-api.fly.dev/v1/products?limit=100&offset=0
  // https://furniture-api.fly.dev/v1/products?category=chair&wood_type=oak&max_price=500&sort=price_asc&limit=100&offset=0?
  
  let [info, setInfo] = useState([])
  let data = ()=>{
    axios.get("https://furniture-api.fly.dev/v1/products?limit=100&offset=0").then((response)=>{
      setInfo(response.data.data)
    })
  }
  useEffect(()=>{
    data()
  }, [])
  return (
    <>
     <apiData.Provider value={info}>{children}</apiData.Provider>
    </>
  )
}

export {ContextApi, apiData}