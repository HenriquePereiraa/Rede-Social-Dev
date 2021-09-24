import { GET_NOTIFICATIONS } from "../actions/notificationsAction";

const initialState = {
  notifications: [],
};

const notificationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: payload.notifications,
      }
    }

    default:
      return state;
  }
}


export default notificationsReducer