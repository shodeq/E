import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:2207",
    params: {
        key: "aldypanteq",
    }
});

export default axiosInstance