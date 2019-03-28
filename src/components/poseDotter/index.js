import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import styled from "styled-components";

class PoseDotter extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    const video = document.getElementsByTagName("video")[0];
    console.log(video.videoWidth);
    var source = this.props.pose;
    setInterval(() => {
      this.drawPose(ctx, canvas);
    }, 500);
  }

  drawPose(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    ctx.font = "40px Impact";
    if (this.props.result) {
      ctx.fillStyle = this.props.result[0] ? "#00ff00" : "#ff0000";
    }
    if (this.props.pose) {
      for (var i = 0; i < this.props.pose.source.keypoints.length; i++) {
        let x = this.props.pose.source.keypoints[i].position["x"];
        let y = this.props.pose.source.keypoints[i].position["y"];
        ctx.fillText("●", x, y);
      }
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <canvas
          ref="canvas"
          width={0.75 * window.innerWidth}
          height={window.innerHeight}
        />
      </div>
    );
  }
}

const StyledPoseDotter = styled(PoseDotter)`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
`;

export default StyledPoseDotter;
