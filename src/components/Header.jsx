import React from 'react';
import header from '../Styles/Header.module.css';
import { Link, useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();

  const register = () => {
    navigate('/signup')
  }

  return (
    <div className={header.headerContainer}>
        <div className={header.logo}>
            <img src='assets/al-azhar.png' height="150" width="150" alt=''/>
        </div>
        <div className={header.title}>
            <p>
            Examinations Hub
            </p>
        </div>
        <div className={header.login}>
          <Link to="/auth/login" className={header.link}>Log In</Link>
            <button onClick={register}>Sign Up</button>
        </div>
    </div>
  )
}

export default Header