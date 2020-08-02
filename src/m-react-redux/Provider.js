import React from "react";
import reduxContent from "./reduxContent";

export default function Provider({ store, children }) {
  return (
    <reduxContent.Provider value={store}>{children}</reduxContent.Provider>
  );
}
