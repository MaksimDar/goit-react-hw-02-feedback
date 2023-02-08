import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <FeedbackButtons
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButtons>
      ))}
    </div>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  option: PropTypes.string,
  onLeaveFeedback: PropTypes.func.isRequired,
};
