import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/> 
      <Contact/>
      <Footer/>
    </div>
  )
}


export default App