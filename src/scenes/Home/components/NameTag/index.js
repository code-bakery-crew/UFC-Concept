import React from "react";
import nameTag from "./images/nameTag.png";

import styles from "./styles.module.css";

const NameTag = () => (
  <div className={styles.nameTagContainer}>
    <img src={nameTag} className={styles.nameTag} alt="nameTag" />
  </div>
);

export default NameTag;
