import React from 'react';
import styles from "./styles.module.css";
import Fighters from "../../../../../../services/data/fighters.json";

class  SearchList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            toSearch: '',
            results: []
        };

        this.search= this.search.bind(this);
    }

    componentDidUpdate(prevProps){
        if(this.props.searchStr !== prevProps.searchStr)
            this.setState({toSearch: this.props.searchStr});
        
        this.search();
    }

    search(){    
    }

    render(){
        return(
            <div className={styles.resultList}>
           <br></br>
            </div>
        );
    }
}

export default SearchList;
