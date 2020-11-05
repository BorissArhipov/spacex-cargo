import { combineReducers } from 'redux';
import fetchShipments from './fetchReducer';


const reducer = combineReducers({
    fetchShipments: fetchShipments
});
  
export default reducer;