import React from "react";
import * as posenet from '@tensorflow-models/posenet';
import WebcamFeed from "../webcamFeed";
import Pose from "../../lib/posenetWrapper";

class PoseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageScaleFactor: 0.5,
      outputStride: 16,
      flipHorizontal: true
    }
    console.log(this.state)
  };

  runPosenet() {
    console.log("runPosenet executed")
    setInterval(function() {
      console.log("setInterval executed")
      let imageElement = document.getElementById('webcam');
      console.log(imageElement)
      console.log(posenet.load())
      posenet.load().then(function(net){
        return net.estimateSinglePose(imageElement, this.imageScaleFactor, this.flipHorizontal, this.outputStride)
      }).then(function(pose){
        var wrapped = new Pose(pose);
        // sessionStorage.setItem('pose', pose);
        // sessionStorage.setItem('nailingIt', wrapped.isMountainPose());
        console.log(wrapped.isMountainPose());
      })
    }, 500);
  }

  render() {
    this.runPosenet();
    console.log("hello");
    return <WebcamFeed />;
  }
}
export default PoseWrapper;
