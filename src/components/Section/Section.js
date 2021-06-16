import React from "react";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ title, children }) => (
  <section className="Section">
    {title && <h1 className="Section__title">{title}</h1>}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
