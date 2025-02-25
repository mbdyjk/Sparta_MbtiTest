import TestResultList from "../components/TestResultList";
import PropTypes from "prop-types";

const TestResult = ({ user }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <TestResultList user={user} />
    </div>
  );
};

TestResult.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default TestResult;
