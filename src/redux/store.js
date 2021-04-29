import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

<<<<<<< HEAD
const sagaMiddleware = createSagaMiddleware();
=======
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()
>>>>>>> 1dd27fa

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

// eslint-disable-next-line
export default { store, persistor };
