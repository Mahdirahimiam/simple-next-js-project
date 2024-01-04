'use client'
import Loading from '@/app/Components/Loading/Loading'
import React, { useEffect, useRef, useState } from 'react'

export default function productDetails({ params }) {
  const des = useRef()
  const [product, setProduct] = useState()
  useEffect(() => {
    (async () => {
 try {
  const res = await fetch(`https://asos-com1.p.rapidapi.com/products/detail?url=${params.prd[10]}/${params.prd[1]}/${params.prd[2]}/${params.prd[3]}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '59f13bab99msh18642c09b976e69p12277ajsn8cb901f6bdc4',
      'X-RapidAPI-Host': 'asos-com1.p.rapidapi.com'
    }
  })
  const data = await res.json()
  setProduct(data.data)
  des.current.innerHTML = data.data.description.brandDescription
 } catch (error) {
  console.log(error)
 }
    })()
  }, [])
  return (
    <div className='prd'>{product ? <div class="card mb-3" style={{ maxWidth: "70%" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={product.images[0].url} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{product.brandName}</h5>
            <p ref={des} class="card-text"></p>
            <p class="card-text"><small class="text-body-secondary">Price : {product.price[0].productPrice.current.text}</small></p>
            {/* {product.price.productPrice.current.text} */}
          </div>
        </div>
      </div>
    </div> : <Loading />}</div>
  )
}
