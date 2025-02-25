import { useState } from "react";
import PropTypes from "prop-types";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: mode === "register" ? "" : undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {mode === "register" && (
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
      )}
      <button type="submit">{mode === "login" ? "로그인" : "회원가입"}</button>
    </form>
  );
};

AuthForm.propTypes = {
  mode: PropTypes.string,
  onSubmit: PropTypes.function,
};

export default AuthForm;
