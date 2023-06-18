import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import daHome from '../../Styles/Dashboard/DashboardHome.module.css'
import DashboardHeader from './DashboardHeader'
import Dashboard from './doctor/Dashboard'
import DashboardStu from './student/DashboardStu'
import { selectAuthType } from '../../store/auth'
import { getProfileReq } from '../../store/createProfile'
import { getStudentExamReq } from '../../store/studentExam'
import StudentExam from './student/StudentExam'
import { openExamDrReq } from '../../store/openExamsFtDr'
import { studetnAlreadySubmitted } from '../../store/studentSubmission'


const DashboardHome = () => {
    
    const { totalStuExams, studentSubmitted } = useSelector((state) => state.studentSubmission)
    const dispatch = useDispatch();
    dispatch(selectAuthType('authorized'));
    let localUser = JSON.parse(localStorage.getItem('additional')).additional;
    let role = localUser.role

    /** */
    // Tied Route
    localStorage.setItem('lock-routes', JSON.stringify('pop'))
    /** */

    const { exam } = useSelector((state) => state.studentExam)
    const { userProfile } = useSelector((state) => state.createProfile)

    useEffect(() => {
        dispatch(getProfileReq(localUser.user_token))
    }, [dispatch, localUser.user_token])


    useEffect(() => {
        dispatch(getStudentExamReq())
    }, [dispatch])

    console.log(userProfile)


    useEffect(() => {
        if (exam) {
            dispatch(openExamDrReq(exam?._id))
        }
    }, [dispatch, exam])



    useEffect(() => {
        for (let ex of totalStuExams) {
            if (ex?._id === exam?._id) {
                dispatch(studetnAlreadySubmitted())
            }
        }
    }, [dispatch, exam?._id, totalStuExams])


    console.log(studentSubmitted)

    return (
        <div className={daHome.container}>
            {
                (role === 'student' && (exam?._id && !studentSubmitted)) ? '' :
                    <DashboardHeader header='DASHBOARD' />
            }
            {
                role === 'instructor' ?
                    <Dashboard
                        firstName={userProfile?.first_name}
                        lastName={userProfile?.last_name}
                        photo={userProfile?.profileImageUrl}
                        userName={userProfile?.username}
                        bio={userProfile?.bio}
                        email={userProfile?.email}
                    /> : (
                        (exam?._id && !studentSubmitted) ? (
                            <StudentExam />
                        ) : (
                            <DashboardStu
                                firstName={userProfile?.first_name}
                                lastName={userProfile?.last_name}
                                photo={userProfile?.profileImageUrl}
                                userName={userProfile?.username}
                                stCode={userProfile?.stCode}
                                bio={userProfile?.bio}
                                email={userProfile?.email}
                            />

                        )
                    )
            }
        </div>
    )
}

export default DashboardHome