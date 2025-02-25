import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { getUserProfile } from "../../api/auth";

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile(token)
        .then((user) => {
          setIsLogin(true);
          setCurrentUser(user);
        })
        .catch(() => {
          logout();
        });
    }
  }, []);

  const login = (user, token) => {
    setIsLogin(true);
    //localStorage.setItem("isLogin", "true");
    setCurrentUser(user);
    //localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsLogin(false);
    //localStorage.removeItem("isLogin");
    setCurrentUser(null);
    //localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLogin, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
