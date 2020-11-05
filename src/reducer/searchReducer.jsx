const initialState = {
    searchWord: '' 
}

const searchReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'CHANGE_SEARCH_WORD':
            console.log(action)
            return {
                ...state,
                searchWord: action.payload
            };
            
        default:
            return state;
        }
  };
  
  export default searchReducer;
  