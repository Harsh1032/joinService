import React from 'react'
import ImageSlider from './ImageSlider'
import Hero from './Hero'
import Pricing from './Pricing'
import Contact from './Contact'

const Home = () => {
  return (
    <div id="" className='w-full min-h-screen '>
        <ImageSlider/>
        <Hero/>
        <Pricing/>
        <Contact/>
    </div>
  )
}

export default Home