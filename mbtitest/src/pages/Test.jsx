import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { questions } from "../data/questions";

const Test = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTestSubmit = async (answers) => {
    setLoading(true);
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    try {
      await createTestResult({
        userId: user?.id || "guest",
        mbti: mbtiResult,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("테스트 결과 저장 실패:", error);
      alert("테스트 결과를 저장하는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/testresultyjko");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto shadow-md">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} questions={questions} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary-color text-white hover:bg-primary-dark hover:text-[#FF5A5F]"
              }`}
              disabled={loading}
            >
              {loading ? "저장 중..." : "결과 페이지로 이동하기"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Test.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default Test;
