import { Route, Routes } from "react-router-dom";
import { BeaconsListView } from "@/features/beacons";
import { BeaconCreateView } from "@/features/beacons/BeaconCreateView";

export function BeaconsRouter() {
  return (
    <Routes>
      <Route index element={< BeaconsListView />} />
      <Route path="create" element={<BeaconCreateView />} />
    </Routes>
  );
}