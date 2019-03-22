import React, { Component } from "react";
import "./App.css";
import PoseWrapper from "./components/poseWrapper";
import WebcamFeed from "./components/webcamFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
      <React.Fragment>
        <PoseWrapper />
        <WebcamFeed />
      </React.Fragment>
      </div>
    );
  }
}

export default App;
