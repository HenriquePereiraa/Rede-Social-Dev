import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import notificationsReducer from "./notificationsReducer";

const rootReducers = combineReducers({
    account: accountReducer,
    notifications: notificationsReducer
});

export default rootReducers;