const initialState = {
    message: null,
    color: ''
}

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_EVENT':
            if(action.payload === 'error') {
                return {
                    ...state,
                    message: 'Something went wrong! Please try again later.',
                    color: '#ff3c37'
                };  
            }

            if(action.payload === 'loaded') {
                return {
                    ...state,
                    message: 'Data loaded, but not saved.',
                    color: '#a27e0f'
                };  
            }

            if(action.payload === 'invalid-input') {
                return {
                    ...state,
                    message: 'You can only use characters 0-9, \',\' and \'.\'. Characters must be in the right order',
                    color: '#a27e0f'
                };  
            }

            if(action.payload === 'saved') {
                return {
                    ...state,
                    message: 'Data saved',
                    color: '#2e811e'
                };  
            }
        
            return {
                ...state
            };
        case 'CLEAR_MESSAGE':
            return {
                ...state,
                message: null,
                color: null
            };

        default:
            return {
                ...state
            };
    }
}

export default infoReducer;