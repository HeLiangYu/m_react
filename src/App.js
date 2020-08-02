import React from "react";
import "./App.css";
import ReactRedux from "./pages/reactRedux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactRedux />
      </div>
    );
  }
}

export default App;
// export default function App(props) {
//   console.log(props);

//   return (
//     <div>
//       <ReactRedux />
//     </div>
//   );
// }
