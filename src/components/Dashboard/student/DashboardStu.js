import React, { useEffect, useState } from 'react'
import daBody from '../../../Styles/Dashboard/student/Dashboard.module.css'
import QuestionBank from '../QuestionBank'
import { useDispatch, useSelector } from 'react-redux'
import { createProfileReq } from '../../../store/createProfile'
import { totalStudentsExamsReq } from '../../../store/studentSubmission'
import Void from '../../Void'
import { useNavigate } from 'react-router-dom'
import identityPath from '../../../helpers/identityPath'
import sortByDate from '../../../helpers/sortByDate'

const DashboardStu = (props) => {
  const userAdditional = JSON.parse(localStorage.getItem('additional'));
  const userId = userAdditional?.id, user_token = userAdditional?.additional?.user_token
  const { totalStuExams } = useSelector((state) => state.studentSubmission)

  const initialState = () => {
    return { userName: '', bio: '', userPic: '', user_token }
  }

  const [questionBank, setQuestionBank] = useState(false)
  const [editProfile, setEditProfile] = useState(false)
  const [editProfileData, setEditProfileData] = useState(initialState)

  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(totalStudentsExamsReq(user_token))
  }, [dispatch, user_token])



  const questionsBank = () => {

    setQuestionBank(true)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const editProfileMode = () => {
    setEditProfile(!editProfile)
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEditProfileData({
      ...editProfileData,
      [name]: value
    })
  }



  const profileData = {
    photo: editProfileData.userPic,
    bio: editProfileData.bio,
    userName: editProfileData.userName,
    token: editProfileData.user_token
  }


  const handleSubmit = () => {
    dispatch(createProfileReq(profileData))
    setEditProfile(false)
    setEditProfileData(initialState)
  }

  const naivgate = useNavigate();
  const openExam = (id) => {
    localStorage.setItem('openExamId', JSON.stringify(id))
    naivgate(`${identityPath(user_token, userId)}/exam`)
  }

  let sortedData = totalStuExams ? sortByDate(totalStuExams) : [];


  return (
    <>
      {
        <div className={daBody.container}>
          <div className={daBody.leftHand}>
            <div className={daBody.photo}>
              <img
                // src={props.photo ? (
                //   props.photo
                // ) : (
                //   '/assets/placeholder-doctor.jpg'
                // )
                // }
                src='/assets/placeholder-doctor.jpg'
                height="80"
                width="80"
                alt='!!'
                title={props.email}
              />
              <p
                title={props.email}
              >
                {props.firstName} {props.lastName} <br />
                {
                  editProfile ?
                    <input
                      type='text'
                      name='userName'
                      value={editProfileData.userName}
                      onChange={handleChange}
                    /> : <span>{props.userName}</span>
                }
              </p>
              <div
                onClick={editProfileMode}
                title='Edit Profile'
              >
                {
                  editProfile ? <>&#128473;</> : <>&#x270E;</>
                }
              </div>
            </div>
            <div className={daBody.leftHandBody}>
              <div className={daBody.bio}>
                {
                  editProfile ? <textarea
                    type='text'
                    name="bio"
                    value={editProfileData.bio}
                    onChange={handleChange}
                    maxLength="419"
                  ></textarea> : <p>
                    {props.bio}
                  </p>
                }
                {
                  editProfile && <button onClick={handleSubmit}>Submit</button>
                }
              </div>
              <p className={daBody.stCode}>Student Code: {props.stCode}</p>
              <div className={daBody.otherShortHands}>
                <div className={daBody.line}></div>
                <ul>
                  <li onClick={questionsBank}>Questions Bank</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={daBody.block}>
            <p>BLOCK1</p>
            <p>BLOCK1</p>
            <p>BLOCK1</p>
            <p>BLOCK1</p>
            <p>BLOCK1</p>
          </div>
          <div className={daBody.studetnExams}>
            <div className={daBody.studetnExamsDataHeader}>
              <p>Exam</p>
              <p>Title</p>
              <p>Description</p>
              <p>Score</p>
            </div>
            {
              totalStuExams?.length ? (sortedData?.map((tse) => (
                <div onClick={() => openExam(tse._id)} className={daBody.studetnExamsDataBody}>
                  <p>{tse.category}</p>
                  <p>{tse.title}</p>
                  <p>{tse.description}</p>
                  <p>{tse.score}</p>
                </div>
              ))) : (
                <Void />
              )
            }
          </div>
          <div className={questionBank ? daBody.qbOn : daBody.qbOff}>
            <QuestionBank setQuestionBank={setQuestionBank} />
          </div>
        </div>
      }
    </>
  )
}

export default DashboardStu