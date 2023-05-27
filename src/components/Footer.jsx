import React from 'react'
import footer from '../Styles/Footer.module.css'


const Footer = () => {
  return (
    <div className={footer.footerContainer}>
      <div className={footer.logo}>
        <img src='assets/alazhar-logo2.png' height="200" width="250" alt='' />
      </div>
      <div className={footer.section}>
        <ul className={footer.info}>
          <li>Contact Us</li>
          <li>See Statistics</li>
          <li>Read More</li>
          <li>Register</li>
        </ul>
      </div>
      <div className={footer.section3}>

        <div className={footer.contacts}>
          <img src='assets/Group 1432.svg' alt='' />
          <p>/Alazhar</p>
        </div>
        <div className={footer.contacts}>
          <img src='assets/Group 1433.svg' alt='' />
          <p>/Alazhar</p>
        </div>
        <div className={footer.contacts}>
          <img src='assets/Group 1434.svg' alt='' />
          <p>/Alazhar</p>
        </div>

      </div>
    </div>
  )
}

export default Footer