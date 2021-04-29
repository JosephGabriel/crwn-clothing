import { takeLatest, put, call, all } from "redux-saga/effects";

import { UserActionTypes } from "./userTypes";

import {
<<<<<<< HEAD
  googleProvider,
  auth,
  createUserProfile,
  getCurrentUser
} from "../../firebase/firebase";

import { signInFailure, signInSuccess } from "./userActions";

export function* getSnapshotFromUser(userAuth) {
  try {
    const userRef = yield call(createUserProfile, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
=======
  auth,
  createUserProfile,
  googleProvider,
  getCurrentUser,
} from "../../firebase/firebase";

import {
  signInSucess,
  signInFailure,
  signOutSucess,
  signOutFailure,
  signUpSucess,
  signUpFailure,
} from "../user/userActions";

export function* getUser(user, additionalData) {
  try {
    const userRef = yield call(createUserProfile, user, additionalData);
    const snapshot = yield userRef.get();
    yield put(signInSucess({ id: snapshot.id, ...snapshot.data() }));
>>>>>>> 1dd27fa
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
<<<<<<< HEAD
    yield getSnapshotFromUser(user);
=======
    yield getUser(user);
>>>>>>> 1dd27fa
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
<<<<<<< HEAD
    yield getSnapshotFromUser(user);
=======
    yield getUser(user);
>>>>>>> 1dd27fa
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
<<<<<<< HEAD
 try {
   const user = yield getCurrentUser()

   if(!user) return

  yield getSnapshotFromUser(user)
 } catch (error) {
   yield put(signInFailure(error))
 }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

=======
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUser(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSucess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSucess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signUpAfterSuccess({ payload: { user, additionalData } }) {
  yield getUser(user, additionalData);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUpAfterSuccess);
}

>>>>>>> 1dd27fa
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
<<<<<<< HEAD
    call(onCheckUserSession)
=======
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
>>>>>>> 1dd27fa
  ]);
}
