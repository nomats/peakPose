import React from "react";
import styled from "styled-components";

class PoseDetails extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img alt="yoga-pose" src={this.props.poseInfo.src}/>
        <p>{this.props.poseInfo.details}</p>
      </div>
    );
  }
}

const StyledPoseDetails = styled(PoseDetails)`
  flex: 1;
  align-items: center;
  padding: 0;
  margin-top: 20%;
  margin-left: -50%;

  p {
    color: #A33265;
    padding: 40px 20% 0 20%;
    font-weight: bold;
  }

  img {
    width: 100%;
  }

`
;

export default StyledPoseDetails;
