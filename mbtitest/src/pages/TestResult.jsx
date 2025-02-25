import { useLocation } from "react-router-dom";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResult = () => {
  const location = useLocation();
  const mbti = calculateMBTI(location.state.answers);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">당신의 MBTI 유형은 {mbti}입니다!</h1>
      <p className="mt-4">{mbtiDescriptions[mbti]}</p>
    </div>
  );
};

export default TestResult;
