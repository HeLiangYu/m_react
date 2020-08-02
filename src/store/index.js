// import { createStore, applyMiddleware, combineReducers } from "redux";
// import looger from "redux-logger";
// import thunk from "redux-thunk";
import promise from "redux-promise";
import { createStore, applyMiddleware, combineReducers } from "../m_redux";
import looger from "../m_redux/logger";
import thunk from "../m_redux/thunk";

const counter = (state = 10, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
};
const counter2 = (state = -200, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counter, counter2 });
export default createStore(
  rootReducer,
  applyMiddleware(thunk, looger, promise)
);
