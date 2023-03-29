import PropTypes from "prop-types";
const Button = ({ className, children, type = "button", onClick }) => {
  return (
    <button
      className={`btn ${className && className}`}
      type={type}
      onClick={onClick}
    >
      <span className='txt-btn'> {children}</span>
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {
  className: "btn--primary",
};
export default Button;
