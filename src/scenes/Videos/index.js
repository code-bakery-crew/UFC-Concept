import React, { useState } from 'react'
import { Grid, Hidden } from '@material-ui/core'
import leftFighter from './images/leftFighter.png'
import rightFighter from './images/rightFighter.png'
import CurrentVideo from './components/CurrentVideo'
import Thumbnails from './components/Thumbnails'
import Navigation from '../../components/Navigation'
import styles from './styles.module.css'

import videos from '../../services/data/videos.json'

const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  return (
    <>
      <Navigation title={'VIDEOS'} />
      <Grid container className={styles.pageContainer}>
        <Hidden mdDown>
          <Grid item xs={2}>
            <img
              src={leftFighter}
              className={[styles.fighterImage, styles.leftFighter].join(' ')}
              alt='leftFighter'
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <CurrentVideo video={videos[currentVideoIndex]} />
        </Grid>
        <Grid item xs={12} md={2}>
          <Thumbnails
            videos={videos}
            onCurrentVideoClick={setCurrentVideoIndex}
          />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={2}>
            <img
              src={rightFighter}
              className={[styles.fighterImage, styles.rightFighter].join(' ')}
              alt='rightFighter'
            />
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}

export default Videos
