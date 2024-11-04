import React from 'react'
import Navbar from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import Conocenos from './components/Conocenos'
import Precios from './components/Precios'
import Testimonios from './components/Testimonios'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        <Conocenos />
        <Precios />
        <Testimonios />
        <Footer />
      </div>
    </div>
  )
}

export default App