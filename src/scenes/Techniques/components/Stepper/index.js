import React from "react";
import PropTypes from "prop-types";

const Stepper = props => {
  const elements = [];
  for (let i = 0; i < props.techniques; i++) {
    elements.push(<div key={i} onClick={() => props.onTechniqueChanged(i)}>hello</div>);
  }

  return <div>{elements}</div>;
};

Stepper.propTypes = {
  techniques: PropTypes.number.isRequired
};

export default Stepper;
