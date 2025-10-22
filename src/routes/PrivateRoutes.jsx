import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
