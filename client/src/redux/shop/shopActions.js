import { shopActionTypes } from "./shopTypes";

import { firestore, convertCollections } from "../../firebase/firebase";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload,
});

export const fetchCollectionsFailure = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollections(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
