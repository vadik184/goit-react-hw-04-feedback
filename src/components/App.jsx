import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { StyledContainer } from 'components/AppStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const hansleFeedback = options => {
    switch (options) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback > 0 ? (good * 100) / countTotalFeedback : 0;
  };
  return (
    <StyledContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeavFeedback={hansleFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage().toFixed(0)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </StyledContainer>
  );
};
