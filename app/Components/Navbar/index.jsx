'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import Login from '@/app/utils/loginContext'
import { useRouter } from 'next/navigation'
export default function Navbar() {
  const {token,handleToken} = useContext(Login)
  const router = useRouter();
  const handleLoginClick = () => {
    if (token) {
      handleToken(null)
    } else {
      router.push('/login');
    }
  };
  return (
    <nav style={{ position: 'sticky', width: '100%' ,top:'0',zIndex:'999'}} className="navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid">
        <Link className="navbar-brand" href={'/'}>Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span style={{ cursor: 'pointer' }} onClick={()=>{handleLoginClick()}} className="nav-link active" aria-current="page">
                {token ? 'Logout' : 'Login'}
              </span>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href={'/about'}>About</Link>
            </li>


          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}