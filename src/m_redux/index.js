const createStore = reducer => {
  let currentState;
  let listenerStack = [];

  function subscribe(listener) {
    listenerStack.push(listener);
  }

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    listenerStack.forEach(listener => listener());
    return action;
  }

  return { getState, dispatch, subscribe };
};

export { createStore };
