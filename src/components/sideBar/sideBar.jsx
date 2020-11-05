import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return(
            <ul>
                {
                    this.props.shipments.map(item => {
                        return <Link key={`${item.id}-link`} to={`/${item.id}`}>{item.name}</Link>
                    })
                }
            </ul>
        );
    }
}

function mapStateToProps( { cofetchShipments: { shipments } }) {
    return { shipments };
}

export default connect(mapStateToProps)(Sidebar);