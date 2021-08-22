import PropTypes from 'prop-types';

const Button = ({ colorChange, color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// example of default props, inline style is being used instead
Button.defaultProps = {
  colorChange: 'red',
};

// propTypes make me think of TypeScript; it is declaring what the value of the prop should be.
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
