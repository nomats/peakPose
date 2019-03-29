import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import Pose from "../../lib/posenetWrapper";
import StyledPoseSelector from "../poseSelector";
import StyledChecklist from "../checklist";
import StyledPoseDotter from "../poseDotter";

class PoseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      activePose: null,
      pose: null
    };
    this.setResult = this.setResult.bind(this);
    this.getChosenPose = this.getChosenPose.bind(this);
  }

  componentDidMount() {
    this.runPosenet();
  }

  setResult(wrappedPose) {
    var activePose = this.state.activePose;
    this.setState(function(state) {
      return {
        pose: wrappedPose
      };
    });
    switch (activePose) {
      case "Chair Pose":
        this.setState({ result: wrappedPose.isChairPose() });
        break;
      case "Warrior Two":
        this.setState({ result: wrappedPose.isWarrior2() });
        break;
      case "Goddess":
        this.setState({ result: wrappedPose.isGoddess() });
        break;
      case "Tree Pose":
        this.setState({ result: wrappedPose.isTreePose() });
        break;
      case "Mountain Pose":
        this.setState({ result: wrappedPose.isMountainPose() });
        break;
      default:
    }
  }

  getChosenPose(chosenPose) {
    this.setState(
      {
        activePose: chosenPose
      },
      () => {}
    );
  }

  runPosenet() {
    var setResult = this.setResult;
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
          setResult(wrappedPose);
        });
    }, 500);
  }

  render() {
    // console.log("pWp" + this.state.pose);
    // console.log("pWr" + this.state.result);
    return (
      <React.Fragment>
        <StyledPoseSelector getChosenPose={this.getChosenPose} />
        <StyledChecklist result={this.state.result} activePose={this.state.activePose}/>
        <StyledPoseDotter result={this.state.result} pose={this.state.pose} />
      </React.Fragment>
    );
  }
}

export default PoseWrapper;

//
