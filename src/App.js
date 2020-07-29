import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import store from "./store";

class App extends React.Component {
  componentDidMount() {
    this.unMountLitener = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unMountLitener();
  }

  add() {
    store.dispatch({ type: "add", data: 8 });
  }

  minus() {
    store.dispatch({ type: "minus" });
  }

  asyncMinus() {
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({ type: "minus" });
      }, 1000);
    });
  }

  render() {
    return (
      <div className="App">
        <div>{store.getState().counter}</div>
        <button onClick={this.add}>add</button>
        {/* <button onClick={this.minus}>minus</button>
        <button onClick={this.asyncMinus}>asyncMinus</button> */}
      </div>
    );
  }
}

export default App;
