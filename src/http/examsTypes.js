import axios from "axios";


const examsTypes = async (examType,tokenExamsTypes) => {
    const options = {
        method: 'GET',
        url: 'https://good-lime-horse-robe.cyclic.app/v1/quizbycategory',
        params: {
            category: examType
        },
        headers: {
            Authorization: `Bearer ${tokenExamsTypes}`,
        }
    }
    try {
        return await axios.request(options);
    } catch (error) {
        return 'error';
    }
}

export default examsTypes