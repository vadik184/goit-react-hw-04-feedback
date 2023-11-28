import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { StyledContainer } from 'components/AppStyle';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeavFeedback = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return {
        [name]: (prevState[name] += 1),
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good * 100) / this.countTotalFeedback();
  }

  render() {
    return (
      <StyledContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeavFeedback={this.onLeavFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage().toFixed(
                0
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StyledContainer>
    );
  }
}
