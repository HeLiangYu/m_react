const createStore = (reducer, enhancer) => {
  let currentState;
  let listenerStack = [];
  console.log(enhancer);
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  function subscribe(listener) {
    listenerStack.push(listener);

    function remove() {
      // 在组件销毁时也监听器数组里的监听器，避免内存泄漏
      const index = listenerStack.findIndex(item => item === listener);

      listenerStack.splice(index, 1);
    }

    return remove;
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

const applyMiddleware = () => {};

export { createStore, applyMiddleware };
