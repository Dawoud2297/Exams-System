import axios from "axios";

const login = async (userData) => {
    const options = {
        method: 'POST',
        url: 'https://good-lime-horse-robe.cyclic.app/v1/login',
        data: {
            password: userData.password,
            email: userData.email,
        }
    }

    try {
        let res = await axios.request(options);
        return res.data;
    } catch (error) {
        return error;
    }
}

export default login