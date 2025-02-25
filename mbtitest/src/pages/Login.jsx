import AuthForm from "../components/AuthForm";
import NavLink from "../components/common/NavLink";
import { login } from "../api/auth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";

const Login = () => {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const navigate = useNavigate();
  const { login: setLogin } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // 폼이 제출되었을 때 새로고침 방지
    try {
      const user = await login(formData);
      setLogin(user);
      toast.success("로그인 성공!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-100">
        <h1 className="text-3xl font-bold mb-4">로그인</h1>
        <AuthForm
          mode="login"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleLogin}
        />
        <div className="mt-4 text-center">
          <p>
            계정이 없으신가요?{" "}
            <NavLink to="/signup" className="text-red-500">
              회원가입
            </NavLink>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
