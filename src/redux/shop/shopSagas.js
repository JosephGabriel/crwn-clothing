import { takeLatest, call, put } from "redux-saga/effects";

import { shopActionTypes } from "./shopTypes";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

import { firestore, convertCollections } from "../../firebase/firebase";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollections, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
