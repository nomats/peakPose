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
  width: 80%;
  height: 100%;
  video {
    width: 100%;
  }
`;
export default StyledWebcamFeed;
