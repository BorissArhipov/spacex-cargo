const initialState = {
    burger: 'header--mob'
}

const burgerReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'TOGGLE_BURGER':
            if(state.burger === 'header--mob') {
                return {
                    ...state,
                    burger: 'header--mob burger--active'
                }
            }

            if(state.burger === 'header--mob burger--active') {
                return {
                    ...state,
                    burger: 'header--mob'
                }
            }

            return {
                ...state
            }
        
        case 'CLOSE_BURGER': 
            return {
                ...state,
                burger: 'header--mob'
            }
        
        default:
            return state;
        }
    };
  
export default burgerReducer;
  

