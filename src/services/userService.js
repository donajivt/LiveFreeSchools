import { userClient } from "@/sdk/userClient";
import { createService } from "@/reactive";
import { notifyService } from "./notifyService";

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
        notifyService.success("Usuario El iminado")

        break;
    }
  },
  onError: async ({ action, error, params, db }) => {
    if (error?.status === 401) {
      notifyService.error("token expirado");

      try {
        await refreshToken();
        notifyService.success("reintentando");
        return userService[action](...params);
      } catch (refreshError) {
        notifyService.error("error en el refresh");
      }
    } else {
      notifyService.error("Ocurrio un error en la peticion")
    }
  },
};

async function refreshToken() {
  console.log("Refreshing...");
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const userService = createService(userClient, userReactor);
