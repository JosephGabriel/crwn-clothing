import { all, call } from "redux-saga/effects";

<<<<<<< HEAD
import { fetchCollectionsStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
=======
import { shopSagas } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
>>>>>>> 1dd27fa
}
