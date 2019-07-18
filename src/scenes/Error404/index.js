import React from 'react';
import { Grid } from "@material-ui/core";
import Logo from "./components/Logo";
import Fighter from "./components/Fighter";
import InfoText from "./components/InfoText";
import styles from "./styles.module.css";

const Error404 = () => (

  <div className={styles.ErrorPage}>
  <Grid container style={{ paddingTop: "4vh" }}>
    <Grid item xs={12} sm={2}>
      <Logo/>
    </Grid>
    <Grid item xs={false} sm={10}>

    </Grid>
  </Grid>

  <Grid container spacing={2} alignItems="stretch"  direction="row" >
    <Grid item xs={12} sm={6}>
      <InfoText/>
    </Grid>

    <Grid item xs={12} sm={6}  >
      <Fighter/>
    </Grid>
  </Grid>

  </div>
)

export default Error404
