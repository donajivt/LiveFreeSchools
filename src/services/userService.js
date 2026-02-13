import { userClient } from "@/sdk/userClient";
import { createService } from "@/reactive";

export const userReactor = {
  onSuccess: ({ action, payload, params, db }) => {
    switch (action) {
      case "getUsers":
        db.collection("users").bulkWrite(payload);
        break;
      case "addUser":
        db.collection("users").insertOne(payload);
        break;
      case "getUserById":
        db.collection("users").getOne(payload);
        break;
      case "updateUser":
        db.collection("users").updateOne(payload);
        break;
      case "deleteUser":
        db.collection("users").deleteOne( params.id );
        break;
    }
  },
  onError: ({action, error, params, db}) => { 

   },
};

export const userService = createService(userClient, userReactor);
