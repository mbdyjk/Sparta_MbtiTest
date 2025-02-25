import AuthForm from "../components/AuthForm";
import NavLink from "../components/common/NavLink";
import { register } from "../api/auth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      toast.success("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-100">
        <h1 className="text-3xl font-bold mb-4">회원가입</h1>
        <AuthForm
          mode="register"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSignup}
        />
        <div className="mt-4 text-center">
          <p>
            이미 계정이 있으신가요?{" "}
            <NavLink to="/login" className="text-red-500">
              로그인
            </NavLink>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
