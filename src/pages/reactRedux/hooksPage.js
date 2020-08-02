import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector, useDispatch } from "../../m-react-redux";

export default function HooksPage(props) {
  const count = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  function add() {
    dispatch({ type: "add" });
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
}
