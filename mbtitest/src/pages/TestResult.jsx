import TestResultList from "../components/TestResultList";
import PropTypes from "prop-types";
import { useAuth } from "../context/auth/useAuth";

const TestResult = () => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <TestResultList user={currentUser} />
    </div>
  );
};

TestResult.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default TestResult;
