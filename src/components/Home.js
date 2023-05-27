import React from 'react'
import Header from './Header'
import About from './About'
import home from '../Styles/Home.module.css'
import Footer from './Footer'

const Home = () => {
  return (
    <div className={home.homeContainer}>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default Home