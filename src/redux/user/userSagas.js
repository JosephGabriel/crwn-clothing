import { takeLatest, put, call, all } from "redux-saga/effects";

import { UserActionTypes } from "./userTypes";

import {
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
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
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

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession)
  ]);
}
