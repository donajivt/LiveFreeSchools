import { countryClient } from "@/sdk/countryClient";
import { createService } from "@/reactive";
import { notifyService } from "./notifyService";

export const countryReactive = {
  onSuccess: ({ action, payload, params, db }) => {
    switch (action) {
      case "getCountries":
        db.collection("countries").bulkWrite(payload);
        break;
    }
  },
  onError: ({ action }) => {
    switch (action) {
      case "getCountries":
        notifyService.error("Error al cargar los países");
        break;
    }
  },
};

export const countryService = createService(countryClient, countryReactive);
