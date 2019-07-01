import React from 'react'
import Search from '@material-ui/icons/Search'

import styles from "./styles.module.css"

const SearchComponent = () => (
  <div className={styles.searchIconContainer}>
    <Search className={styles.searchIcon} />
  </div>
)

export default SearchComponent
