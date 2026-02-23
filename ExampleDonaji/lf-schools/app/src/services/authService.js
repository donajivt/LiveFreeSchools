import { authClient } from '../sdk/authClient';
import { createService } from '@/reactive';

export const authReactor = {
  onSuccess: ({ action, payload, params, db }) => {
    switch (action) {
      case "register":
        db.collection("auth").bulkWrite(payload);
        break;
      case "login":
        localStorage.setItem("token", payload.token);
        db.collection("auth").bulkWrite(payload);
        break;
      case "assignRole":
        break;
    }
    },
    onError: ({ action, error }) => {
        console.error("Auth error:", action, error.message);
        throw error;
    },
};

export const authService = createService(authClient, authReactor);