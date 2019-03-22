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
    setInterval(function() {
      let imageElement = document.getElementById('webcam');
      posenet.load().then(function(net){
        return net.estimateSinglePose(this.imageElement, this.imageScaleFactor, this.flipHorizontal, this.outputStride)
      }).then(function(pose){
        var wrapped = new Pose(pose);
        sessionStorage.setItem('pose', pose);
        sessionStorage.setItem('nailingIt', wrapped.isMountainPose());
        console.log(sessionStorage.getItem('nailingIt'));
      })
    }, 500);
  }

  render() {
    return <WebcamFeed />;
  }
}
export default PoseWrapper;
