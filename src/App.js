import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  static defaultProps = {
    defaultGood: 0,
    defaultNeutral: 0,
    defaultBad: 0,
    defaultTotal: 0,
  };
  state = {
    good: this.props.defaultGood,
    neutral: this.props.defaultNeutral,
    bad: this.props.defaultBad,
  };

  handleGood = () => {
    this.setState((prev) => ({
      good: prev.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState((prev) => ({
      neutral: prev.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState((prev) => ({
      bad: prev.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    if (this.state.good !== 0) {
      let resume = (this.state.good * 100) / this.countTotalFeedback();
      percentage = Math.floor(resume);
    }
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
