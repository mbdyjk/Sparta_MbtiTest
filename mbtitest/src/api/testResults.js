import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// 결과 조회
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 결과 저장
export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

// 결과 삭제
export const deleteTestResult = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// 결과 공개 여부 변경
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data;
};
