import React from "react";
import { Grid } from "@material-ui/core";

// Prop types!

const FighterInfo = ({ fighter }) => {
  const {
    firstName,
    lastName,
    wins,
    loses,
    draws,
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
    <Grid container>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            {firstName}
          </Grid>
          <Grid item xs={12}>
            {lastName}
          </Grid>
          <Grid item xs={12}>
            {`${wins}-${loses}-${draws} (W-L-D)`}
          </Grid>
          <Grid item xs={12}>
            {`Fight Night Bonuses: ${fightNightBonuses}`}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                Skill Breakdown
              </Grid>
              <Grid item xs={12}>
                Charts are compiled based on results from 10 fights
              </Grid>
              <Grid item xs={12}>
                Record: {`${wins}-${loses}-${draws}`}
              </Grid>
              <Grid item xs={12}>
                Summary: {summary}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                Fighter Info
              </Grid>
              <Grid item xs={12}>
                Nickname: {nickname}
              </Grid>
              <Grid item xs={12}>
                From: {from}
              </Grid>
              <Grid item xs={12}>
                Fights Out Of: {fightsOutOf}
              </Grid>
              <Grid item xs={12}>
                Age: {age}
              </Grid>
              <Grid item xs={12}>
                Height: {height}
              </Grid>
              <Grid item xs={12}>
                Weight: {weight}
              </Grid>
              <Grid item xs={12}>
                Reach: {reach}
              </Grid>
              <Grid item xs={12}>
                Leg Reach: {legReach}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FighterInfo;
