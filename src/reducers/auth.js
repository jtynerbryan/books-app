import { SIGN_UP, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../actionTypes";

const intiialState = {
  user: {
    email: undefined,
    accessToken: undefined
  },
  loggedIn: false
};

export default function auth(state = intiialState, action) {
  switch (action.type) {
    case LOG_IN_FAILURE: {
      return { ...state, loggedIn: false };
    }
    case LOG_IN_SUCCESS:
      return { ...state, user: action.payload, loggedIn: true };
    case SIGN_UP:
      return { ...state, user: action.payload.user, loggedIn: true };
    default:
      return state;
  }
}
