import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import Pose from "../../lib/posenetWrapper";
import StyledPoseSelector from "../poseSelector";
import StyledChecklist from "../checklist";

class PoseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      activePose: null
    };
    this.handlePose = this.handlePose.bind(this);
  }

  componentDidMount() {
    this.runPosenet();
  }

  handlePose(wrappedPose) {
    var result = wrappedPose.isMountainPose();
    this.setState({
      result: result
    });
  }

  runPosenet() {
    var handlePose = this.handlePose;
    setInterval(function() {
      let imageElement = document.getElementsByTagName("video")[0];
      let imageScaleFactor = 0.5;
      let outputStride = 16;
      let flipHorizontal = true;

      posenet
        .load()
        .then(function(net) {
          return net.estimateSinglePose(
            imageElement,
            imageScaleFactor,
            flipHorizontal,
            outputStride
          );
        })
        .then(function(pose) {
          var wrappedPose = new Pose(pose);
          handlePose(wrappedPose);
          //   var result = setState
          //   console.log(wrapped);
          //   console.log(wrapped.isMountainPose() ? "😊" : "😭");
        });
    }, 500);
  }

  render() {
    return (
      <React.Fragment>
        <StyledPoseSelector />
        <StyledChecklist result={this.state.result} />
      </React.Fragment>
    );
  }
}
export default PoseWrapper;
