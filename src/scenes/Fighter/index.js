import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Navigation from "../../components/Navigation/index.js";
import FighterInfo from "./components/FighterInfo/index.js";
import { MobileOnlyView } from "react-device-detect";
import FighterTable from "./components/FighterTable/index.js";
import MobileInformations from "./components/MobileInformations/index.js";

import styles from "./styles.module.css";
import { fighters } from "../../services/data/fighters.json";

const Fighter = props => {
  const currentFigtherIndex = props.match.params.id;
  const fighter = fighters.find(x => x.id === parseInt(currentFigtherIndex));

  return (
    <>
      <Navigation />
      <Grid container>
        <Grid item xs={6} md={4}>
          <div className={styles.circle} />
          <img
            src={`/images/fighters/fighter${currentFigtherIndex}Image.png`}
            className={[styles.fighterImage, 'bottom'].join(' ')}
            alt="FighterImage"
          />
        </Grid>
        <Hidden mdUp>
          <MobileOnlyView>
            <Grid item xs={6}>
              <MobileInformations fighter={fighter} />
            </Grid>
          </MobileOnlyView>
        </Hidden>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={12}>
              <FighterInfo fighter={fighter} />
            </Grid>
            <Grid item xs={12} className={styles.fighterTableContainer}>
              <FighterTable
                fighterName={`${fighter.firstName} ${fighter.lastName}`}
                fights={fighter.fights}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Fighter;
