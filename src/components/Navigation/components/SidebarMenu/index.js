import React from "react";
import PropTypes from "prop-types";
import { Grid, Hidden } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import SearchComponent from "../SearchComponent";
import ShareIcon from "../../../ShareIcon";

import styles from "./styles.module.css";

const SidebarMenu = props => (
  <div className={styles.sidebarMenuCotainer}>
    <Grid container className={styles.menuHead}>
      <Grid item xs={false} md={1} />
      <Grid item xs={2} md={3} className={styles.closeBtn}>
        <Close onClick={props.onMenuClosed} className={styles.Close} />
      </Grid>
      <Grid item xs={4} className={styles.logoContainer}>
        <Link to="/">
          <img className={styles.LogoImage} src={logo} alt="Logo" />
        </Link>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={3} />
        <Grid item xs={2} className={styles.searchContainer}>
          <SearchComponent />
        </Grid>
      </Hidden>
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
      <Grid item xs={false} md={1} />
      <Grid item xs={3} className={styles.shop}>
        <a
          href="https://ufcstore.com/?utm_campaign=NA&utm_medium=header&utm_source=ufccom"
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOP+
        </a>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={6} />
        <Grid item xs={2}>
          <ShareIcon />
        </Grid>
      </Hidden>
    </Grid>
  </div>
);

SidebarMenu.propTypes = {
  onMenuClosed: PropTypes.func.isRequired
};

export default SidebarMenu;
