import React from 'react'
import UpperFLetterImage from './images/UpperFLetterImage.png'
import LowerFLetterImage from './images/LowerFLetterImage.png'
import { Grid } from '@material-ui/core'
import { Motion, spring } from 'react-motion'
import detectSafari from '../../../../services/utils/detectSafari'

import styles from './styles.module.css'

let upperFSpringValue = 0
let transformUnits = 'px'
if (detectSafari()) {
  upperFSpringValue = 240
  transformUnits = '%'
}

const FLetter = () => (
  <Grid container>
    <Grid item xs={12}>
      <Motion
        defaultStyle={{ x: -600 }}
        style={{ x: spring(upperFSpringValue) }}
      >
        {({ x }) => (
          <img
            src={UpperFLetterImage}
            alt='FLetter'
            className={styles.upperFLetterImage}
            style={{
              transform: `translate3d(0, ${x + transformUnits}, 0)`,
              WebkitTransform: `translate3d(0, ${x + transformUnits}, 0)`
            }}
          />
        )}
      </Motion>
    </Grid>
    <Grid item xs={12}>
      <Motion
        defaultStyle={{ x: 600 }}
        style={{ x: spring(detectSafari() ? 110 : 0) }}
      >
        {({ x }) => (
          <img
            src={LowerFLetterImage}
            alt='FLetter'
            className={styles.lowerFLetterImage}
            style={{
              transform: `translate3d(0, ${x + transformUnits}, 0)`,
              WebkitTransform: `translate3d(0, ${x + transformUnits}, 0)`
            }}
          />
        )}
      </Motion>
    </Grid>
  </Grid>
)

export default FLetter
