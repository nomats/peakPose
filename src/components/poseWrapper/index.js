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
      pose: null,
      video: null
    };
    this.setResult = this.setResult.bind(this);
    this.setVideo = this.setVideo.bind(this);
    this.getChosenPose = this.getChosenPose.bind(this);
  }

  componentDidMount() {
    this.runPosenet();
  }

  setVideo(imageElement) {
    this.setState({
      video: imageElement
    });
    console.log(this.state.video);
  }

  setResult(wrappedPose) {
    var activePose = this.state.activePose;
    this.setState({
      pose: wrappedPose
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
        console.log("lol");
    }
  }

  getChosenPose(chosenPose) {
    this.setState(
      {
        activePose: chosenPose
      },
      () => {
        console.log("chosenPose stored");
      }
    );
  }

  runPosenet() {
    var setResult = this.setResult;
    var setVideo = this.setVideo;
    setInterval(function() {
      let imageElement = document.getElementsByTagName("video")[0];
      setVideo(imageElement);
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
    var video = this.state.video;
    return (
      <React.Fragment>
        <StyledPoseSelector getChosenPose={this.getChosenPose} />
        <StyledChecklist result={this.state.result} />
        <StyledPoseDotter video={video} />
      </React.Fragment>
    );
  }
}
export default PoseWrapper;

//
