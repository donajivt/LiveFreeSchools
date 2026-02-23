import { Route, Routes } from "react-router-dom";
import { TripsRouter } from "./TripsRouter";
import { BeaconsRouter } from "./BeaconsRouter";
import { AuthRoute } from "./AuthRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<p>home</p>} />
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/trips/*" element={ <TripsRouter />} />
      <Route path="/schools" element={<p>Schools</p>} />
      <Route path="/beacons/*" element={ <BeaconsRouter />} />
    </Routes>
  );
}
