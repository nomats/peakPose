import React, { Component } from "react";
import "./App.css";
import PoseWrapper from "./components/poseWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        Posenet wrapper & webcam child
        <PoseWrapper />
      </div>
    );
  }
}

export default App;
