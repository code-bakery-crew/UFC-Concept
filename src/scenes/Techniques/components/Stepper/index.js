import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Stepper = props => {
  const elements = [];
  
  for (let i = 0; i < props.techniques; i++) {
    let selectedStyle = null
    if (i === props.current) {
      selectedStyle = { backgroundColor: '#D20A0A' }
    }
    elements.push(<div key={i} style={selectedStyle} onClick={() => props.onTechniqueChanged(i)} className={styles.step} />);
  }

  return <div>{elements}</div>;
};

Stepper.propTypes = {
  current: PropTypes.number.isRequired,
  techniques: PropTypes.number.isRequired,
  onTechniqueChanged: PropTypes.func.isRequired
};

export default Stepper;
