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
  border: 5px solid palevioletred;
`;
export default StyledWebcamFeed;
