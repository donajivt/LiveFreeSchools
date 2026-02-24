import { Navigate } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={RoutePaths.auth.login()} />;
  }

  return children;
};