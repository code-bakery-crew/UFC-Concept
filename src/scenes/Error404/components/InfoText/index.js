import React from "react";
import {Grid} from "@material-ui/core";
import styles from "./styles.module.css";

const InfoText = () => (
    <Grid container spacing={1} wrap="wrap" alignItems="flex-start" justify="center">
        <Grid item xs={12}  >
            <div className={styles.Error404}>
                <div>
                    4
                </div>
                <div className={styles.Element0}>
                    0
                </div>
                <div className={styles.Element4}>
                    4
                </div>
            </div>
        </Grid>
        <Grid item xs={12} >
            <div className={styles.ErrorText}>
                <div className={styles.Oops}>
                    Oops !
                </div>
                <div className={styles.Kicked}>
                    The page was kicked !
                </div>
            </div>
        </Grid>
    </Grid>
)

export default InfoText;
