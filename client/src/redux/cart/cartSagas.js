import { takeLatest, all, call, put } from "redux-saga/effects";

import { UserActionTypes } from "../user/userTypes";

import { clearCart } from "./cartActions";

export function* onSignOutClearCart() {
  yield put(clearCart());
}

export function* onSignOutSucces() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, onSignOutClearCart);
}

export function* cartSagas() {
  yield all([call(onSignOutSucces)]);
}
