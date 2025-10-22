import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const PublicRoutes = () => {
  const { currentUser } = useAuth();
  return currentUser.isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
