import axios from "axios";

export const stusData = async () => {
    const options = {
        method: 'GET',
        url: 'https://good-lime-horse-robe.cyclic.app/v1/get_students'
    }
    try {
        const res = await axios.request(options);
        return res.data
    } catch (error) {
        console.log("students Error", error)
    }
}