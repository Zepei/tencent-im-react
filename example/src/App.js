import React, { Component } from "react";

import "./App.css";
import { TimLayout, timHOC } from "tencent-im-react";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        {console.log(window.webim)}
        <TimLayout />
      </div>
    );
  }
}
export default App;
// export default timHOC(App);
