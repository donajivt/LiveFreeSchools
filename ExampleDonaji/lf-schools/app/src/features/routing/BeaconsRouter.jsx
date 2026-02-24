import { Route, Routes } from "react-router-dom";
import { BeaconsListView } from "@/features/beacons";
import { BeaconCreateView } from "@/features/beacons/BeaconCreateView";
import { BeaconUpdateView } from "@/features/beacons/BeaconUpdateView";
import { BeaconInfoView } from "@/features/beacons/BeaconInfoView";
import { ProtectedRoute } from "./ProtectedRoute";

export function BeaconsRouter() {
  return (
    <Routes>
      <Route index element={<ProtectedRoute><BeaconsListView /></ProtectedRoute>} />
      <Route path="create" element={<ProtectedRoute><BeaconCreateView /></ProtectedRoute>} />
      <Route path=":id/update" element={<ProtectedRoute><BeaconUpdateView /></ProtectedRoute>} />
      <Route path=":id" element={<ProtectedRoute><BeaconInfoView /></ProtectedRoute>} />
    </Routes>
  );
}