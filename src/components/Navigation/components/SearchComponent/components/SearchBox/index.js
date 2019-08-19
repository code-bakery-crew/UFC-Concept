import React from 'react';
import styles from "./styles.module.css";
import SearchList from "../SearchList";

class SearchBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            listOpen: false,
            searchStr: '',
        };
        this.isfocused= this.isfocused.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    isfocused(){

        if(this.state.clicked){
            document.getElementById("search").focus();
        }else{
            document.getElementById("search").blur();
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.isClicked !== prevProps.isClicked){
            this.setState({clicked: this.props.isClicked})
        }
        this.isfocused();
    }

    handleSubmit(event){
        event.preventDefault();
    }


    handleSearch(event){
        this.setState({
            searchStr: event.target.value,
            listOpen: true
        });
    }

    clearInput(){
        this.setState({
            clicked: false,
            listOpen: false,
            searchStr: ''
        });
        document.getElementById("search").blur();
    }

    render(){

        let searchContent = null;

        if(this.state.listOpen){
            searchContent = (
                <SearchList searchStr={this.state.searchStr}/>
            )   
        }

        return(
            <>
                <>
                    {searchContent}
                </>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <input id="search" type="text" value={this.state.searchStr} placeholder="Search..." className={styles.searchField} onChange={this.handleSearch} onBlur={this.clearInput}>
                    </input>
                </form>
            </>
        );
    }
}

export default SearchBox;
