import { authClient } from "@/sdk/authClient";
import { createService } from "@/reactive";
import { notifyService } from "./notifyService";

export const authReactor = {
    onSuccess: ({ action, payload, db }) => {
        switch (action) {
            case "login":
            case "refresh":
                authStore.setToken(payload.accessToken);
                notifyService.success("Sesión iniciada");
                break;
            case "logout":
                authStore.setToken("");
                notifyService.success("Sesión cerrada");
                break;
        }
    },
    onError: ({ action, error }) => {
        switch (action) {
            case "login":
                notifyService.error("Credenciales incorrectas");
                break;
            case "refresh":
                notifyService.error("Sesión expirada");
                break;
        }
    },
};

let accessToken = "";

export const authStore = {
    getToken: () => accessToken,
    setToken: (token) => {
        accessToken = token;
    }
}

export const authService = createService(authClient, authReactor);
