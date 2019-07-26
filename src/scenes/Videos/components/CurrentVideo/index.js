import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'

const CurrentVideo = ({ video }) => {
  const regex = /watch\?v=(.*)/

  return (
    <Grid container>
      <Grid item xs={12}>
        <YouTube videoId={regex.exec(video.url)[1]} opts={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <h2>{video.title}</h2>
      </Grid>
      <Grid item xs={12}>
        <p>{video.description}</p>
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
