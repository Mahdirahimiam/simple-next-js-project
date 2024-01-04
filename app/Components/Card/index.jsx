import Link from 'next/link'
import React from 'react'

export default function Card({image,title,description,url}) {
  return (
<div class="card" style={{width: "300px",height:"450px",position:'relative'}}>
  <img style={{width:'100%',height:'60%'}} src={"https://"+image} class="card-img-top" alt="..."/>
  <div style={{height:'40%',width:'100%'}} class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description.slice(0,100)}...</p>
    <Link style={{position:'absolute',bottom:'15px'}} href={`/home/${url}`} class="btn btn-primary">More Details</Link>
  </div>
  {/* ${description.split(' ').join('-')} */}
</div>
  )
}
