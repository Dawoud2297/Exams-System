import React from 'react'
import about from '../Styles/About.module.css'
import { Link } from 'react-router-dom'
let styles = {
    sectionOne: about.section + " " + about.one,
    sectionTwo: about.section + " " + about.two,
    sectionThree: about.section + " " + about.three
}
const About = (props) => {
    const register = () => {
        props.setAuthSignUp('signup');
    }
    return (
        <div className={about.aboutContainer}>
            <div className={styles.sectionOne}>
                <div className={about.ex}>
                    <h1>Ultimate Online Tests Hub!</h1>
                    <p>
                        We have strived to create an inclusive
                        learning environment by offering comprehensive explanations and
                        supplemental resources alongside each quiz question.
                        This way,
                        you can deepen your understanding of the concepts and principles
                        behind Electrical Engineering,
                        making your learning experience more enriching and rewarding.
                    </p>
                    <Link to='/signup' onClick={register}>
                        <p className={about.explore}>
                            Explore Now
                        </p>
                    </Link>
                </div>
                <img src='assets/online-exam.png' height="400" width="600" alt='' />
            </div>
            <div className={styles.sectionTwo}>
                <img src='assets/doctormarked.jpg' height="400" width="600" alt='' />
                <div className={about.ex}>
                    <h1>Take The Advantages Of That Community!</h1>
                    <p>
                        We have strived to create an inclusive
                        learning environment by offering comprehensive explanations and
                        supplemental resources alongside each quiz question.
                        This way,
                        you can deepen your understanding of the concepts and principles
                        behind Electrical Engineering,
                        making your learning experience more enriching and rewarding.
                    </p>
                </div>
            </div>
            <div className={styles.sectionThree}>
                <div className={about.ex}>
                    <h1>Find out Where You're Now!</h1>
                    <p>
                        We have strived to create an inclusive
                        learning environment by offering comprehensive explanations and
                        supplemental resources alongside each quiz question.
                        This way,
                        you can deepen your understanding of the concepts and principles
                        behind Electrical Engineering,
                        making your learning experience more enriching and rewarding.
                    </p>
                    <Link to='/signup' onClick={register}>
                        <p className={about.explore}>
                            Start Here
                        </p>
                    </Link>
                </div>
                <img src='assets/1000_F_569845170_QLp8dKvnDGKTDx1SKRBmB0EAk6fb8sCR.jpg' height="400" width="600" alt='' />
            </div>
        </div>
    )
}

export default About