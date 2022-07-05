import axios from "axios"

const config = {
    timeout: 1500,
    baseURL: "https://bsalty-react-blog.herokuapp.com/api/",
};

export const axiosInstance = axios.create(config)