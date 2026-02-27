import axios from "axios";
import { message } from "antd";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL_AUTH,
});

export const authClient = {
    login: async (credentials) => {
        try{
            const response = await apiClient.post("AuthApp/login", credentials);
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
            message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Login failed";
            message.error(_message);
            throw new Error(_message);
        }
    },

    register: async (data) => {
        try{
            const response = await apiClient.post("AuthApp/register", data);
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
            message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Register failed";
            message.error(_message);
            throw new Error(_message);
        }
    },

    assignRole: async (data) => {
        try{
            const response = await apiClient.post("AuthApp/assignRole", data);
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
            message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Assign Role failed";
            message.error(_message);
            throw new Error(_message);
        }
    },
}