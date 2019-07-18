import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import { isMobile } from "react-device-detect";

// menuOption:
// - value: string
// - link:  string
// - click: func
// - style: json
const SidebarPanel = ({menuHead, menuOptions, menuBottom, style, subMenu}) => {
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
              {
                menuOptions.map(option => (
                  <li className='menuOption' style={option.style} onClick={option.click} key={option.value}>
                    {option.link ? <Link to={option.link}>{option.value}</Link> : option.value}
                    {
                      option.subItems && isMobile ? (
                        <ul className={styles.subMenu} style={{
                          height: subMenu ? "200px" : "0", // TODO: fix styles (mobile)
                          overflow: "scroll"
                        }}>
                          {option.subItems.map(subItem => (
                            <li className='menuOption' key={subItem.value} style={{...subItem.style, marginTop: "2vw"}} onClick={subItem.click}>
                              {subItem.link ? <Link to={subItem.link}>{subItem.value}</Link> : subItem.value}
                            </li>
                          ))}
                        </ul>
                      ) : null
                    }
                  </li>
                ))
              }
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
  menuOptions: PropTypes.array,
  menuBottom: PropTypes.object,
  style: PropTypes.object,
};

export default SidebarPanel;
