import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import leftFighter from './images/leftFighter.png'
import rightFighter from './images/rightFighter.png'
import CurrentVideo from './components/CurrentVideo'
import Thumbnails from './components/Thumbnails'
import Navigation from '../../components/Navigation'

import videos from '../../services/data/videos.json'

const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  return (
    <>
      <Navigation title={'VIDEOS'} />
      <Grid container>
        <Grid item xs={2}>
          <img
            src={leftFighter}
            // className={styles.fighterImage}
            style={{ width: '100%' }}
            alt='leftFighter'
          />
        </Grid>
        <Grid item xs={6}>
          <CurrentVideo video={videos[currentVideoIndex]} />
        </Grid>
        <Grid item xs={2}>
          <Thumbnails videos={videos} onCurrentVideoClick={setCurrentVideoIndex} />
        </Grid>
        <Grid item xs={2}>
          <img
            src={rightFighter}
            // className={styles.fighterImage}
            style={{ width: '100%' }}
            alt='rightFighter'
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Videos
