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
            this.setState({
                toSearch: this.props.searchStr,
                //result: []
            });
        
        this.search();
    }

    search(){  

        if( this.state.toSearch.length > 1){
            for(let i=0; i < Fighters.fighters.length; i++){
              for(let j=0; j< Fighters.fighters[i].firstName.length; j++){
                if( Fighters.fighters[i].firstName.toLowerCase().indexOf(this.state.toSearch.toLowerCase()) !== -1){   
                  if( !this.state.results.includes(Fighters.fighters[i].id))
                    this.state.results.push(Fighters.fighters[i].id);
                  
                }
              }
            }
          }

         
    }

    render(){

        return(
            <div className={styles.resultList}>
                <br></br>
                <br></br>
                {
                Fighters.fighters.map( (item) => {        
                    for(let i=0; i < this.state.results.length; i++){
                    if(this.state.results[i] === item.id){
                        return(
                        <p>{item.firstName} {item.lastName}</p>
                        
                        );  
                    }
                    }
                })
            }
            </div>
        );
    }
}

export default SearchList;
