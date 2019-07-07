import React from "react";
import PropTypes from "prop-types";

const Description = ({ technique }) => (
  <div>
    <h2>{technique.name}</h2>
    <p>{technique.description}</p>
  </div>
);

Description.propTypes = {
  technique: PropTypes.object.isRequired
}

export default Description;
