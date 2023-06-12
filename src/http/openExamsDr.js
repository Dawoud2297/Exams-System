import axios from 'axios';


const openExamsDr = async(id) =>{
    const options = {
        method:"GET",
        url : `https://good-lime-horse-robe.cyclic.app//v1/quiz/${id}`, 
    }
    try {
        const res = await axios.request(options);
        console.log(res.data)
        return res.data; 
    } catch (error) {
     console.log(error);
     return error   
    }
}


export default openExamsDr;