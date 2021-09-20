const initialState = {
    user:{}
}

const accountReducer = (state = initialState, action) => {
  
    if(action.type === "LOGIN_SUCCESS") {
        return {
            ...state,
            user: action.payload.user
        }
    }

    return state;
};


export default accountReducer;