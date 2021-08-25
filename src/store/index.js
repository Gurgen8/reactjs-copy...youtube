import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleWare from 'redux-saga'
import reducer from "./reducers";
import watchers from "./sagas";

const saga = createSagaMiddleWare();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(saga)),
)

window.store = store;

saga.run(watchers);

export default store;
