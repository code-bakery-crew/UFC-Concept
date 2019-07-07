import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import { BrowserView } from "react-device-detect";
import PropTypes from 'prop-types'

const Navigation = ({ title }) => {
  const pageTitle = title ? <div>{title}</div> : null;

  return (
    <Grid container style={{ paddingTop: "4vh" }}>
      <Grid item xs={12} md={2}>
        <HomeComponent />
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
  );
};

Navigation.propTypes = {
  title: PropTypes.string
}

export default Navigation;
