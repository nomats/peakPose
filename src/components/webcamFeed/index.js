import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

class WebcamFeed extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div ref="video">
          <Webcam />
        </div>
      </div>
    );
  }
}

const StyledWebcamFeed = styled(WebcamFeed)`
  display: inline-block;
  background-color: white;
  width: 75.1%;
  height: 100%;
  text-align: left;
  video {
    width: 100%;
    height: 100%;
  }
`;
export default StyledWebcamFeed;
