import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

let apiData = createContext()
let apiData1 = createContext()

const ContextApi = ({children}) => {
  // https://fake-store-api.mock.beeceptor.com/api/products
  // https://api.escuelajs.co/api/v1/products
  // https://fakestoreapi.com/products?
  // https://furniture-api.fly.dev/v1/products?limit=100&offset=0
  // https://furniture-api.fly.dev/v1/products?category=chair&wood_type=oak&max_price=500&sort=price_asc&limit=100&offset=0?
  
  let [info, setInfo] = useState([])
  let [aInfo, setAInfo] = useState([])
  let data = ()=>{
    axios.get("https://furniture-api.fly.dev/v1/products?limit=100&offset=0").then((response)=>{
      setInfo(response.data.data)
    })
  }
  let aData = ()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=>{
      setAInfo(response.data)
    })
  }
  useEffect(()=>{
    data(), aData()
  }, [])
  return (
    <>
     <apiData.Provider value={info}>
       <apiData1.Provider value={aInfo}>
         {children}
       </apiData1.Provider>
     </apiData.Provider>
    </>
  )
}

export {ContextApi, apiData, apiData1}