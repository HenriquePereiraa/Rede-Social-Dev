import { LOGIN_SUCCESS, SILENT_LOGIN, SIGNOUT } from '../actions/accountAction';

const initialState = {
    user:null
}

const accountReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload
            }
        }

        case SILENT_LOGIN:{
            return {
                ...state,
                user: action.payload
            }
        }

        case SIGNOUT: {
            return{
                ...state,
                user:null
            }
        }

        default: {
            return state;
        }
    }
};


export default accountReducer;