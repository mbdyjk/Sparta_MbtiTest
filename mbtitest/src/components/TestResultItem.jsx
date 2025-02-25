import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import PropTypes from "prop-types";

const TestResultItem = ({ result, user }) => {
  const queryClient = useQueryClient();
  const isOwner = user?.userId === result.userId;

  const updateVisibilityMutation = useMutation({
    mutationFn: () => updateTestResultVisibility(result.id, !result.visibility),
    onSuccess: () => queryClient.invalidateQueries(["testResults"]),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTestResult(result.id),
    onSuccess: () => queryClient.invalidateQueries(["testResults"]),
  });

  return (
    <li className="relative p-6 bg-gray-900 rounded-lg shadow-md text-white">
      {/* 작성자 정보 및 날짜 */}
      <div className="absolute right-4 top-4 text-xs text-gray-400">
        {new Date(result.createdAt).toLocaleString()}
      </div>

      {/* MBTI 및 설명 */}
      <h2 className="text-yellow-400 text-xl font-bold">{result.mbti}</h2>
      <p className="mt-2 text-gray-300">
        {result.description || "설명이 없습니다."}
      </p>

      {/* 버튼 (본인만 보이게) */}
      {isOwner && (
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => updateVisibilityMutation.mutate()}
            className={`px-4 py-2 rounded-md font-medium transition ${
              result.visibility
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {result.visibility ? "공개됨" : "비공개로 전환"}
          </button>
          <button
            onClick={() => deleteMutation.mutate()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition"
          >
            삭제
          </button>
        </div>
      )}
    </li>
  );
};

TestResultItem.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.number.isRequired,
    mbti: PropTypes.string.isRequired,
    description: PropTypes.string,
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    visibility: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }),
};

export default TestResultItem;
