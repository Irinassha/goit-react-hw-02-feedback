import { FeedbackOptions } from 'components/feedback/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from 'components/statistics/Statistics';
import React from 'react';
import s from './Section.module.css';

export class Section extends React.Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    );
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { title } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.section}>
        {title && <h1>{title}</h1>}
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
