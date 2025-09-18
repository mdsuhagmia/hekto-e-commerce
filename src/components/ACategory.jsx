import React, { useContext, useEffect, useState } from 'react'
import { apiData } from './ContextApi'

const ACategory = () => {
  let data = useContext(apiData)
  let [aCategory, setACategory] = useState([])
  useEffect(()=>{
    let cate = ([...new Set(data.map((item)=>item.category))])
    setACategory(cate)
  },[data])
  console.log(aCategory)
  return (
    <div>

    </div>
  )
}

export default ACategory