import { createStore, applyMiddleware } from "redux";
import accountReducer from "../reducers/accountReducer";
import thunk from "redux-thunk";

const store = createStore(accountReducer, applyMiddleware(thunk));

export default store;