import AuthForm from "../components/AuthForm";
import NavLink from "../components/common/NavLink";

const Signup = () => {
  const handleSignup = async () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-100">
        <h1 className="text-3xl font-bold mb-4">회원가입</h1>
        <AuthForm mode="register" onSubmit={handleSignup} />
        <div className="mt-4 text-center">
          <p>
            이미 계정이 있으신가요?{" "}
            <NavLink to="/login" className="text-red-500">
              로그인
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
