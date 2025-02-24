import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ to, children, className = "" }) => (
  <Link to={to} className={`hover:underline ${className}`}>
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default NavLink;
