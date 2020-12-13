import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {Object.keys(options).map(item => (
        <li key={item}>
          <button type="button" name={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.shape({
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
