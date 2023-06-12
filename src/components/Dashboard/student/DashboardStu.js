import React, { useState } from 'react'
import daBody from '../../../Styles/Dashboard/student/Dashboard.module.css'
import QuestionBank from '../QuestionBank'
const DashboardStu = (props) => {
  const [questionBank, setQuestionBank] = useState(false)

  const questionsBank = () => {
    setQuestionBank(true)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={daBody.container}>
      <div className={daBody.leftHand}>
        <div className={daBody.photo}>
          <img
            src={props.photo ? (
              props.photo
            ) : (
              '/assets/placeholder-doctor.jpg'
            )
            }
            height="80"
            width="80"
            alt='!!'
          />
          <p>
            Mahmoud Dawood Dawood <br />
            {/* {} */}
            <span>{props.userName}</span>
          </p>
        </div>
        <div className={daBody.leftHandBody}>
          <div className={daBody.bio}>
            <p>
              Enim aliqua adipisicing velit magna adipisicing ad dolore amet.
              Qui nostrud enim labore amet veniam tempor reprehenderit do amet exercitation.
              Deserunt amet adipisicing sunt ut officia ea aliquip in incididunt laboris commodo.
              Ex eiusmod elit fugiat eiusmod aliqua. Exercitation qui velit cillum Lorem sunt eiusmod et incididunt.
              Laboris sit commodo officia fugiat officia qui non duis ut. Culpa elit magna enim reprehe
            </p>
          </div>
          <div className={daBody.line}></div>
          <div className={daBody.otherShortHands}>
            <ul>
              <li onClick={questionsBank}>Questions Bank</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={daBody.addExams}>
        <h1>Place holder1</h1>
      </div>
      <div className={daBody.archive}>
        <h1>Place holder2</h1>
      </div>
      <div className={daBody.stuGrade}>
        <h1>Place holder3</h1>
      </div>
      <div className={questionBank ? daBody.qbOn : daBody.qbOff}>
        <QuestionBank setQuestionBank={setQuestionBank} />
      </div>
    </div>
  )
}

export default DashboardStu