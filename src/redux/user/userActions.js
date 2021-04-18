import { UserActionTypes } from './userTypes'

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSucess = (user) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload:user
});

export const googleSignInFailure = (error) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload:error
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload:emailAndPassword
});

export const emailSignInSucess = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload:user
});

export const emailSignInFailure = (error) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload:error
});
