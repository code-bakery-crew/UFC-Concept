import React from 'react';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from './styles.module.css'

const FooterMenu =()=>(

    <Grid container direction="row" className={styles.MenuContainer}>
        <Grid item xs={4} className={styles.FirstList}>
            <ul >
                <li style={{fontWeight: "bold"}}>UFC</li>
                <li><Link to="/techniques">Techniques</Link></li>
                <li><Link to="/fighters">Fighters</Link></li>
                <li><Link to="/daily-summary">Daily Summary</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><a href="https://ufcstore.com/" alt="Shop">Shop</a></li>
            </ul>
        </Grid>
        <Grid item xs={4}>
            <ul className={styles.SecondList} >
                <li style={{fontWeight: "bold"}}>LEGAL</li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
        </Grid>
    </Grid>

);

export default FooterMenu;
