import React from "react";
import { Grid } from "@material-ui/core";
import OrganizationSentence from "./components/OrganizationSentence";
import ShareIcon from "../../components/ShareIcon";
import NameTag from "./components/NameTag";
import Letter from "./components/Letter";
import U from "./images/U.png";
import C from "./images/C.png";
import Navigation from "../../components/Navigation";
import FLetter from "./components/FLetter";
import { Motion, spring } from "react-motion";
import { isMobile } from "react-device-detect";
import detectSafari from "../../services/utils/detectSafari";

const marginBottom = isMobile ? "10vh" : "5vh";
const topAndBottomOfMain = isMobile ? "15vh" : "0";
const positionConstraint = detectSafari() ? "50%" : "0";

const Home = () => (
  <>
    <Navigation />
    <Grid
      container
      alignContent="center"
      justify="center"
      style={{
        position: "fixed",
        top: topAndBottomOfMain,
        bottom: topAndBottomOfMain,
        marginBottom: "10vh",
        zIndex: -100
      }}
    >
      <Grid item xs={3}>
        <Motion defaultStyle={{ x: -600 }} style={{ x: spring(0) }}>
          {({ x }) => (
            <div
              style={{
                WebkitTransform: `translate3d(${x}px, ${positionConstraint}, 0)`,
                transform: `translate3d(${x}px, ${positionConstraint}, 0)`
              }}
            >
              <Letter src={U} alt="ULetter" />
            </div>
          )}
        </Motion>
      </Grid>
      <Grid item xs={3}>
        <FLetter />
      </Grid>
      <Grid item xs={3}>
        <Motion defaultStyle={{ x: 600 }} style={{ x: spring(0) }}>
          {({ x }) => (
            <div
              style={{
                WebkitTransform: `translate3d(${x}px, ${positionConstraint}, 0)`,
                transform: `translate3d(${x}px, ${positionConstraint}, 0)`
              }}
            >
              <Letter src={C} alt="CLetter" />
            </div>
          )}
        </Motion>
      </Grid>
    </Grid>
    <Grid container style={{ position: "fixed", bottom: 0, marginBottom }}>
      <Grid item xs={false} md={4} />
      <Grid item xs={12} md={4}>
        <NameTag />
      </Grid>
      <Grid item xs={false} md={4} />
      <Grid item xs={false} md={2} />
      <Grid item xs={12} md={8}>
        <OrganizationSentence />
      </Grid>
      <Grid item xs={10} md={1} />
      <Grid item xs={1}>
        <ShareIcon />
      </Grid>
    </Grid>
  </>
);

export default Home;
