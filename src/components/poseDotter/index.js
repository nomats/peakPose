import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import styled from "styled-components";

class PoseDotter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.dotOverlay();
  }

  dotOverlay() {}

  render() {
    // var video = props.video;
    // console.log(props.video);
    // console.log(this.props.video);
    return (
      <div>
        <canvas
          ref="canvas"
          width={this.props.video.videoWidth}
          height={video.videoHeight}
        />
      </div>
    );
  }
}

const StyledPoseDotter = styled(PoseDotter)``;

export default StyledPoseDotter;
