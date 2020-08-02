import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import { bindActionCreators, connect } from "../../m-react-redux";

@connect(
  (counter) => counter,
  {
    add: () => ({ type: "add" }),
  }
  //   (dispatch) => {
  //     // const obj = {
  //     //   add: () => dispatch({ type: "add" }),
  //     // };
  //     const obj = {
  //       add: () => ({
  //         type: "add",
  //       }),
  //     };
  //     const needObj = bindActionCreators(obj, dispatch);

  //     return { dispatch, ...needObj };
  //   }
)
// @connect()
class ReactRedux extends React.Component {
  render() {
    const { counter, add } = this.props;
    console.log(this.props);
    return (
      <div>
        <div>{counter}</div>
        <button onClick={add}>add</button>
      </div>
    );
  }
}

export default ReactRedux;
