import { authClient } from "@/sdk/authClient";
import { createService } from "@/reactive";
import { notifyService } from "./notifyService";

export const authReactor = {
    onSuccess: ({ action, payload, db }) => {
        switch (action) {
            case "login":
            case "refresh":
                localStorage.setItem("accessToken", payload.accessToken);
                localStorage.setItem("refreshToken", payload.refreshToken);
                if (action === "login") {
                    notifyService.success("Sesión iniciada");
                }
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

export const authService = createService(authClient, authReactor);
