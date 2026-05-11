
import React from 'react'
import NavBar from './Components/NavBar'
import Bannar from './Components/Bannar'
import AboutUs from './Components/AboutUs'
import Features from './Components/Features'
import Blog from './Components/Blog'
import KeyBenefits from './Components/KeyBenefits'
import Footer from './Components/Footer'
import Schedule from './Components/Schedule'
import OurSpeakers from './Components/OurSpeakers'
import Video from './Components/Video'
import Testimonial from './Components/Testimonial'
import Pricing from './Components/Pricing'
import FAQ from './Components/FAQ'
import Image from './Components/Image'


const App = () => {
  return (
    <div>
      <NavBar />
      <Bannar />
      <AboutUs />
      <Features />
      <KeyBenefits />
      <Schedule />
      <OurSpeakers />
      <Image/>
      <Pricing/>
      <Video />
      <FAQ/>
      <Testimonial/>
      <Blog />
      <Footer />

    </div>
  )
}

export default App
