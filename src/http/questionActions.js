import axios from 'axios'



const token = JSON.parse(localStorage.getItem('additional'))?.additional?.user_token


export const addQuestion = async (questionData, type) => {

    const multi_data = {
        type: questionData.type,
        question: questionData.question,
        correctAnswer: questionData.correctAnswer,
        options: questionData.options,
        lecture_no: questionData.lectureNumber,
    }

    const open_ended = {
        type: questionData.type,
        question: questionData.question,
        correctAnswer: questionData.correctAnswer,
        lecture_no: questionData.lectureNumber
    }

    const options = {
        method: 'POST',
        url: 'https://good-lime-horse-robe.cyclic.app/v1/questions',
        data: type === 'open_ended' ? open_ended : multi_data,
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    try {
        let res = await axios.request(options);
        console.log(res);
        console.log(token)
        return res.data;
    } catch (e) {
        console.log(`Bearer ${token}`)
        console.log(e)
    }
}

// https://good-lime-horse-robe.cyclic.app/v1/question/647f968132615a3d09b7ecb3
export const deleteQuestion = async (id) => {
    const options = {
        method: 'DELETE',
        url: `https://good-lime-horse-robe.cyclic.app/v1/question/${id}`,
    }
    try {
        let res = await axios.request(options);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}