import React from "react";
import { Grid } from "@material-ui/core";
import logo from "./images/UFC.png";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Logo = () => (
   
  <Grid container className={styles.logoContainer} >
    <Grid item xs={false} sm={7} />
    <Grid item xs={12} sm={5}  >
      <Link to="/"><img src={logo} alt="Logo" /></Link>
    </Grid>
  </Grid>
  );
  
  export default Logo;
  