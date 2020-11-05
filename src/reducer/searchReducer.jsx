const initialState = {
    searchWord: '' 
}

const searchReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'CHANGE_SEARCH_WORD':
            return {
                ...state,
                searchWord: action.payload
            };
            
        default:
            return state;
        }
  };
  
  export default searchReducer;
  