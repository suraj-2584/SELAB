import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = (process.env.NODE_ENV === "development") ? createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  )
) : createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);
export default store;
