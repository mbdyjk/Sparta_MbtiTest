import PropTypes from "prop-types";

const Button = ({ onClick, children, className = "" }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded ${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.function,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
