import React from "react";
import "./App.css";
import ReactRedux from "./pages/reactRedux";
import HooksPage from "./pages/reactRedux/hooksPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ReactRedux /> */}
        <HooksPage />
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
