import { apiClient } from './apiClient.js';
import { message } from "antd";

export const beaconClient ={
    getBeacons: async () => {
       try{
            const response = await apiClient.get("Beacon");
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
            message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Delete failed";
            message.error(_message);
            throw new Error(_message);
        }
    },
    addBeacon: async (beacon) => {
        try{
            const response = await apiClient.post("Beacon", beacon);
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
             message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Add beacon failed";
            message.error(_message);
            throw new Error(_message);
        }
    },
    updateBeacon: async (updatedBeacon, { id }) => {
        try{
            const response = await apiClient.put(`Beacon/${id}`, updatedBeacon);
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
            message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Update beacon failed";
            message.error(_message);
            throw new Error(_message);
        }
    },
    deleteBeacon: async ({ id }) => {
        try{
            const response = await apiClient.delete(`Beacon/${id}`);
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
            message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Delete failed";
             message.error(_message);
            throw new Error(_message);
        }
    },
    getBeaconById: async ({ id }) => {
        try{
            console.log("ID CLIENT ", id);
            const response = await apiClient.get(`Beacon/${id}`);
            if (!response.data.isSuccess) {
                message.error(response.data.message);
                throw new Error(response.data.message);
            }
            message.success(response.data.message);
            return response.data.result;
        } catch(error){
            const _message = error.message || "Delete failed";
             message.error(_message);
            throw new Error(_message);
        }
    },
}
