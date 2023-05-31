import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cProfile from '../../Styles/Register/createprofile.module.css';
import { letUserLoggedIn, signupKeepLogin } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import identityPath from '../../helpers/identityPath';

const CreateProfile = () => {
  const { user, keepUserLoggedIn, user_token } = useSelector((state) => state.auth);
  const { identity } = useSelector((state) => state.identity);
  const [additional, setAdditional] = useState({ userName: '', userPic: '', bio: '', role: user.role });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setLocalUser = () => {
    let userAdditionalData = { id: user._id, additional }
    localStorage.setItem("additional", JSON.stringify(userAdditionalData))
  }
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'userName') {
      setAdditional({
        ...additional,
        [name]: '@' + value
      })
    } else {
      setAdditional({
        ...additional,
        [name]: value
      })
    }
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAdditional({
        ...additional,
        userPic: URL.createObjectURL(event.target.files[0])
      });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalUser();
    if (keepUserLoggedIn) {
      dispatch(signupKeepLogin())
    }
    navigate(identityPath(identity, user_token))
  }

  let userImg = JSON.parse(localStorage.getItem('additional'))
  // console.log(userImg?.additional?.userPic)
  return (
    <div className={cProfile.cProfileContainer}>
      <img src='assets/al-azhar.png' height="150" width="150" alt='' />
      <div className={cProfile.card}>
        <div className={cProfile.cardTitle}>
          {
            `Welcome ${user.first_name}`
          }
        </div>
        <form className={cProfile.form} onSubmit={handleSubmit}>
          <label className={cProfile.pic}>
            User Photo:
            <input
              type='file'
              name='userPic'
              placeholder='Choose a photo'
              onChange={onImageChange}
            />
          </label>
          <label className={cProfile.userName}>
            User Name:
            <span>@</span>
            <input
              type='text'
              name='userName'
              placeholder={`User Name : @${user.first_name}123`}
              onChange={handleChange}
              autoFocus
              required
            />
          </label>

          <label className={cProfile.bio}>
            Fill Out Bio:
            <textarea
              placeholder='Bio'
              name='bio'
              maxLength="419"
              required
              onChange={handleChange}
            ></textarea>
            <strong>
              419 characters at most
            </strong>
          </label>
          <label className={cProfile.checkLogin}>
            <input
              type='checkbox'
              name='keepLogged'
              onClick={() => dispatch(letUserLoggedIn())}
            />
            <span>
              Keep me logged in
            </span>
          </label>
          <button
            type='submit'
            className={cProfile.submit}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <img src={userImg?.additional?.userPic}
          alt='No'
          height="80"
          width="80"
        />
      </div>
    </div>
  )
}

export default CreateProfile