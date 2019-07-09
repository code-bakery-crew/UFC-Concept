import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { Grid } from "@material-ui/core";
import Description from "./components/Description";
import Stepper from "./components/Stepper";

import styles from "./styles.module.css";
import { techniques } from "../../services/data/techniques.json";

const Techniques = () => {
  const [currentTechnique, changeTechnique] = useState(0);

  return (
    <div className={styles.pageContainer}>
      <Navigation title={"TECHNIQUES"} />
      <Grid container>
        <Grid item xs={12} md={6} className={styles.techniqueImageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={`/images/${techniques[currentTechnique].name}Image.png`}
              className={styles.techniqueImage}
              alt="TechniqueImage"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.descriptionContainer}>
          <Grid container>
            <Grid item xs={11} md={10}>
              <div className={styles.descriptionWrapper}>
                <Description technique={techniques[currentTechnique]} />
              </div>
            </Grid>
            <Grid item xs={false} md={1} />
            <Grid item xs={1}>
              <div className={styles.stepperWrapper}>
                <Stepper
                  current={currentTechnique}
                  techniques={techniques.length}
                  onTechniqueChanged={i => changeTechnique(i)}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Techniques;
