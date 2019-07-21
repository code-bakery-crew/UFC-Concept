import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Hidden } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import SearchComponent from "../SearchComponent";
import ShareIcon from "../../../ShareIcon";
import SidebarPanel from "./components/SidebarPanel";
import styles from "./styles.module.css";
import { isMobile } from "react-device-detect";
import fightersData from '../../../../services/data/fighters';


const SidebarMenu = ({ onMenuClosed }) => {
  const [subMenu, setSubMenu] = useState(false);
  const fightersMenuOptions = fightersData.fighters.map(fighter => (
    {
      value: [fighter.firstName, fighter.lastName].join(' '),
      link: `/fighters/${fighter.id}`,
      click: onMenuClosed
    }
  ));

  const menuOptions = [
    {
      value: 'TECHNIQUES',
      link: '/techniques'
    },
    {
      value: 'FIGHTERS',
      link: '#',
      click: () => setSubMenu(!subMenu),
      subItems: fightersMenuOptions
    },
    {
      value: 'DAILY SUMMARY',
      link: '/daily-summary'
    },
    {
      value: 'VIDEOS',
      link: '/videos'
    }
  ];

  return (
    <div style={{ height: '100%' }}>
      <SidebarPanel
        subMenu={subMenu}
        menuHead={
          <>
            <Grid item xs={false} md={1}/>
            <Grid item xs={2} md={3} className={styles.closeBtn}>
              <Close onClick={onMenuClosed} className={styles.Close}/>
            </Grid>
            <Grid item xs={4} className={styles.logoContainer}>
              <Link to="/">
                <img className={styles.LogoImage} src={logo} alt="Logo"/>
              </Link>
            </Grid>
            <Hidden mdUp>
              <Grid item xs={3}/>
              <Grid item xs={2} className={styles.searchContainer}>
                <SearchComponent/>
              </Grid>
            </Hidden>
          </>
        }
        menuOptions={menuOptions}
        menuBottom={
          <>
            <Grid item xs={false} md={1}/>
            <Grid item xs={3} className={styles.shop}>
              <a
                href="https://ufcstore.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SHOP+
              </a>
            </Grid>
            <Hidden mdUp>
              <Grid item xs={6}/>
              <Grid item xs={2}>
                <ShareIcon/>
              </Grid>
            </Hidden>
          </>
        }
      />
      <SidebarPanel
        style={{
          position: 'fixed',
          left: '27.5vw',
          top: '0',
          height: '100%',
          width: subMenu && !isMobile ? '27.5vw' : '0',
          overflow: "hidden",
          whiteSpace: "nowrap",
          opacity: subMenu && !isMobile ? '.85' : '0',
          textAlign: 'center',
          transition: 'width .5s, opacity .5s',
          boxShadow: 'inset 30px 0px 35px -40px gray'
        }}
        menuOptions={fightersMenuOptions}
      />
    </div>
  )
};

SidebarMenu.propTypes = {
  onMenuClosed: PropTypes.func.isRequired
};

export default SidebarMenu;
