import React from 'react';
import { Grid } from "@material-ui/core";
import Logo from './components/Logo';
import SocialMedia from './components/SocialMedia';
import InfoText from './components/InfoText';
import FooterMenu from './components/FooterMenu';
import styles from "./styles.module.css";


const Footer =() =>(
<>
    <div className={styles.Footer}>
    <Grid container justify="space-between" style={{ paddingTop: "2vh"}}>
        <Grid item xs={12} sm={2}>
                <Logo/>
                <SocialMedia/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <FooterMenu/>
        </Grid>
        <Grid xs={10}>
            <InfoText/>
        </Grid>
    </Grid>
    </div>
</>
)

export default Footer;
