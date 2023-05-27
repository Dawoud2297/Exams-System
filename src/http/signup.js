import axios from "axios";

const signup = async (userData) => {
    const options = {
        method: 'POST',
        url: 'https://good-lime-horse-robe.cyclic.app/v1/signup',
        data: {
            first_name: userData.firstName,
            last_name: userData.lastName,
            password: userData.password,
            email: userData.email,
            role: userData.role
        }
    }

    try {
        const res = await axios.request(options);
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
        return error;
    }
}

export default signup