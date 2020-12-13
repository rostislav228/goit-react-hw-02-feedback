import { Component } from 'react';
import Statistics from './components/Statistics/Statistics.js';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Section from './components/Section/Section.js';
import Notification from './components/Notification/Notification.js';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = e => {
    const name = e.currentTarget.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  }

  countPositiveFeedbackPercentage() {
    if (!(this.state.good / this.countTotalFeedback())) {
      return 0;
    }
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateState}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
