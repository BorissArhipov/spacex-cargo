import { combineReducers } from 'redux';
import fetchShipments from './fetchReducer';
import searchReducer from './searchReducer';
import infoReducer from './infoReducer';


const reducer = combineReducers({
    coFetchShipments: fetchShipments,
    coSearchReducer :searchReducer,
    coInfoReducer: infoReducer
});
  
export default reducer;