import React, { Component } from 'react';
import { cargoChange } from '../../actions/cargoChange';
import { connect } from 'react-redux';
import CargoInput from '../cargoInput/cargoInput';

import './shipmentPage.css';


class ShipmentPage extends Component {
    
    componentDidMount() {
        let item = this.findCurrentItem();
        if(item === null) {
            document.title = `Cargo Planner`;
        } else {
            document.title = `Cargo Planner - ${item.name}`;
        }
    }

    findCurrentItem()  {
        let currentItem = null;
        if(this.props.itemId !== null) {
            this.props.coFetchShipments.shipments.find(item => {
                if(item.id === this.props.itemId) {
                    currentItem = item;
                }
            });    
        }
        return currentItem;
    }
      
    render() {
        let currentItem = this.findCurrentItem();
        
        if(currentItem === null) {
            return(
                <div className="shipment">
                    Choose the company
                </div>
            )
        } else {
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
}

function mapStateToProps( {coFetchShipments}) {
    return {
        coFetchShipments
    }
}

export default connect(mapStateToProps, { cargoChange })(ShipmentPage);