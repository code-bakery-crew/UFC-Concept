import React from 'react';
import { Debounce } from 'react-throttle';
import styles from "./styles.module.css";

class SearchBox extends React.Component{

    constructor(props) {
        super(props);
        this.isfocused= this.isfocused.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    isfocused = (click) =>{
        if(click){
            document.getElementById("search").focus();
    }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
    }

    clearInput = (event) =>{
        event.target.value = '';
        let val = event.target.value;
        
        setTimeout(() => {
            this.props.handleSearch(val);
            this.props.unclicked();
          }, 150);
    }

    render(){
        this.isfocused(this.props.isClicked);
        return(
            <>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Debounce time="300" handler="onChange">
                        <input id="search" type="text"  placeholder="Search..." className={styles.searchField} onChange={event => this.props.handleSearch(event.target.value)} onBlurCapture={event => this.clearInput(event)} />
                    </Debounce>
                </form>
            </>
        );
    }
}

export default SearchBox;
