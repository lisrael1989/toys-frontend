import { Link } from 'react-router-dom'
import React from 'react'
// import logoImg from '../assets/Img/doll.png'
import logoImg from '../assets/Img/hero5.webp'


export function HomePage() {

  return (
    <section className='home-page home-preview flex '>
      <h1 className="home-page-slogan">Where Playtime Never Ends!</h1>
      <Link to="/toy"><img className=" bouncing-toy hero-img" src={logoImg} />
      </Link>
    </section >
  )
}