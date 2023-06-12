import React, { useEffect, useState } from 'react'
import daBody from '../../../Styles/Dashboard/doctor/Dashboard.module.css'
import DiffExams from './DiffExams'
import QuestionBank from '../QuestionBank'
import { useNavigate } from 'react-router-dom'
import identityPath from '../../../helpers/identityPath'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setExamMode } from '../../../store/createExams'
import { getDraftReq, getDraftsReq, setDraftEditor, turnOnLoading } from '../../../store/drafts'

const userAdditional = JSON.parse(localStorage.getItem('additional'))
const id = userAdditional?.id, user_token = userAdditional?.additional?.user_token;


const Dashboard = (props) => {
    const [questionBank, setQuestionBank] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { drafts, loading } = useSelector((state) => state.draftsSlice)

    const questionsBank = () => {
        setQuestionBank(true)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const createExam = (category) => {
        dispatch(setCategory(category))
        dispatch(setExamMode(true))
        navigate(`${identityPath(user_token, id)}/createExam`)
    }




    const editDraft = (draftId) => {
        dispatch(getDraftReq(draftId))
        dispatch(setDraftEditor())
        dispatch(turnOnLoading())
    }




    useEffect(() => {
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem('draftData'))) {
                navigate(`${identityPath(user_token, id)}/createExam`)
            }
        }, 2000)
        return () => {
            // misleading only
            if (JSON.parse(localStorage.getItem('dD'))) {
                navigate(`${identityPath(user_token, id)}`)
            }
        }
    }, [navigate, loading])


    console.log(drafts)



    const token = JSON.parse(localStorage.getItem('additional'))?.additional?.user_token;
    useEffect(() => {
        setTimeout(() => {
            dispatch(getDraftsReq(token))
        }, 1000)
    }, [dispatch, token])


    const openStudentsData = () => {
        navigate(`${identityPath(user_token, id)}/students-data`)
    }


    return (
        <div className={daBody.container}>
            <div className={daBody.leftHand}>
                <div className={daBody.photo}>
                    <img
                        src={props?.photo !== null ? props.photo : '/assets/placeholder-doctor.jpg'}
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
                            <li onClick={openStudentsData}>Students</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={daBody.addExams}>
                <div>
                    <h2>Create &#128073;
                    </h2>
                    <small>
                        Note you won't be able to create one if there's the same type in drafts
                    </small>
                </div>
                <button onClick={() => createExam('quiz')}>Quiz</button>
                <button onClick={() => createExam('mid_term')}>Mid-Term</button>
                <button onClick={() => createExam('final')}>Final</button>
            </div>
            <div className={daBody.archive}>
                <div className={daBody.draftsHeader}>Drafts &#9203;</div>
                {
                    loading ? (
                        <div className={daBody.loader}></div>
                    ) : (

                        drafts?.length > 0 && drafts?.map((draft) => (
                            <button className={daBody.draft} disabled={loading} onClick={() => editDraft(draft._id)}>
                                <div className={daBody.draftHeader}>
                                    <p>{draft.title}</p>
                                    <p>{draft.category}</p>
                                </div>
                                <p>{draft.description}</p>


                            </button>
                        ))
                    )
                }
            </div>
            <div className={daBody.stuGrade}>
                <h1>Students Grades</h1>
            </div>

            <div className={questionBank ? daBody.qbOn : daBody.qbOff}>
                <QuestionBank setQuestionBank={setQuestionBank} />
            </div>
            <DiffExams />

        </div >
    )
}

export default Dashboard