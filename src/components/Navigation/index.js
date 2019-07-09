import React, { useState } from "react";
import { Grid, Drawer } from "@material-ui/core";
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import { BrowserView } from "react-device-detect";
import SidebarMenu from "./components/SidebarMenu";

const Navigation = () => {
  const [menuOpened, toggleMenu] = useState(false);

  return (
    <Grid container style={{ paddingTop: "6vh" }}>
      <Drawer open={menuOpened} onClose={() => toggleMenu(false)}>
        <SidebarMenu onMenuClosed={() => toggleMenu(false)} />
      </Drawer>
      <Grid item xs={12} md={2}>
        <HomeComponent onMenuOpened={() => toggleMenu(true)} />
      </Grid>
      <Grid item xs={false} md={9} />
      <BrowserView>
        <Grid item xs={false} md={1}>
          <SearchComponent />
        </Grid>
      </BrowserView>
    </Grid>
  );
};

export default Navigation;
