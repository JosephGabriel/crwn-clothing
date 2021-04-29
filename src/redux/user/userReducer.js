import { UserActionTypes } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

<<<<<<< HEAD
const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UserActionTypes.EMAIL_SIGN_IN_SUCESS:
    case UserActionTypes.GOOGLE_SIGN_IN_SUCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };

    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: payload,
=======
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
>>>>>>> 1dd27fa
      };

    default:
      return state;
  }
};

export default userReducer;
