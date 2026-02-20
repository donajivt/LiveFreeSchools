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
        if (action === "login") {
            notifyService.error("Credenciales incorrectas");
        } else if (action === "refresh") {
            notifyService.error("Sesión expirada");
        }
    },
};

export const authService = createService(authClient, authReactor);
