import React, { Component } from 'react';
import { cargoChange } from '../../actions/cargoChange';
import { connect } from 'react-redux';


class ShipmentPage extends Component {
    validate(value) {
        let valid = true;
        value.split(',').forEach(item => {
            if(isNaN(Number(item))) {
                valid = false;
            }
        }) 
        return valid;
    }
    
    handleChange(e) {
        e.preventDefault();
        if(!this.validate(e.target.value)) {
            console.log('invalid');
            return;
        }

        const findCargo = () => {
            let shipnts = this.props.coFetchShipments.shipments;
            shipnts.map(item => {
                if(item.id === this.props.itemId) {
                    return item.boxes = e.target.value
                } else {
                    return item;
                }
            })
            return shipnts;
        }

        this.props.cargoChange(findCargo());
    }
    
    
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

        const inputValue = () => {
            if( currentItem.boxes !== null) {
                return currentItem.boxes
            } else {
                return '';
            }
        }

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
            <div>
                <h2>{currentItem.name}</h2>
                <a href="#">{currentItem.email}</a>
                <p>
                    Number of required cargo bays: {bays()}
                </p>
                <input 
                    value={inputValue()} 
                    type="text"
                    onChange={e => this.handleChange(e)}
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