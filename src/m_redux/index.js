const createStore = (reducer, enhancer) => {
  let currentState;
  let listenerStack = [];
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  function subscribe(listener) {
    listenerStack.push(listener);

    function remove() {
      // 在组件销毁时也监听器数组里的监听器，避免内存泄漏
      const index = listenerStack.findIndex((item) => item === listener);

      listenerStack.splice(index, 1);
    }

    return remove;
  }

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    listenerStack.forEach((listener) => listener());
    return action;
  }

  dispatch({ type: "REDUX/HELIANGYU" });

  return { getState, dispatch, subscribe };
};

const applyMiddleware = (...middleWare) => {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const middApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };

    const middleWareChain = middleWare.map((middlewares) =>
      middlewares(middApi)
    );

    dispatch = compose(...middleWareChain)(store.dispatch);

    return { ...store, dispatch };
  };
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    let nextState = {};
    let hasChange = false;

    for (let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);

      hasChange = hasChange || nextState[key] !== state[key];
    }

    hasChange =
      hasChange || Object.keys(nextState).length !== Object.keys(state).length;

    return hasChange ? nextState : state;
  };
};

function fn1(a) {
  return a;
}

function fn2(a) {
  return a;
}

function fn3(a) {
  return a;
}
function fn4(a) {
  return a;
}
function fn5(a) {
  return a;
}

// fn3(fn2(fn1));

// fn1(fn2(fn3(4)));

// compose返回值是一个函数，然后再将参数www传进去
// 1. compose()的返回值是一个函数，当compose()后面没有跟()时，其返回的函数不会执行
// 2. 相当于返回的是fn3(fn2(fn1))，当加上()时，才执行，同时传入参数，fn1(fn2(fn3(4)))
let res = compose(fn1, fn2, fn3, fn4, fn5)("iii");
function compose(...funcs) {
  if (funcs.length === 0) {
    return (args) => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => {
    return a(b(...args));
  });
}
// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return (args) => args;
//   }
//   if (funcs.length === 1) {
//     return funcs[0];
//   }
//   const f1 = funcs.reduce((pre, curr) => {
//     return (...args) => {
//       const fn = pre(curr(...args));
//       return fn;
//     };
//   });
//   return f1;
// }
export { createStore, applyMiddleware, combineReducers };
