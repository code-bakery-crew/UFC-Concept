import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import fighter from "./images/errorFighter.png";

import styles from "./styles.module.css";


const Fighter = () =>(

    
        <img  className={styles.Fighter} src={fighter} alt="Kick!"/>

);

export default Fighter;
