import React from "react";
import UpperFLetterImage from "./images/UpperFLetterImage.png";
import LowerFLetterImage from "./images/LowerFLetterImage.png";
import { Grid } from "@material-ui/core";
import { Motion, spring } from "react-motion";
import detectSafari from "../../../../services/utils/detectSafari";

import styles from "./styles.module.css";

let upperFSpringValue = 0;
let lowerFSpringValue = 0;
let transformUnits = "px";
if (detectSafari()) {
  upperFSpringValue = 240;
  transformUnits = "%";
  lowerFSpringValue = "-90";
}

const FLetter = () => (
  <Grid container className={styles.FContainer}>
    <Grid item xs={12} className={styles.WordFragmentWrapper}>
      <Motion
        defaultStyle={{ x: -600 }}
        style={{ x: spring(upperFSpringValue) }}
      >
        {({ x }) => (
          <img
            src={UpperFLetterImage}
            alt="FLetter"
            className={styles.Letter}
            style={{
              right: "1vw",
              maxWidth: "75%",
              transform: `translate3d(-2%, ${x + transformUnits}, 0)`,
              WebkitTransform: `translate3d(-2%, ${x + transformUnits}, 0)`
            }}
          />
        )}
      </Motion>
    </Grid>
    <Grid item xs={12} className={styles.WordFragmentWrapper}>
      <Motion
        defaultStyle={{ x: 600 }}
        style={{ x: spring(lowerFSpringValue) }}
      >
        {({ x }) => (
          <img
            src={LowerFLetterImage}
            alt="FLetter"
            className={styles.Letter}
            style={{
              bottom: 0,
              maxWidth: "85%",
              transform: `translate3d(0, ${x + transformUnits}, 0)`,
              WebkitTransform: `translate3d(0, ${x + transformUnits}, 0)`
            }}
          />
        )}
      </Motion>
    </Grid>
  </Grid>
);

export default FLetter;
