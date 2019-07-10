import React from "react";
import { Grid } from "@material-ui/core";
import Navigation from "../../components/Navigation/index.js";
import FighterInfo from "./components/FighterInfo/index.js";

import styles from "./styles.module.css";
import { fighters } from "../../services/data/fighters.json";
import FighterTable from "./components/FighterTable/index.js";

const Fighter = props => {
  const currentFigtherIndex = props.match.params.id
  const fighter = fighters.find(x => x.id === parseInt(currentFigtherIndex))
  console.log(fighter);

  return (
    <>
      <Navigation />
      <Grid container>
        <Grid item xs={4}>
          <img
            src={`/images/fighters/fighter${currentFigtherIndex}Image.png`}
            className={styles.fighterImage}
            alt="FighterImage"
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <FighterInfo fighter={fighter} />
            </Grid>
            <Grid item xs={12}>
              <FighterTable fighterName={`${fighter.firstName} ${fighter.lastName}`} fights={fighter.fights} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Fighter;
