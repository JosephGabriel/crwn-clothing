import { takeLatest, put, call, all } from "redux-saga/effects";

import { UserActionTypes } from "./userTypes";

import {
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
} from "../user/userActions";

export function* getUser(user) {
  try {
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(signInSucess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
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

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
