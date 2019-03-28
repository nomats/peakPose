import React from 'react';
import * as posenet from '@tensorflow-models/posenet';
import Pose from '../../lib/posenetWrapper';
import StyledPoseSelector from '../poseSelector';
import StyledChecklist from '../checklist';

class PoseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      activePose: null,
    };
    this.setResult = this.setResult.bind(this);
    this.getChosenPose = this.getChosenPose.bind(this);
  }

  componentDidMount() {
    this.runPosenet();
  }

  setResult(wrappedPose) {
    let { activePose } = this.state;
    switch (activePose) {
      case 'Chair Pose':
        this.setState({ result: wrappedPose.isChairPose() });
        break;
      case 'Warrior Two':
        this.setState({ result: wrappedPose.isWarrior2() });
        break;
      case 'Goddess':
        this.setState({ result: wrappedPose.isGoddess() });
        break;
      case 'Tree Pose':
        this.setState({ result: wrappedPose.isTreePose() });
        break;
      case 'Mountain Pose':
        this.setState({ result: wrappedPose.isMountainPose() });
        break;
      default:
        console.log('lol');
    }
  }

  getChosenPose(chosenPose) {
    this.setState({
      activePose: chosenPose,
    },
    () => {
      console.log('chosenPose stored');
    });
  }

  runPosenet() {
    let { setResult } = this;
    setInterval(() => {
      let imageElement = document.getElementsByTagName('video')[0];
      let imageScaleFactor = 0.5;
      let outputStride = 16;
      let flipHorizontal = true;
      posenet
        .load()
        .then(net => net.estimateSinglePose(
          imageElement,
          imageScaleFactor,
          flipHorizontal,
          outputStride,
        ))
        .then((pose) => {
          let wrappedPose = new Pose(pose);
          setResult(wrappedPose);
        });
    }, 500);
  }

  render() {
    return (
      <React.Fragment>
        <StyledPoseSelector getChosenPose={this.getChosenPose} />
        <StyledChecklist result={this.state.result} />
      </React.Fragment>
    );
  }
}
export default PoseWrapper;
