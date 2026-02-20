import { Route, Routes } from "react-router-dom";
import { BeaconsListView } from "@/features/beacons";
import { BeaconCreateView } from "@/features/beacons/BeaconCreateView";
import { BeaconUpdateView } from "@/features/beacons/BeaconUpdateView";
import { BeaconInfoView } from "@/features/beacons/BeaconInfoView";

export function BeaconsRouter() {
  return (
    <Routes>
      <Route index element={< BeaconsListView />} />
      <Route path="create" element={<BeaconCreateView />} />
      <Route path=":id/update" element={<BeaconUpdateView />} />
      <Route path=":id" element={<BeaconInfoView />} />
    </Routes>
  );
}