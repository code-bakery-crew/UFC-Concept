import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { isMobile } from "react-device-detect";
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';


const SidebarPanel = ({ menuHead, menuOptions, menuBottom, style, subMenu }) => {
  const actualPage = window.location.pathname;
  const generateMenuOption = (option) => (
    <li className='menuOption' onClick={option.click} key={option.value}
        style={{ fontWeight: actualPage === option.link ? 'bold' : '' }}>
      <Link to={option.link} style={option.style}>
        {
          option.subItems ? (
            <>
              {option.value}
              <div className={styles.arrowIcon}>
                {subMenu ? <ArrowLeft/> : <ArrowRight/>}
              </div>
            </>
          ) : option.value
        }
      </Link>
      {
        option.subItems && isMobile ? (
          <ul className={styles.subMenu} style={{ height: subMenu ? "22vw" : "0" }}>
            {option.subItems.map(subItem => (
              <li className='menuOption' key={subItem.value} onClick={subItem.click}>
                <Link to={subItem.link} style={subItem.style}>{subItem.value}</Link>
              </li>
            ))}
          </ul>
        ) : null
      }
    </li>
  );

  return (
    <div style={style} className={styles.sidebarMenuContainer}>
      <Grid container>
        <Grid container className={styles.menuHead}>
          {menuHead}
        </Grid>
        <Grid container className={styles.menuOptions}>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <ul className={styles.menuList}>
              {menuOptions.map(generateMenuOption)}
            </ul>
          </Grid>
        </Grid>
        <Grid container className={styles.menuBottom}>
          {menuBottom}
        </Grid>
      </Grid>
    </div>
  )
};

SidebarPanel.propTypes = {
  menuHead: PropTypes.object,
  menuOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    style: PropTypes.object,
    click: PropTypes.func,
    subItems: PropTypes.array,
  })).isRequired,
  menuBottom: PropTypes.object,
  style: PropTypes.object,
};

export default SidebarPanel;
