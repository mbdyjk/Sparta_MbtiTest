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

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("데이터 로드 실패: 사용자 정보를 불러올 수 없습니다.");
  }
};

export const updateProfile = async (formData, token) => {
  try {
    const response = await axios.patch(`${API_URL}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("업데이트 실패: 프로필 업데이트 실패");
  }
};
