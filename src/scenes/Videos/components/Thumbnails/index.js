import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Thumbnails = ({ videos, onCurrentVideoClick }) => {
  return (
    <Grid container className={styles.thumbnailsContainer}>
      {videos.map((video, key) => (
        <Grid container className={styles.thumbnailContainer} key={video.id} onClick={() => onCurrentVideoClick(key)}>
          <Grid item xs={12}>
            <img
              src={video.thumbnail}
              alt={`${video.title}Thumbnail`}
              className={styles.videoImage}
            />
          </Grid>
          <Grid item xs={12} className={styles.titleWrapper}>
            <p className={styles.videoTitle}>{video.title}</p>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

Thumbnails.propTypes = {
  onCurrentVideoClick: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  ).isRequired
}

export default Thumbnails
