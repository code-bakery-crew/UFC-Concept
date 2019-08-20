import React from 'react';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

const FooterMenu = () => (
    <Grid container direction="row" className={styles.menuContainer}>
        <Grid item xs={4} className={styles.firstList}>
            <ul >
                <li className={styles.header}>UFC</li>
                <li><Link to="/techniques">Techniques</Link></li>
                <li><Link to="/fighters/1">Fighters</Link></li>
                <li><Link to="/daily-summary">Daily Summary</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><a href="https://ufcstore.com/" target="_blank" rel="noopener noreferrer" >Shop</a></li>
            </ul>
        </Grid>
        <Grid item xs={4}>
            <ul className={styles.secondList} >
                <li className={styles.header}>LEGAL</li>
                <li><a href="https://www.ufc.com/terms">Terms</a></li>
                <li><a href="https://www.ufc.com/privacy-policy">Privacy Policy</a></li>
            </ul>
        </Grid>
    </Grid>

);

export default FooterMenu;
