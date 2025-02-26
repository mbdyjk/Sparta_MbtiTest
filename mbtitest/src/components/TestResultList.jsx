import { useQuery } from "@tanstack/react-query";
import TestResultItem from "./TestResultItem";
import { getTestResults } from "../api/testResults";
import PropTypes from "prop-types";

const TestResultList = ({ user }) => {
  const {
    data: testResults,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isLoading) return <p className="text-center">로딩 중...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">오류 발생: {error.message}</p>
    );

  console.log(testResults);
  const filteredResults = testResults?.filter(
    (result) => result.visibility || result.userId === user.userId
  );

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary-color mb-4">
        테스트 결과
      </h2>
      {filteredResults?.length > 0 ? (
        <ul className="space-y-4">
          {filteredResults.map((result) => (
            <TestResultItem key={result.id} result={result} user={user} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">결과가 없습니다.</p>
      )}
    </div>
  );
};

TestResultList.propTypes = {
  user: PropTypes.shape({
    accessToken: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    nickname: PropTypes.string.isRequired,
  }),
};

export default TestResultList;
