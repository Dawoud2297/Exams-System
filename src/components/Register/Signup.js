import React, { useState } from 'react'
import signup from '../../Styles/Register/Signup.module.css';
import { Link } from 'react-router-dom';
import { signupData } from '../../store/signup';
import { useDispatch } from 'react-redux';


const Signup = (props) => {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '', role: props.identity })

  const dispatch = useDispatch();

  console.log(user)

  const backward = () => {
    props.setFirstTime(true)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupData(user))
  }

  return (
    <div className={signup.signupContainer}>
      <div className={signup.logo}>
        <img src='assets/al-azhar.png' height="150" width="150" alt='' />
      </div>
      <img
        src='assets/Path 797.svg'
        title='Backward'
        className={signup.backward}
        onClick={backward}
        alt=''
      />
      <div className={signup.card}>
        <div className={signup.cardTitle}>
          Sign up as {props.identity === 'student' ? 'a' : 'an'} {props.identity}
        </div>
        <form className={signup.form} onSubmit={handleSubmit}>
          <label className={signup.firstName}>
            <input
              type='text'
              name='firstName'
              value={user.firstName}
              onChange={handleChange}
              placeholder='First Name'
              required
            />
          </label>
          <label className={signup.lastName}>
            <input
              type='text'
              name='lastName'
              value={user.lastName}
              onChange={handleChange}
              placeholder='Last Name'
              required
            />
          </label>

          <label className={signup.email}>
            <input
              type='email'
              name='email'
              value={user.email}
              onChange={handleChange}
              placeholder='Work email address'
              required
            />
          </label>

          <label className={signup.password}>
            <input
              type='password'
              name='password'
              value={user.password}
              onChange={handleChange}
              placeholder='Password ( 8 or more characters )'
              required
            />
          </label>
          {
            props.identity === 'instructor' ? (
              <label className={signup.key}>
                {/* <input type='text' name='key' placeholder='key' required/> */}
              </label>
            ) : (
              <label className={signup.id}>
                {/* <input type='text' name='id' placeholder='ID' required/> */}
              </label>
            )
          }
          <button type='submit' className={signup.submit}>Create Profile</button>
          <p>Already have an account? <Link to='/auth/login'>Log In</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup