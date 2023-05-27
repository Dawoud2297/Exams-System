import React, { useEffect, useState } from 'react'
import diff from '../../../Styles/Dashboard/doctor/DiffExams.module.css'
import Void from '../../Void'



import { useDispatch, useSelector } from 'react-redux'
import { selectExamType } from '../../../store/examsTypes'
import { Link } from 'react-router-dom'



const DiffExams = () => {
    const [choice, setChoise] = useState('quiz')
    let choices = ["quiz", "mid_term", "final"]
    console.log(choice)
    const dispatch = useDispatch();
    const examType = (type) => {
        setChoise(type)
        dispatch(selectExamType(type))
    }
    const { examsTypeData } = useSelector(state => state.examsType)

    console.log(examsTypeData)

    useEffect(() => {
        dispatch(selectExamType(choice))
    }, [choice, dispatch])


    console.log(examsTypeData)

    return (
        <div className={diff.container}>
            <div className={diff.choices}>
                <ul>
                    {
                        choices.map((item) => (
                            <li onClick={() => examType(item)} className={`${choice === item ? diff.item : ''}`}>
                                {item === 'quiz' ? item + 'zes' : item + 's'}
                            </li>
                        ))
                    }
                </ul>
                <Link className={diff.all}>
                    View all {choice === ' quiz' ? choice + 'zes' : choice + 's'} <img src='assets/Path 796.svg' alt='' />
                </Link>
            </div>
            {
                examsTypeData ? (examsTypeData?.quiz.map((data) => (
                    <div className={diff.choiceData}>
                        <p className={diff.title}>{data.title}</p>
                        <p> {data.description}</p>
                        <p className={diff.createdAt}> {data.createdAt} </p>
                        {/* <h2>{data.createdBy?._id}</h2> */}
                    </div>
                ))) : (
                    <Void />
                )
            }
        </div>
    )
}

export default DiffExams
