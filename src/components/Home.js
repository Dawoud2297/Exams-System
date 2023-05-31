import React from 'react'
import Header from './Header'
import About from './About'
import home from '../Styles/Home.module.css'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { selectAuthType } from '../store/auth'



const Home = () => {
  const dispatch = useDispatch();

  const setAuthSignUp = (type) => {
    dispatch(selectAuthType(type))
  }
  return (
    <div className={home.homeContainer}>
      <Header setAuthSignUp={setAuthSignUp} />
      <About setAuthSignUp={setAuthSignUp} />
      <Footer />
    </div>
  )
}

export default Home