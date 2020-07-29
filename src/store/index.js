// import { createStore } from "redux";
import { createStore } from "../m_redux";

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

export default createStore(counter);
