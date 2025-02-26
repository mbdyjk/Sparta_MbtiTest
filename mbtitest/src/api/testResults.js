import axios from "axios";

const API_URL = "https://leaf-discovered-casquette.glitch.me/testResults";

// 결과 조회
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Accept: "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching test results:", error);
    return [];
  }
};

// 결과 저장
export const createTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating test result:", error);
    throw error;
  }
};

// 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting test result:", error);
    throw error;
  }
};

// 결과 공개 여부 변경
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(
      `${API_URL}/${id}`,
      { visibility },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating test result visibility:", error);
    throw error;
  }
};
