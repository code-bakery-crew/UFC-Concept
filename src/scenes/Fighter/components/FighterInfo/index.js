import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const FighterInfo = ({ fighter }) => {
  const {
    firstName,
    lastName,
    wins,
    loses,
    draws,
    currentRank,
    fightNightBonuses,
    summary,
    nickname,
    from,
    fightsOutOf,
    age,
    height,
    weight,
    reach,
    legReach
  } = fighter;

  return (
    <Grid container className={styles.fighterInfoContainer}>
      <Grid item xs={12} md={4}>
        <Grid container>
          <Hidden mdDown>
            <Grid item xs={12}>
              <h1 className={styles.name}>{firstName}</h1>
            </Grid>
            <Grid item xs={12}>
              <h1 className={styles.name}>{lastName}</h1>
            </Grid>
            <Grid item xs={12}>
              <p
                className={styles.metrics}
              >{`${wins}-${loses}-${draws} (W-L-D)`}</p>
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <p
              className={styles.currentRank}
            >{`Current Rank: ${currentRank}`}</p>
          </Grid>
          <Grid item xs={12}>
            <p
              className={styles.content}
            >{`Fight Night Bonuses: ${fightNightBonuses}`}</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={false} md={1} />
      <Grid item xs={12} md={7}>
        <hr className={styles.breakLine} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <h4 className={styles.headerSmall}>Skill Breakdown</h4>
              </Grid>
              <Grid item xs={12}>
                <p className={[styles.content, styles.chartsInfo].join(" ")}>
                  Charts are compiled based on results from 10 fights
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={[styles.content, styles.record].join(" ")}>
                  <b>Record:</b> {`${wins}-${loses}-${draws}`}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Summary:</b> {summary}
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={styles.fighterInfoWrapper}>
              <Grid item xs={12}>
                <h4 className={styles.headerSmall}>Fighter Info</h4>
                <Hidden mdUp>
                  <hr className={styles.breakLineMobile} />
                </Hidden>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Nickname:</b> {nickname}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>From:</b> {from}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Fights Out Of:</b> {fightsOutOf}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Age:</b> {age}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Height:</b> {height}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Weight:</b> {weight}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Reach:</b> {reach}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={styles.content}>
                  <b>Leg Reach:</b> {legReach}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

FighterInfo.propTypes = {
  fighter: PropTypes.object.isRequired
};

export default FighterInfo;
