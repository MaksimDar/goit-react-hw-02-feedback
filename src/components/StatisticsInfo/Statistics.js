import Notification from 'components/NotificationMessage/Notification';
import PropTypes from 'prop-types';
import { StatisticsParagraph, StatisticsHeader } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {!total() ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <StatisticsHeader>Statistics</StatisticsHeader>
          <StatisticsParagraph>Good:{good}</StatisticsParagraph>
          <StatisticsParagraph>Neutral:{neutral}</StatisticsParagraph>
          <StatisticsParagraph>Bad:{bad}</StatisticsParagraph>
          <StatisticsParagraph>Total:{total()}</StatisticsParagraph>
          <StatisticsParagraph>
            Positive feedback:{positivePercentage()}%
          </StatisticsParagraph>
        </>
      )}
    </div>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func,
};
