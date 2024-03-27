import { Link } from 'react-router-dom'
import React from 'react'

import logoImg from '../assets/Img/hero123.png'
// import logoImg from '../assets/Img/doll111.png'


export function HomePage() {

  return (
    <section className='home-page home-preview flex '>
      <h1 className="home-page-slogan">Where  <br /><span>Play time</span> Never Ends!</h1>
      <Link to="/toy"><img className=" bouncing-toy hero-img" src={logoImg} />
      </Link>
    </section >
  )
}