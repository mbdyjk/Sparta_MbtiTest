import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const { isLogin } = useAuth();

  if (!isLogin) {
    console.log("로그인 필요");
    toast.warn("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
