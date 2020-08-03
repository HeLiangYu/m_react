import React from "react";
import { createBrowserHistory } from "history";
import RouterContext from "./Context";
import matchPath from "./matchPath";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    props.history.listen((location) => {
      this.setState({
        location,
      });
    });
  }
  render() {
    return (
      <RouterContext.Provider
        value={{
          history: this.props.history,
          location: this.state.location,
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

class BrowserRouter extends React.Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }
  render() {
    return <Router history={this.history}>{this.props.children}</Router>;
  }
}

class Link extends React.Component {
  static contextType = RouterContext;

  constructor(props) {
    super(props);
  }
  go = (e) => {
    e.preventDefault();
    // 事件跳转
    // console.log(this);
    this.context.history.push(this.props.to);
  };
  render() {
    const { children, to, ...restProps } = this.props;
    return (
      <a href={to} onClick={this.go} {...restProps}>
        {children}
      </a>
    );
  }
}

class Route extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { component, children, render, path } = this.props;
          const match = matchPath(context.location.pathname, this.props);
          //   const match = context.location.pathname === path;
          const props = {
            ...context,
            location: this.props.location,
          };
          return (
            <RouterContext.Provider value={props}>
              {match ? React.createElement(component) : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}

class Prompt extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { when, message } = this.props;
          if (!when) {
            return null;
          }
          let method = context.history.block;
          return (
            <LifeCycle
              onMount={(self) => {
                self.release = method(message);
              }}
              onUnMount={(self) => {
                self.release();
              }}
            ></LifeCycle>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}

class LifeCycle extends React.Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this);
    }
  }

  componentWillUnmount() {
    if (this.props.onUnMount) {
      this.props.onUnmount.call(this, this);
    }
  }

  render() {
    return null;
  }
}

export { BrowserRouter, Route, Link, Prompt };
