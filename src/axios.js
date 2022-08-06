import axios from "axios"

const instance = axios.create({
    baseURL: "https://us-central1-challenge-inzi-80142.cloudfunctions.net/api"

    // Bottom URL for Debugging purposes using LocalServer
    // 'http://localhost:5001/challenge-inzi-80142/us-central1/api'
});

export default instance;

