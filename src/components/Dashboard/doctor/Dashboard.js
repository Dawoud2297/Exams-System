import React from 'react'
import daBody from '../../../Styles/Dashboard/doctor/Dashboard.module.css'
import DiffExams from './DiffExams'

const mockArchive = ['Math', 'Quantum', 'general Physics']

const Dashboard = (props) => {

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
                        alt=''
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
                    <div className={daBody.other}>

                        <p>Other Places</p>
                        <ul>
                            <li>www</li>
                            <li>www</li>
                            <li>www</li>
                            <li>www</li>
                        </ul>
                    </div>
                    <div className={daBody.line}></div>
                    <div className={daBody.other}>

                        <p>Other Places</p>
                        <ul>
                            <li>students Grade</li>
                            <li>www</li>
                            <li>www</li>
                            <li>www</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={daBody.addExams}>
                <h2>Create &#128073;</h2>
                <button>Quiz</button>
                <button>Mid-Term</button>
                <button>Final</button>
            </div>
            <div className={daBody.archive}>
                <button>Archive &#9203;</button>
                {
                    mockArchive.map((archive) => (
                        <div className={daBody.archived}>
                            {archive}
                        </div>
                    ))
                }
            </div>
            <div className={daBody.stuGrade}>
                <h1>Students Grades</h1>
            </div>
            <DiffExams />
        </div>
    )
}

export default Dashboard