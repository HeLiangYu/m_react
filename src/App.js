import React from "react";
import "./App.css";
import ReactRedux from "./pages/reactRedux";
import HooksPage from "./pages/reactRedux/hooksPage";
// import { BrowserRouter as Router, Link, Route } from "./m-react-router";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Router1 from "./pages/router/Router1";
import Router2 from "./pages/router/Router2";
import Router3 from "./pages/router/Router3";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ReactRedux /> */}
        {/* <HooksPage /> */}
        <Router>
          <nav>
            <Link to="/">router1</Link>
            <Link to="/router2">router2</Link>
            <Link to="/router3">router3</Link>
            <Link to="/router4">router4</Link>
          </nav>
          {/* <Switch> */}
          <Route exact path="/" component={Router1}></Route>
          <Route path="/router2" component={Router2}></Route>
          <Route path="/router3" component={Router3}></Route>
          {/* <Route render={() => <h1>404</h1>}></Route> */}
          {/* </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
