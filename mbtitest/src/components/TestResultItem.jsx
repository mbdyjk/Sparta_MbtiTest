import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import PropTypes from "prop-types";

const TestResultItem = ({ result, user }) => {
  const queryClient = useQueryClient();
  const isOwner = user?.id === result.userId;

  const updateVisibilityMutation = useMutation({
    mutationFn: () => updateTestResultVisibility(result.id, !result.visibility),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTestResult(result.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  return (
    <li className="p-4 bg-gray-100 rounded-md shadow flex justify-between items-center">
      <div>
        <p className="font-semibold">{result.mbti}</p>
        <p className="text-sm text-gray-600">작성자 ID: {result.userId}</p>
      </div>

      {isOwner && (
        <div className="flex space-x-2">
          <button
            onClick={() => updateVisibilityMutation.mutate()}
            className={`px-3 py-1 rounded text-white ${
              result.visibility ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            {result.visibility ? "공개됨" : "비공개"}
          </button>
          <button
            onClick={() => deleteMutation.mutate()}
            className="px-3 py-1 bg-red-500 text-white rounded"
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
    userId: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
  }),
  user: PropTypes.shape({
    accessToken: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    nickname: PropTypes.string.isRequired,
  }),
};

export default TestResultItem;
