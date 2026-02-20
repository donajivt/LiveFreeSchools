import { Route, Routes } from "react-router-dom";
import { BeaconsListView } from "@/features/beacons";
import { BeaconCreateView } from "@/features/beacons/BeaconCreateView";
import { BeaconUpdateView } from "@/features/beacons/BeaconUpdateView";

export function BeaconsRouter() {
  return (
    <Routes>
      <Route index element={< BeaconsListView />} />
      <Route path="create" element={<BeaconCreateView />} />
      <Route path=":id/update" element={<BeaconUpdateView />} />
    </Routes>
  );
}