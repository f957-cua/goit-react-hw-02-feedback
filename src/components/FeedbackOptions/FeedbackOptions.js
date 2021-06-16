import React from "react";
import PropTypes from "prop-types";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ul className="Options">
      {Object.keys(options).map((key) => (
        <li key={key} className="Option">
          <button
            type="button"
            className="Option__button"
            onClick={() => onLeaveFeedback(key)}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
