import React from "react";
import { withRouter, Prompt } from "../../m-react-router";
// import { withRouter, Prompt } from "react-router-dom";

// @withRouter
class Router2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: true,
    };
  }
  render() {
    return (
      <div>
        <h3>router3</h3>
        <Prompt
          when={this.state.confirm}
          message={(location) => {
            return "确定要跳转吗？";
          }}
        />
      </div>
    );
  }
}

export default Router2;
