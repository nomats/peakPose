import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import VideoFeed from "./components/videoFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
        Here's the webcam
        <VideoFeed/>
      </div>
    );
  }
}

export default App;
