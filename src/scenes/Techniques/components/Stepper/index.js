import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Stepper = props => {
  const elements = [];
  //Add some props to check which is active and change color accordingly
  for (let i = 0; i < props.techniques; i++) {
    elements.push(<div key={i} onClick={() => props.onTechniqueChanged(i)} className={styles.step} />);
  }

  return <div>{elements}</div>;
};

Stepper.propTypes = {
  techniques: PropTypes.number.isRequired
};

export default Stepper;
