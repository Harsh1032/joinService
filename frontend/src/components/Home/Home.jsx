import React from 'react'
import ImageSlider from './ImageSlider'
import Hero from './Hero'
import Pricing from './Pricing'
import Contact from './Contact'
import MissionVision from "./MissionVision";
import OurFounder from "./OurFounder";

const Home = () => {
  return (
    <div id="" className='w-full min-h-screen '>
        <ImageSlider/>
        <MissionVision />
        <Pricing/>
        <Hero/>
        <OurFounder />
        <Contact/>
    </div>
  )
}

export default Home