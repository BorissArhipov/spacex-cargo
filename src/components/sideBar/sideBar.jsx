import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './sideBar.css';

class Sidebar extends Component {
    render() {
        let filteredList = this.props.coFetchShipments.shipments.filter(item => {
            return item.name.toLowerCase().indexOf(this.props.coSearchReducer.searchWord.toLowerCase()) > -1;
        });
        
        if(filteredList.length === 0) {
            return(
                <ul className="list-group sidebar overflow-auto">
                    <li className="list-group-item">
                        Nothing found
                    </li> 
                </ul>
            ) 
        } else {
            return(
               <ul className="list-group sidebar overflow-auto">
                    {
                        filteredList.map(item => {
                            return (
                                <li key={`${item.id}-link`} className="list-group-item">
                                    <Link to={`/${item.id}`}>{item.name}</Link>    
                                </li> 
                            );
                        }) 
                    }
                </ul>
            )  
        }
    }
}

function mapStateToProps( { coFetchShipments, coSearchReducer}) {
    return { 
        coFetchShipments,
        coSearchReducer
    };
}

export default connect(mapStateToProps)(Sidebar);