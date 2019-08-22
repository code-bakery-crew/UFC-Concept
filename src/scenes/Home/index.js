import React from "react";
import { Grid } from "@material-ui/core";
import OrganizationSentence from "./components/OrganizationSentence";
import ShareIcon from "../../components/ShareIcon";
import NameTag from "./components/NameTag";
import Letter from "./components/Letter";
import ULetterImage from "./images/ULetterImage.png";
import CLetterImage from "./images/CLetterImage.png";
import Navigation from "../../components/Navigation";
import FLetter from "./components/FLetter";
import Footer from "../../components/Footer";
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
        marginBottom,
        zIndex: -100
      }}
    >
      <Grid item xs={4} md={3}>
        <Motion defaultStyle={{ x: -600 }} style={{ x: spring(0) }}>
          {({ x }) => (
            <div
              style={{
                WebkitTransform: `translate3d(${x}px, ${positionConstraint}, 0)`,
                transform: `translate3d(${x}px, ${positionConstraint}, 0)`
              }}
            >
              <Letter src={ULetterImage} alt="ULetter" />
            </div>
          )}
        </Motion>
      </Grid>
      <Grid item xs={4} md={3}>
        <FLetter />
      </Grid>
      <Grid item xs={4} md={3}>
        <Motion defaultStyle={{ x: 600 }} style={{ x: spring(0) }}>
          {({ x }) => (
            <div
              style={{
                WebkitTransform: `translate3d(${x}px, ${positionConstraint}, 0)`,
                transform: `translate3d(${x}px, ${positionConstraint}, 0)`
              }}
            >
              <Letter src={CLetterImage} alt="CLetter" />
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
    <Grid container  style={{position: "absolute", top: "100vh"}}>
       <Grid item sm={12} >
        <Footer/>
      </Grid> 
    </Grid>
  </>
);

export default Home;
