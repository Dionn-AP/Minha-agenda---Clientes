import axios from "axios";

interface IAxios {
    baseURL: string;
    timeout: number;
    headers: unknown;
}

const api = axios.create({
    baseURL: "https://server-my-schedule.onrender.com",
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export default api;