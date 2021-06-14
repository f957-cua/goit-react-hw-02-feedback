import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className="Statistics__title">Statistics</h2>
      <ul>
        <li className="Statistics__item">
          <p>Good: {good}</p>
        </li>
        <li className="Statistics__item">
          <p>Neutral: {neutral}</p>
        </li>
        <li className="Statistics__item">
          <p>Bad: {bad}</p>
        </li>
        <li className="Statistics__item">
          <p>Total: {total}</p>
        </li>
        <li className="Statistics__item">
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
