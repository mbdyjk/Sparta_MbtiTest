import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";

const ProtectedRoute = () => {
  const { isLogin } = useAuth();

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
