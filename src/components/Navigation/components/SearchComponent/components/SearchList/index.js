import React from 'react';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Fighters from "../../../../../../services/data/fighters.json";

class  SearchList extends React.Component{

    showResults(){
        
        if(this.props.results.length > 0){
            return(
                Fighters.fighters.map( (item) => {        
                    for(let i=0; i < this.props.results.length; i++){
                    if(this.props.results[i] === item.id){
                            return(
                                <>
                                    <div className={styles.line}/>
                                    <Link to={`/fighters/${item.id}`} className={styles.linkStyle}>
                                        <div className={styles.listElement}>
                                            <div className={styles.elements}>
                                                <div className={styles.fullName}>
                                                {item.firstName} {item.lastName}
                                                </div>
                                                <div>
                                                {item.currentRank}
                                                </div>
                                                <div>Wins: {item.wins} | Loses: {item.loses} | Draws: {item.draws}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            )
                    }
                    }
                })
            )
        }else{
            return(
                <p className={styles.noResult}>
                    No results
                </p>
            )
        }
        
    }

    render(){
    return(
            <div className={styles.resultList}>
                {this.showResults()}
            </div>
        );
    }
}

export default SearchList;
