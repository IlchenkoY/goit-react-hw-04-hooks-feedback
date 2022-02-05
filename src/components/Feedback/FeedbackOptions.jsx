import PropTypes from 'prop-types';
import { Button } from './FeedbackOptons.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
          eventOption={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
