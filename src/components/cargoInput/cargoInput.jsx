import React, { Component } from 'react';
import { cargoChange } from '../../actions/cargoChange';
import { connect } from 'react-redux';
import handleEvent from '../../actions/handleEvent';
import clearMessage from '../../actions/clearMessage';


class CargoInput extends Component {
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
            this.props.handleEvent('invalid-input');
            setTimeout(this.props.clearMessage, 4000);
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

        const inputValue = () => {
            if( this.props.value !== null) {
                return this.props.value
            } else {
                return '';
            }
        }

        return(
            <div>
                <label htmlFor="cargo">
                    Cargo boxes:
                </label>
                <input 
                    className="form-control header--input"
                    name="cargo"
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

export default connect(mapStateToProps, { cargoChange, handleEvent, clearMessage })(CargoInput);