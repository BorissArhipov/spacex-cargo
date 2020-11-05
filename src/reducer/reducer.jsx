import { combineReducers } from 'redux';
import fetchShipments from './fetchReducer';


const reducer = combineReducers({
    cofetchShipments: fetchShipments
});
  
export default reducer;