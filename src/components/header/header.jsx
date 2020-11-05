import React, {Component} from 'react';
import { fetchData } from '../../actions/fetch-actions';
import { connect } from 'react-redux';
import { saveState } from '../../toLocalStorage/toLocalStorage';
import { changeSearchWord } from '../../actions/changeSearchWord';

class Header extends Component {
    render() {
        return(
            <div>
                <input 
                    placeholder="Search" 
                    type="text"
                    onChange={e => this.props.changeSearchWord(e.target.value)}
                />
                <button 
                    onClick={() => this.props.fetchData()}
                >
                    LOAD
                </button>

                <button 
                    onClick={() => saveState({coFetchShipments: {shipments: this.props.shipments}})}
                >
                    SAVE
                </button>
            </div>
        );
    }
}

function mapStateToProps( { coFetchShipments: { shipments } }) {
    return { shipments };
}

export default connect(mapStateToProps, { fetchData, changeSearchWord })(Header);