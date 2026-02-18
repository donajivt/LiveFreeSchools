import { Route, Routes } from "react-router-dom";
import { TripsListView } from "@/features/trips";

export function TripsRouter() {
  return (
    <Routes>
      <Route index element={<TripsListView />} />
      <Route path="create" element={<p>create trip</p>} />
    </Routes>
  );
}