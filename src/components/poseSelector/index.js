import React from "react";
import styled from "styled-components";
import StyledPoseDetails from "../poseDetails"

class PoseSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null, details: null
    };
  }

  handleClick(id, details) {
    this.setState({
      active: id,
      details: details
    })
    this.props.getChosenPose(id);
  }

  render() {
    const {active} = this.state;
    const poseInfo = this.state;
    return (
      <div className={this.props.className}>
          {POSES.map(({ id, pose, details }) => (
            <button key={id} onClick={() => this.handleClick(id, details)}>
              {pose}
              {id === active && details && <StyledPoseDetails poseInfo={poseInfo} />}
            </button>
          ))}
      </div>
    );
  }
}

const POSES = [
  {
    id: "warrior one",
    pose: "Warrior One",
    details: "this is warrior one pose",
    src: "image.jpeg"
  },
  {
    id: "warrior two",
    pose: "Warrior Two",
    details: "this is warrior two pose",
    src: "image2.jpeg"
  },
  {
    id: "goddess",
    pose: "Goddess",
    details: "this is goddess pose",
    src: "image3.jpeg"
  },
  {
    id: "tree",
    pose: "Tree",
    details: "this is tree pose",
    src: "image4.jpeg"
  },
  {
    id: "half moon",
    pose: "Half Moon",
    details: "this is half moon pose",
    src: "image5.jpeg"
  }
];

const StyledPoseSelector = styled(PoseSelector)`
  button {
    color: Black
  }
`
;
export default StyledPoseSelector;
