import { createStore, compose, applyMiddleware } from "redux";
import "../config/reactotron";

import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const middlewares = [];

// Monitor redux-saga on reactotron
const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer()
  )
);

sagaMiddleware.run(sagas);

export default store;
