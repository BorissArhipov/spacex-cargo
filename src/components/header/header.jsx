import React, {Component} from 'react';
import { fetchData } from '../../actions/fetch-actions';
import { connect } from 'react-redux';
import { saveState } from '../../toLocalStorage/toLocalStorage';

class Header extends Component {
    render() {
        console.log(this.props.shipments);
        return(
            <div>
                <button 
                    onClick={() => this.props.fetchData()}
                >
                    LOAD
                </button>

                <button 
                    onClick={() => saveState({cofetchShipments: {shipments: this.props.shipments}})}
                >
                    SAVE
                </button>
            </div>
        );
    }
}

function mapStateToProps( { cofetchShipments: { shipments } }) {
    return { shipments };
}

export default connect(mapStateToProps, { fetchData })(Header);