import { Route, Routes } from "react-router-dom";
import { BeaconsListView } from "@/features/beacons";

export function BeaconsRouter() {
  return (
    <Routes>
      <Route index element={< BeaconsListView />} />
      <Route path="create" element={<p>create beacon</p>} />
    </Routes>
  );
}