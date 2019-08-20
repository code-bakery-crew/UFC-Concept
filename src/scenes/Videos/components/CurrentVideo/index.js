import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const CurrentVideo = ({ video }) => {
  const regex = /watch\?v=(.*)/

  return (
    <Grid container>
      <Grid item xs={12} className={styles.videoWrapper}>
        <YouTube videoId={regex.exec(video.url)[1]} opts={{ width: '95%' }} />
      </Grid>
      <Grid item xs={12} className={styles.titleWrapper}>
        <h2 className={styles.title}>{video.title}</h2>
        <hr className={styles.breakLine} />
      </Grid>
      <Grid item xs={12} className={styles.descriptionWrapper}>
        <p className={styles.description}>{video.description}</p>
      </Grid>
    </Grid>
  )
}

CurrentVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default CurrentVideo
