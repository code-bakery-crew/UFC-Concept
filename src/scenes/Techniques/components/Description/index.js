import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Description = ({ technique }) => (
  <div>
    <h2 className={styles.name}>{technique.name}</h2>
    {technique.description.split("/n").map((line, index) => (
      <p key={index} className={styles.description}>{line}</p>
    ))}
  </div>
);

Description.propTypes = {
  technique: PropTypes.object.isRequired
};

export default Description;
