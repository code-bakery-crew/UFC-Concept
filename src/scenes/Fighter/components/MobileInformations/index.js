import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./styles.module.css";

const MobileInformations = ({ fighter }) => {
  console.log(fighter);

  return (
    <Grid container>
      <div className={styles.infoWrapper}>
        <Grid item xs={12}>
          <h1 className={styles.name}>{fighter.firstName}</h1>
        </Grid>
        <Grid item xs={12}>
          <h1 className={styles.name}>{fighter.lastName}</h1>
        </Grid>
        <div className={styles.statisticsContainer}>
          <Grid item xs={12} className={styles.statisticsWrapper}>
            <p className={styles.statisticHeader}>W</p>
            <p className={styles.statisticContent}> - {fighter.wins}</p>
          </Grid>
          <Grid item xs={12} className={styles.statisticsWrapper}>
            <p className={styles.statisticHeader}>L</p>
            <p className={styles.statisticContent}> - {fighter.loses}</p>
          </Grid>
          <Grid item xs={12} className={styles.statisticsWrapper}>
            <p className={styles.statisticHeader}>D</p>
            <p className={styles.statisticContent}> - {fighter.draws}</p>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default MobileInformations;
