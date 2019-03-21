import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import WebcamFeed from "./components/webcamFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
        Here's the webcam
        <WebcamFeed />
      </div>
    );
  }
}

export default App;
