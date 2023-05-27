import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Login-module.css'

const Login = (props) => {
    const navigate = useNavigate();
    const backward = () => {
        navigate('/')
    }
    return (
        <div className="loginContainer">
            <div className="logo">
                <img src='/assets/al-azhar.png' height="150" width="150" alt='' />
            </div>
            <img
                src='/assets/Path 797.svg'
                title='Backward'
                className="backward"
                onClick={backward}
                alt=''
            />
            <div className="card">
                <div className="cardTitle">
                    Log In
                </div>
                <form className="form">
                    <label className="email">
                        <input type='email' name='email' placeholder='Work email address' />
                    </label>
                    <label className="password">
                        <input type='password' name='password' placeholder='Password' />
                    </label>
                    <button type='submit' className="submit">Log In</button>
                    <p>Don't have an account?  <Link to='/signup'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login