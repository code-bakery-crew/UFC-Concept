import React from 'react'
import Search from '@material-ui/icons/Search'
import SearchBox from './components/SearchBox'
import SearchList from "./components/SearchList"
import Fighters from "../../../../services/data/fighters.json"
import styles from "./styles.module.css"

class SearchComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      changeForClick: true,
      listOpen: false,
      results: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () =>{
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
   
  }

unclicked = () =>{
  this.setState({isClicked: false})
}

  resultListManage = (toSearch) =>{
    if(toSearch !== '')
      this.setState({listOpen: true})
    else
      this.setState({listOpen:false})
  }

  search = (toSearch) =>{
    this.setState({results: []});

    if( toSearch.length > 1){
      for(let i=0; i < Fighters.fighters.length; i++){
        for(let j=0; j< Fighters.fighters[i].firstName.length; j++){
          if( Fighters.fighters[i].firstName.toLowerCase().indexOf(toSearch.toLowerCase()) !== -1){   
            if( !this.state.results.includes(Fighters.fighters[i].id))
              this.state.results.push(Fighters.fighters[i].id);
          }
        }
      }
    }
    this.resultListManage(toSearch);
  }

  render(){
    let searchContent = null;

    if(this.state.listOpen){
        searchContent = (
            <SearchList results={this.state.results}/>
        )   
    }
    return(
      <div className={styles.searchIconContainer}>
        <>{searchContent}</>
        <SearchBox unclicked={() => this.unclicked()} isClicked={this.state.isClicked} handleSearch={(toSearch) => this.search(toSearch)} />
        <Search onClick={this.handleClick} className={styles.searchIcon} />
      </div>
    );
  }
}
  
export default SearchComponent
