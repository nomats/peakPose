import React from "react";
import * as posenet from '@tensorflow-models/posenet';
import Pose from "../../lib/posenetWrapper";

class PoseWrapper extends React.Component {

  runPosenet() {
    setInterval(function() {
      let imageElement = document.getElementsByTagName('video')[0];
      let imageScaleFactor = 0.5;
      let outputStride = 16;
      let flipHorizontal = true;
      posenet.load().then(function(net){
        return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)
      }).then(function(pose){
        var wrapped = new Pose(pose);
      })
    }, 500);
  }

  render() {
    this.runPosenet();
    return ""
  }
}
export default PoseWrapper;
