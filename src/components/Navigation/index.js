import React from "react";
import { Grid } from "@material-ui/core";
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import { BrowserView } from "react-device-detect";

const Navigation = () => (
  <Grid container style={{ paddingTop: "4vh" }}>
    <Grid item xs={12} md={2}>
      <HomeComponent />
    </Grid>
    <Grid item xs={false} md={9} />
    <BrowserView>
      <Grid item xs={false} md={1}>
        <SearchComponent />
      </Grid>
    </BrowserView>
  </Grid>
);

export default Navigation;
