import { takeLatest, put, call, all } from "redux-saga/effects";

import { UserActionTypes } from "./userTypes"

import { auth, createUserProfile, googleProvider } from "../../firebase/firebase"

import {googleSignInSucess, googleSignInFailure} from  "../user/userActions"

export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfile, user)
        const snapshot = yield userRef.get() 
        yield put(googleSignInSucess({id: snapshot.id, ...snapshot.data()}))
    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart)
    ])
}

