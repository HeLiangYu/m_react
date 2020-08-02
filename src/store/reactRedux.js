import { createStore, applyMiddleware, combineReducers } from "redux";
import looger from "redux-logger";
import thunk from "redux-thunk";

const counter = (state = 10, action) => {
  console.log(action);
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
};
// export default createStore(counter, applyMiddleware(thunk, looger));
export default createStore(combineReducers({ counter }));
