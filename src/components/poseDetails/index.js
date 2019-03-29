import React from "react";
import styled from "styled-components";

class PoseDetails extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="pose-content">
          <p>{this.props.poseInfo.details}</p>
          {this.props.poseInfo.src}
        </div>
      </div>
    );
  }
}

const StyledPoseDetails = styled(PoseDetails)`
  #pose-content {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    opacity: 0;
  }

  &.active {
    flex: 5;
    background: #fff;
    cursor: default;

    h2 {
      color: #E74C3C;
    }

    .pose-content {
      flex: 4;
      opacity: 1;

      color: #E74C3C;
    }
  }



`
;

export default StyledPoseDetails;
