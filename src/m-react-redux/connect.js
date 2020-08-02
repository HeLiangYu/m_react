import React, { useContext, useLayoutEffect, useReducer } from "react";
import reduxContent from "./reduxContent";

export default function connect(
  mapStateToProps = (state) => state,
  mapDispatchToProps
) {
  return (WrapCompenent) => (props) => {
    const store = useContext(reduxContent);
    const { dispatch, getState, subscribe } = store;

    let mapState = {};
    if (mapStateToProps) {
      mapState = mapStateToProps(getState());
    }

    let mapDispatch = { dispatch };
    if (mapDispatchToProps) {
      if (typeof mapDispatchToProps === "function") {
        mapDispatch = mapDispatchToProps(dispatch);
      } else {
        for (let key in mapDispatchToProps) {
          mapDispatch[key] = () => dispatch(mapDispatchToProps[key]());
        }
      }
    }

    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    useLayoutEffect(() => {
      const unSubscribe = subscribe(() => {
        forceUpdate();
      });

      return () => {
        if (unSubscribe) {
          unSubscribe();
        }
      };
    }, [store]);

    return <WrapCompenent {...mapDispatch} {...mapState} {...props} />;
  };
}
