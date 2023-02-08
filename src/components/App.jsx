import Statistics from './StatisticsInfo/Statistics';
import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import { AppSection } from './App.styled';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addComment = option => {
    this.setState(PrevState => {
      return {
        [option]: PrevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <AppSection>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addComment}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </AppSection>
    );
  }
}

export default App;
