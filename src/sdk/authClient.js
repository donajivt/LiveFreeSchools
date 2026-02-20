import axios from 'axios';

const BASE_URL = "https://localhost:7024";


export const authClient = {
    login: async (auth) => {
        const { data } = await axios.post(`${BASE_URL}/auth/login`, auth)
        return data
    },
    refresh: async (refreshToken) => {
        const { data } = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken })
        return data
    }
}