import React from "react";
import { Grid } from "@material-ui/core";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import styles from "./styles.module.css";

const SocialMedia = () => (
   <Grid container 
    className={styles.socialContainer}
    justify="center"
    alignItems="center">
      <Grid item xs={false} sm={7} />
      <Grid item xs={4} sm={5}  className={styles.IconsContainer}>
        <a href="https://pl-pl.facebook.com/ufceurope/" target="_blank" rel="noopener noreferrer" alt="facebook"><img  src={facebook} alt="Facebook" /></a>
        <a href="https://www.instagram.com/ufc/?hl=pl" target="_blank" rel="noopener noreferrer"alt="instagram"><img  className={styles.Instagram} src={instagram} alt="Instagram" /></a>
        <a href="https://twitter.com/ufc" target="_blank" rel="noopener noreferrer" alt="twitter"><img  className={styles.Twitter} src={twitter} alt="Twitter" /></a>
      </Grid>
    </Grid>
  );
  
  export default SocialMedia;
  
