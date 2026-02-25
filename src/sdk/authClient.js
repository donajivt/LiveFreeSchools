import api from "./api"

const BASE_URL = "https://localhost:7024";


export const authClient = {
    login: async (auth) => {
        const { data } = await api.post(`${BASE_URL}/auth/login`, auth)
        return data
    },
    refresh: async (refreshToken) => {
        const { data } = await api.post(`${BASE_URL}/auth/refresh`, { refreshToken })
        return data
    }
}