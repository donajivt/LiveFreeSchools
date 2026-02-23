import { Route, Routes } from "react-router-dom";
import { LoginView } from "@/features/auth";

export function AuthRoute() {
  return (
    <Routes>
      <Route index element={<LoginView />} />
    </Routes>
  );
}