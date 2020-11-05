import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        let filteredList = this.props.coFetchShipments.shipments.filter(item => {
            return item.name.toLowerCase().indexOf(this.props.coSearchReducer.searchWord.toLowerCase()) > -1;
        });
        console.log(this.props.coSearchReducer);
        return(
            <ul>
                {
                    filteredList.map(item => {
                        return <Link key={`${item.id}-link`} to={`/${item.id}`}>{item.name}</Link>
                    })
                }
            </ul>
        );
    }
}

function mapStateToProps( { coFetchShipments, coSearchReducer}) {
    return { 
        coFetchShipments,
        coSearchReducer
    };
}

export default connect(mapStateToProps)(Sidebar);