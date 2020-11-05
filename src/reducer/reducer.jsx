import { combineReducers } from 'redux';
import fetchShipments from './fetchReducer';
import searchReducer from './searchReducer';
import infoReducer from './infoReducer';
import burgerReducer from './burgerReducer';


const reducer = combineReducers({
    coFetchShipments: fetchShipments,
    coSearchReducer :searchReducer,
    coInfoReducer: infoReducer,
    coBurgerReducer: burgerReducer
});
  
export default reducer;