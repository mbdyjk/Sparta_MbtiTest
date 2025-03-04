import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "회원가입 실패";
    throw new Error(errorMessage);
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const user = response.data;

    // 로그인 후 토큰을 저장
    localStorage.setItem("token", user.accessToken);

    return user;
  } catch (error) {
    // 서버 메세지 또는 axios 오류 객체에서 제공하는 메세지 또는 기본 메세지를 반환
    const errorMessage =
      error.response?.data?.message || error.message || "로그인 실패";
    throw new Error(errorMessage);
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
