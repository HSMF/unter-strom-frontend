import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8808",
    headers: {
        "Content-Type": "application/json",
    },
    // withCredentials: true,
});



export default http;