import { beaconClient } from "@/sdk/beaconClient";
import { createService } from "@/reactive";

export const beaconReactor = {
  onSuccess: ({ action, payload, params, db }) => {
    switch (action) {
      case "getBeacons":
        db.collection("beacons").bulkWrite(payload);
        break;
      case "getBeaconById":
        db.collection("beacons").bulkWrite([payload]);
        break;
      case "addBeacon":
        db.collection("beacons").insertOne(payload);
        break;
      case "updateBeacon":
        db.collection("beacons").update({ id: params[0].id }, payload);
        break;
      case "deleteBeacon":
        db.collection("beacons").deleteOne({ id: params[0].id });
        break;
    }
  },
  onError: () => {},
};

export const beaconService = createService(beaconClient, beaconReactor);
