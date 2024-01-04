'use client'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Loading from '../Components/Loading/Loading'
export default function Home() {
  const [data, setData] = useState()
  const handleLogin = (data) => {
    setData(data)
  }
  useEffect(() => {
    (async () => {
      const res = await fetch('https://asos-com1.p.rapidapi.com/products/search?q=shearling%20jacket', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '59f13bab99msh18642c09b976e69p12277ajsn8cb901f6bdc4',
          'X-RapidAPI-Host': 'asos-com1.p.rapidapi.com'
        }
      })
      const data = await res.json()
      setData(data.data.products)
    })()
  }, [])
  const items = data?.map((item,index) => {
    return (

      <Card key={index} title={item.brandName} description={item.name} url={item.url} image={item.imageUrl}/>
      )
  })
  return (
    <div className='Home'style={{minHeight:'80vh'}}>{data ? items:<Loading/>}{console.log(data)}</div>
  )
}