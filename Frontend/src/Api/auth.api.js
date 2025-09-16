import axios from "axios";

const userSignUp = async (data) => {
    try {
        const response = await axios.post("http://localhost:8000/api/v1/users/register", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error while signing up:", error.response?.data || error.message);
        throw error;
    }
};

const userLogin = async (data) => {
    try {
        const response = await axios.post("http://localhost:8000/api/v1/users/login", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error while signing up:", error.response?.data || error.message);
        throw error;
    }
}



export {
    userSignUp,
    userLogin
}