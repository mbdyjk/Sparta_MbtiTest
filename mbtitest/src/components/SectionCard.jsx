import PropTypes from "prop-types";

const SectionCard = ({ title, description }) => (
  <div className="bg-white p-6 shadow-md rounded-lg text-center">
    <h2 className="text-xl font-semibold text-red-600">{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

SectionCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SectionCard;
