import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
  }
};

export const getUserProfile = async () => {};

export const updateProfile = async () => {};
