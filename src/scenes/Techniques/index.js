import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { Grid } from "@material-ui/core";
import Description from "./components/Description";
import Stepper from "./components/Stepper";

import { techniques } from "../../services/data/techniques.json";

const Techniques = () => {
  const [currentTechnique, changeTechnique] = useState(0);

  return (
    <>
      <Navigation title={'TECHNIQUES'} />
      <Grid container>
        <Grid item xs={6}>
          <img
            src={`/images/${techniques[currentTechnique].name}Image.png`}
            style={{ maxWidth: "100%" }}
            alt="TechniqueImage"
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={10}>
              <Description technique={techniques[currentTechnique]} />
            </Grid>
            <Grid item xs={2}>
              <Stepper techniques={techniques.length} onTechniqueChanged={(i) => changeTechnique(i)} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Techniques;
