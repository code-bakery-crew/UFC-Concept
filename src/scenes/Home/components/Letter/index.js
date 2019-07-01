import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Letter = (props) => (
    <img src={props.src} className={styles.Letter} alt={props.alt} />
)

Letter.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Letter
