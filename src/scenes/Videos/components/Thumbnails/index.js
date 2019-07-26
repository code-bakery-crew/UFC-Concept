import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

const Thumbnails = ({ videos, onCurrentVideoClick }) => {
  return (
    <Grid container style={{ height: '80vh', overflowY: 'scroll' }}>
      {videos.map((video, key) => (
        <Grid container key={video.id} onClick={() => onCurrentVideoClick(key)}>
          <Grid item xs={12}>
            <img
              src={video.thumbnail}
              alt={`${video.title}Thumbnail`}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <p>{video.title}</p>
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
