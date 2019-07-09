import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Stepper = props => {
  const elements = [];

  for (let i in props.techniques) {
    let selectedStyle = null;
    if (parseInt(i) === props.current) {
      selectedStyle = { backgroundColor: "#D20A0A" };
    }
    elements.push(
      <div
        key={i}
        style={selectedStyle}
        onClick={() => props.onTechniqueChanged(parseInt(i))}
        className={styles.step}
        id={`step${i}`}
      />
    );
  }

  return <div>{elements}</div>;
};

Stepper.propTypes = {
  current: PropTypes.number.isRequired,
  techniques: PropTypes.array.isRequired,
  onTechniqueChanged: PropTypes.func.isRequired
};

export default Stepper;
