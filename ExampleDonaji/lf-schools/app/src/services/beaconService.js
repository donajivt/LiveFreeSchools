import { beaconClient } from "@/sdk/beaconClient";
import { createService } from "@/reactive";

export const beaconReactor = {
  onSuccess: ({ action, payload, params, db }) => {
    switch (action) {
      case "getBeacons":
        db.collection("beacons").bulkWrite(payload);
        break;
      case "addBeacon":
        db.collection("beacons").insertOne(payload);
        break;
      case "updateBeacon":
        db.collection("beacons").update({ id: params.id }, payload);
        break;
      case "deleteBeacon":
        console.log("deleteBeacon id:", params.id);
        db.collection("beacons").deleteOne({ id: params.id });
        break;
    }
  },
  onError: () => {},
};

export const beaconService = createService(beaconClient, beaconReactor);
