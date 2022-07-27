import PropTypes from 'prop-types';
import { Box, Button } from './FeedbackOptions.styled';




 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Box>
            {options.map(option => (
                <Button
                    key={option}
                    type="button"
                    onClick={onLeaveFeedback}
                    id={option}
                >
                    {option}
                </Button>
            ))}
        </Box>
    );
};

FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
    
export default FeedbackOptions;