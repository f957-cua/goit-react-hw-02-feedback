import React from "react";
import PropTypes from "prop-types";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <>
    <ul className="Options">
      <li className="Option">
        <button type="button" className="Option__button" onClick={onGood}>
          good
        </button>
      </li>
      <li className="Option">
        <button type="button" className="Option__button" onClick={onNeutral}>
          neutral
        </button>
      </li>
      <li className="Option">
        <button type="button" className="Option__button" onClick={onBad}>
          bad
        </button>
      </li>
    </ul>
  </>
);

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
