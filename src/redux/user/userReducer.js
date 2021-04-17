import { UserActionTypes } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

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
      };

    default:
      return state;
  }
};

export default userReducer;
