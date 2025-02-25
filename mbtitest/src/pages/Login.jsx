import AuthForm from "../components/AuthForm";
import NavLink from "../components/common/NavLink";

const Login = () => {
  const [formData, setFormData] = useState({ id: "", password: "" });

  const handleLogin = async () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-100">
        <h1 className="text-3xl font-bold mb-4">로그인</h1>
        <AuthForm mode="login" formData={formData} onSubmit={handleLogin} />
        <div className="mt-4 text-center">
          <p>
            계정이 없으신가요?{" "}
            <NavLink to="/signup" className="text-red-500">
              회원가입
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
