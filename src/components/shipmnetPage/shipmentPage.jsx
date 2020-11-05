import React, { Component } from 'react';
import { cargoChange } from '../../actions/cargoChange';
import { connect } from 'react-redux';
import CargoInput from '../cargoInput/cargoInput';

import './shipmentPage.css';


class ShipmentPage extends Component {
      
    render() {
        let currentItem;
        
        const findCurrentItem = () => {
            this.props.coFetchShipments.shipments.find(item => {
                if(item.id === this.props.itemId) {
                    currentItem = item;
                }
            });
        }
        findCurrentItem();

        const bays = () => {
            let value;
            if(currentItem.boxes === null || '') {
                value = 0
            } else {
                value = Math.ceil(currentItem.boxes.split(',').reduce((acc, cur) => Number(acc) +  Number(cur)) / 10);
            }
            return value;
        }

        return(
            <div className="shipment">
                <h2>{currentItem.name}</h2>
                <a href="#">{currentItem.email}</a>
                <p>
                    Number of required cargo bays: {bays()}
                </p>
                <CargoInput 
                    itemId={this.props.itemId}
                    value={currentItem.boxes}
                />
            </div>
        );
    }
}

function mapStateToProps( {coFetchShipments}) {
    return {
        coFetchShipments
    }
}

export default connect(mapStateToProps, { cargoChange })(ShipmentPage);