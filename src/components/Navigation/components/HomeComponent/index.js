import React from "react";
import Menu from "@material-ui/icons/Menu";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { isMobile } from 'react-device-detect'
import PropTypes from 'prop-types'

import styles from "./styles.module.css";

let maxWidth = "95%"
let float = "left"

if (isMobile) {
  maxWidth = "80%"
  float = "right"
}

const HomeComponent = (props) => (
  <Grid container>
    <Grid item xs={3} md={7} className={styles.menuContainer}>
      <Menu onClick={props.onMenuOpened} className={styles.menuIcon} />
    </Grid>
    <Hidden mdUp>
      <Grid item xs={4} />
    </Hidden>
    <Grid item xs={4} md={5} className={styles.logoContainer}>
      <Link to="/">
        <img style={{ maxWidth, float }} src={logo} alt="Logo" />
      </Link>
    </Grid>
  </Grid>
);

HomeComponent.propTypes = {
  onMenuOpened: PropTypes.func.isRequired
}

export default HomeComponent;
