import axios from "axios";

const createExam = async (examData, examQuestions, token) => {
    let options = {
        method: 'POST',
        url: 'https://good-lime-horse-robe.cyclic.app/v1/quiz',
        data: {
            description: examData.description,
            title: examData.title,
            category: examData.category,                   // String ['quiz', 'final', 'mid_term']
            status: examData.status,
            questions: examQuestions
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        let res = await axios.request(options);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


export default createExam;