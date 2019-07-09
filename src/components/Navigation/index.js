import React, { useState } from "react";
import { Grid, Drawer, Hidden } from "@material-ui/core";
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import { BrowserView } from "react-device-detect";
import SidebarMenu from "./components/SidebarMenu";
import PropTypes from 'prop-types'

const Navigation = ({ title }) => {
  const [menuOpened, toggleMenu] = useState(false);
  const pageTitle = title ? <div style={{ transform: 'translate(0, 25%)', color: '#3a3a3a', fontSize: '2.2vh' }}>{title}</div> : null;

  return (
    <Grid container style={{ paddingTop: "4vh" }}>
      <Drawer open={menuOpened} onClose={() => toggleMenu(false)}>
        <SidebarMenu onMenuClosed={() => toggleMenu(false)} />
      </Drawer>
      <Grid item xs={12} md={2}>
        <HomeComponent onMenuOpened={() => toggleMenu(true)} />
      </Grid>
      <Grid item xs={false} md={3} />
      <Hidden mdDown>
        <Grid item md={2} style={{ textAlign: 'center' }}>
          {pageTitle}
        </Grid>
      </Hidden>
      <Grid item xs={false} md={4} />
      <BrowserView>
        <Grid item xs={false} md={1}>
          <SearchComponent />
        </Grid>
      </BrowserView>
    </Grid>
  )
}

Navigation.propTypes = {
  title: PropTypes.string
}

export default Navigation;
