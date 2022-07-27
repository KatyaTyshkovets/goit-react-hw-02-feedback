import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsList } from './Statistics.styled';

 const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <StatisticsList>
            <StatisticsItem>
                Good: <span>{good}</span>
            </StatisticsItem>
            <StatisticsItem>
                Neutral: <span>{neutral}</span>
            </StatisticsItem>
            <StatisticsItem>
                Bad: <span>{bad}</span>
            </StatisticsItem>
            <StatisticsItem>
                Total: <span>{total}</span>
            </StatisticsItem>
            <StatisticsItem>
                Positive feedback: <span>{positivePercentage}%</span>
            </StatisticsItem>
</StatisticsList>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
export default Statistics