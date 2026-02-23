import { apiClient } from './apiClient.js';

export const authClient = {
    login: async (credentials) => {
        try{
            const response = await apiClient.post("AuthApp/login", credentials);
            if (!response.data.isSuccess) {
                throw new Error(response.data.message);
            }
            return response.data.result;
        } catch(error){
            const message =
                error.response?.data?.message ||
                error.message || "Login failed";
            throw new Error(message);
        }
    },

    register: async (data) => {
        const response = await apiClient.post("AuthApp/register", data);
        return response.data.result;
    },

    assignRole: async (data) => {
        const response = await apiClient.post("AuthApp/assignRole", data);
        return response.data.result;
    },
}