import { useContext, useLayoutEffect, useReducer } from "react";
// import React from "react";
import reduxContent from "./reduxContent";

function useStore() {
  const store = useContext(reduxContent);
  return store;
}

function useSelector(selector) {
  const store = useStore();
  const { getState, subscribe } = store;

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useLayoutEffect(() => {
    const unsubscirbe = subscribe(() => {
      forceUpdate();
    });

    return () => {
      if (unsubscirbe) {
        unsubscirbe();
      }
    };
  }, [store]);

  return selector(getState());
}

function useDispatch() {
  const { dispatch } = useStore();

  return dispatch;
}

export { useSelector, useDispatch };
