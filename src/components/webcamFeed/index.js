import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

class WebcamFeed extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Webcam />
      </div>
    );
  }
}

const StyledWebcamFeed = styled(WebcamFeed)`
  background-color: red;
  video {
    position: absolute;
    left: 0;
    bottom: 0;
    min-width: 70%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
  }
`;
export default StyledWebcamFeed;
