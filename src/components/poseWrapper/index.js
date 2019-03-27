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
    this.setResult = this.setResult.bind(this);
    this.getChosenPose = this.getChosenPose.bind(this);
  }

  componentDidMount() {
    this.runPosenet();
  }

  setResult(wrappedPose, activePose) {
    console.log("set result executed")
    console.log(activePose)
    // var fn = window[settings.activePose];
    // if(typeof fn === 'function') {
    //   var result = wrappedPose.activePose;
    // }

    var result = wrappedPose.isMountainPose();
    this.setState({
      result: result
    });
  }

  getChosenPose(chosenPose) {
    this.setState({
      activePose: chosenPose
    },
    () => {
    console.log("getChosenPose executed")
    console.log(this.state);
    });
    this.runPosenet();
  }

  runPosenet() {
    var setResult = this.setResult;
    var activePose = this.state;
    console.log("runPosenet executed")
    console.log(activePose)
    console.log("console log worked")
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
          setResult(wrappedPose, activePose);
          //   var result = setState
          //   console.log(wrapped);
          //   console.log(wrapped.isMountainPose() ? "😊" : "😭");
        });
    }, 500);
  }

  render() {
    return (
      <React.Fragment>
        <StyledPoseSelector getChosenPose={this.getChosenPose}/>
        <StyledChecklist result={this.state.result} />
      </React.Fragment>
    );
  }
}
export default PoseWrapper;
