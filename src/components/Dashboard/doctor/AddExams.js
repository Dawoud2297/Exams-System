import React, { useState } from 'react'
import addExam from '../../../Styles/Dashboard/doctor/AddExam.module.css'
import QuestionBank from '../QuestionBank';
import ExamForm from './ExamForm';
import { useNavigate } from 'react-router-dom';
import identityPath from '../../../helpers/identityPath';
import { closeCreatedSuccessfully, setCategory } from '../../../store/createExams';
import { useDispatch, useSelector } from 'react-redux';

const AddExams = () => {
  const [questionBank, setQuestionBank] = useState(false)
  const additional = JSON.parse(localStorage.getItem('additional'))
  const id = additional?.id, user_token = additional?.additional?.user_token;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cancelCreatingExam = () => {
    localStorage.removeItem('examMode')
    localStorage.removeItem('draftData')
    localStorage.removeItem('loadingDraftData')
    dispatch(setCategory(''))
    navigate(identityPath(user_token, id))
  }


  const { createdSuccefully } = useSelector((state) => state.createExams)


  const afterCreatedSuccessfully = () => {
    dispatch(closeCreatedSuccessfully())
    navigate(identityPath(user_token, id))
  }


  return (
    <>
      {
        createdSuccefully && (
          <div className={addExam.successfully}>
            <p>
              Exam Is Created Successfully!
            </p>
            <button
              type='button'
              onClick={afterCreatedSuccessfully}
            >
              DONE!
            </button>
          </div>
        )}
      <div className={addExam.container}>
        {
          createdSuccefully && <div className={addExam.belongToSuccessed}></div>
        }
        <div className={addExam.leftControls}>
          {

          }
          <img src='/assets/al-azhar.png' height="70" width="70" alt='' />
          <div
            title='Questions Bank'
            className={addExam.openQB}
            onClick={() => setQuestionBank(!questionBank)}
          >
            &#128462;
          </div>
          <img
            src="/assets/Group 1440.svg"
            title='Cancel Creating Exam'
            onClick={cancelCreatingExam}
            alt='Exit'
          />
        </div>
        <div className={questionBank ? addExam.qbIsOpen : addExam.exForm}>
          {
            questionBank ? <QuestionBank setQuestionBank={setQuestionBank} /> : <ExamForm />
          }
        </div>
      </div>
    </>
  )
}

export default AddExams