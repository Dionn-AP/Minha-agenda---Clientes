import axios from "axios";

interface IAxios {
    baseURL: string;
    timeout: number;
    headers: object;
}

const api = axios.create(<IAxios>{
    baseURL: "https://server-my-schedule.onrender.com",
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});

export default api;