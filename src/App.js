// import { Component } from 'react';
import { FeedbackOptions } from './components/Feedback/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';
import { useState, useEffect } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const onLeaveFeedback = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    setTotal(total);
  }, [good, neutral, bad]);

  useEffect(() => {
    const percentage = Math.round((good * 100) / total);
    setPercentage(percentage);
  }, [good, total]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

export { App };
