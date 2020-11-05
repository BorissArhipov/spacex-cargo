import { combineReducers } from 'redux';
import fetchShipments from './fetchReducer';
import searchReducer from './searchReducer';


const reducer = combineReducers({
    coFetchShipments: fetchShipments,
    coSearchReducer :searchReducer 
});
  
export default reducer;