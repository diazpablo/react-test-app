import { createStore, compose } from "redux";
import reducers from "./reducers";

const newCompose =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const configureStore = (preloadedState) =>
  createStore(reducers, preloadedState, newCompose());

export default configureStore;
