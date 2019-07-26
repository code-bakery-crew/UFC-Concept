import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./styles.module.css";

const InfoText = () => (
    <Grid item xs={12} className={styles.Info}>
        <div>
            Copyright © 2019 UFC All Rights Reserved
        </div>
        <div>
            Created by <a href="https://github.com/code-bakery-crew" target="_blank" rel="noopener noreferrer">CodeBakery</a> 
        </div>
    </Grid>
)

export default InfoText;
