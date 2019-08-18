import React from 'react'
import Search from '@material-ui/icons/Search'
import SearchBox from './components/SearchBox'
import styles from "./styles.module.css"

class SearchComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {isClicked: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render(){
    
  return(
    <div className={styles.searchIconContainer}>
      <SearchBox isClicked={this.state.isClicked} />
      <Search onClick={this.handleClick} className={styles.searchIcon} />
    </div>
  );
  }
}
  
export default SearchComponent
