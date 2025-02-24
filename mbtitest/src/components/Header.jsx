import NavLink from "./common/NavLink";
import Button from "./common/Button";
import { useAuth } from "../context/auth/AuthContext";

const Header = () => {
  const { isLogin } = useAuth();

  return (
    <header className="flex justify-between items-center w-full p-4 bg-white border-b border-gray-200 shadow-sm text-red-600">
      <NavLink to="/" className="text-xl font-semibold">
        홈
      </NavLink>
      <div className="space-x-4">
        {!isLogin ? (
          <NavLink to="/login">로그인</NavLink>
        ) : (
          <>
            <NavLink to="/profile">프로필</NavLink>
            <NavLink to="/test">테스트</NavLink>
            <NavLink to="/testresult">결과보기</NavLink>
            <Button className="bg-red-700 hover:bg-red-600 text-white">
              로그아웃
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
