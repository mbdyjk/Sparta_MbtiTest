import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin") === "true";
    setIsLogin(loginStatus);
  }, []);

  const login = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", "true");
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
