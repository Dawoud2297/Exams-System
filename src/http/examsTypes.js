import axios from "axios";


const examsTypes = async (examType) => {
    const options = {
        method: 'GET',
        url: 'https://good-lime-horse-robe.cyclic.app/v1/quizbycategory',
        params: {
            category: examType
        }
    }
    try {
        return await axios.request(options);
    } catch (error) {
        return 'error';
    }
}

export default examsTypes