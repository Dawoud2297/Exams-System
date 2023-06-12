import React, { useEffect, useState } from 'react'
import daHeader from '../../Styles/Dashboard/Dash_Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { setIdentity } from '../../store/identity';
import { logoutDashboard } from '../../store/examsTypes';
import { deleteQuestionPrompt } from '../../store/questionActions';
import identityPath from '../../helpers/identityPath';

const DashboardHeader = ({ header }) => {
    const [logoutPopup, setLogoutPopup] = useState(false)
    const { deletion_is_done, addition_is_done } = useSelector((state) => state.questionActions)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createExamMode = JSON.parse(localStorage.getItem('examMode'))?.createExamMode
    const additional = JSON.parse(localStorage.getItem('additional'))
    const id = additional?.id, user_token = additional?.additional?.user_token, role = additional?.additional.role;
    const name = additional?.additional.name

    const setUserName = (name) => {
        let op = name.split(" ");
        return `${op[0][0]}${op[1][0]}`
    }


    useEffect(() => {
        setTimeout(() => {
            if (deletion_is_done || addition_is_done) {
                dispatch(deleteQuestionPrompt())
            }
        }, 1000)
    }, [addition_is_done, deletion_is_done, dispatch])

    const cancelCreatingExam = () => {
        localStorage.removeItem('examMode')
        navigate(identityPath(user_token, id))
    }

    const logoutUser = () => {
        dispatch(logout());
        dispatch(setIdentity(''));
        dispatch(logoutDashboard())
        navigate('/');
    }
    return (
        <div className={daHeader.container}>
            <div className={daHeader.logo}>
                <img src='/assets/al-azhar.png' height="55" width="55" alt='' />
            </div>
            <div className={daHeader.middle}>
                <p>
                    {header}
                    <span>
                        {
                            role === "instructor" ? 'instructor' : 'student'
                        }
                    </span>
                </p>
            </div>
            {
                createExamMode ? (
                    <div className={daHeader.profile}>
                        <p onClick={cancelCreatingExam}>Cancle</p>
                    </div>
                ) : (
                    <div className={daHeader.profile}>
                        {
                            logoutPopup &&
                            <div className={daHeader.logout}>
                                <button onClick={logoutUser}>
                                    LOGOUT
                                </button>
                            </div>
                        }
                        <p onClick={() => setLogoutPopup(!logoutPopup)}>
                            {/* MA */}
                            {setUserName(name)}
                        </p>
                    </div>
                )
            }
            {
                deletion_is_done &&
                <div className={daHeader.response}>
                    <p>
                        Question's Deleted Successfully!
                    </p>
                </div>
            }
            {
                addition_is_done &&
                <div className={daHeader.response}>
                    <p>
                        Question's Added Successfully!
                    </p>
                </div>
            }
        </div>
    )
}

export default DashboardHeader
