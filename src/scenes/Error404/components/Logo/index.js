import React from "react";
import {Grid} from "@material-ui/core";
import logo from "./images/UFC.png";
import styles from "./styles.module.css";
import {isMobile} from 'react-device-detect';
import {Link} from "react-router-dom";

const maxWidth = isMobile ? "80%" : "97%";
const float = isMobile ? "right" : "left";

const Logo = () => (
   <Grid container >
      <Grid item xs={7}  >
      </Grid>
      <Grid item xs={4} sm={5} className={styles.logoContainer}>
        <Link to="/">
          <img  style={{ maxWidth, float }} src={logo} alt="Logo" />
          </Link>
      </Grid>
    </Grid>
    );
    
    export default Logo;
