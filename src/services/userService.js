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
        notifyService.success("Usuario Eliminado")

        break;
    }
  },
  onError: async ({ action, error, params, db }) => {
    switch (action) {
      case "getUsers":
        notifyService.error("Error al cargar los usuarios");
        break;
      case "addUser":
        notifyService.error("Error al agregar el usuario");
        break;
      case "getUserById":
        notifyService.error("Error al cargar el usuario");
        break;
      case "updateUser":
        notifyService.error("Error al actualizar el usuario");
        break;
      case "deleteUser":
        notifyService.error("Error al eliminar el usuario");
        break;
    }
  },
};

export const userService = createService(userClient, userReactor);
