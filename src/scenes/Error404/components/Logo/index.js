import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import logo from "./images/UFC.png";
import styles from "./styles.module.css";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";

let maxWidth = "95%"
let float = "left"


if (isMobile) {
    maxWidth = "80%"
    float = "right"
  }

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