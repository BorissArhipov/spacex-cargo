const initialState = {
    shipments: [],
    loading: true,
    error: null
}

const fetchShipments = (state = initialState, action) => { 
    switch (action.type) { 
        case 'FETCH_SHIPMENTS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'FETCH_SHIPMENTS_SUCCESS':
            return {
                ...state,
                shipments: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_SHIPMENTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            
        default:
            return state;
        }
  };
  
  export default fetchShipments;
  