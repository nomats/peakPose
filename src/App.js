import React, { Component } from "react";
import "./App.css";
import PoseWrapper from "./components/poseWrapper";
import StyledChecklist from "./components/checklist";
import StyledWebcamFeed from "./components/webcamFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <PoseWrapper />
          <StyledWebcamFeed />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
