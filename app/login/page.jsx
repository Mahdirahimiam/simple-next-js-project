'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import style from './login.module.css'
import Navbar from '../Components/Navbar'
export default function Login() {
  const token = useContext(Login)
  return (<>
  {console.log(token)}
  <body className={style.body}>
  <form className={style.form}>
      <input className={style.input} placeholder='Enter UserName' type="text" name="" id="" />
      <input className={style.input} placeholder='Enter Password' type="password" name="" id="" />
      <button className={style.button}>Submit</button>
    </form>
  </body>
  </>

  )
}
