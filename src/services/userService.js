import { userClient } from "@/sdk/userClient";
import { createService } from "@/reactive";
import { notifyService } from "./notifyService";
import { authService } from "./authService";

export const userReactor = {
  onSuccess: ({ action, payload, params, db }) => {
    switch (action) {
      case "getUsers":
        db.collection("users").bulkWrite(payload);
        notifyService.success('Lista de usuario actualizada.')
        break;
      case "addUser":
        db.collection("users").insertOne(payload);
        notifyService.success("Usuario Agregado")
        break;
      case "getUserById":
        db.collection("users").getOne(payload);
        notifyService.success("Usuario Cargado")
        break;
      case "updateUser":
        db.collection("users").updateOne(payload);
        notifyService.success("Usuario Actualizado")
        break;
      case "deleteUser":
        db.collection("users").deleteOne(...params);
        notifyService.success("Usuario Eliminado")

        break;
    }
  },
  onError: async ({ action, error, params, db }) => {
    if (error?.status === 401) {
      notifyService.error("token expirado");

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token");

        await authService.refresh(refreshToken);

        notifyService.success("reintentando con token renovado...");
        return userService[action](...params);
        
      } catch (refreshError) {

        notifyService.error("simular login...");

        await authService.login({ email: "admin@example.com", password: "admin123" });
        return userService[action](...params);
      }
    } else {
      notifyService.error("Ocurrió un error en la petición");
    }
  },
};

export const userService = createService(userClient, userReactor);
