import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const SidebarMenu = props => (
  <div className={styles.sidebarMenuCotainer}>
    <Grid container className={styles.menuHead}>
      <Grid item xs={1} />
      <Grid item xs={3} className={styles.closeBtn}>
        <Close onClick={props.onMenuClosed} />
      </Grid>
      <Grid item xs={4}>
        <Link to="/">
          <img className={styles.LogoImage} src={logo} alt="Logo" />
        </Link>
      </Grid>
    </Grid>
    <Grid container className={styles.menuOptions}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <ul className={styles.menuList}>
          <li>
            <Link to="/techniques">TECHNIQUES</Link>
          </li>
          <li>FIGHTERS</li>
          <li>
            <Link to="/daily-summary">DAILY SUMMARY</Link>
          </li>
          <li>
            <Link to="/videos">VIDEOS</Link>
          </li>
        </ul>
      </Grid>
    </Grid>
    <Grid container className={styles.shopContainer}>
      <Grid item xs={1} />
      <Grid item xs={3} className={styles.shop}>
        <a
          href="https://ufcstore.com/?utm_campaign=NA&utm_medium=header&utm_source=ufccom"
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOP+
        </a>
      </Grid>
    </Grid>
  </div>
);

SidebarMenu.propTypes = {
  onMenuClosed: PropTypes.func.isRequired
};

export default SidebarMenu;
