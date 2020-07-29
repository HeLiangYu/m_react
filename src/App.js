import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import store from "./store";

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  add() {
    store.dispatch({ type: "add" });
  }

  minus() {
    store.dispatch({ type: "minus" });
  }

  render() {
    return (
      <div className="App">
        <div>{store.getState()}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
