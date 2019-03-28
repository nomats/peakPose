import React from "react";
import styled from "styled-components";

class PoseDotter extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    setInterval(() => {
      this.drawPose(ctx, canvas);
    }, 500);
  }

  drawPose(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Impact";
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
        <canvas ref="canvas" width={640} height={480} />
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
  width: 75.1%;
  height: 100%;
  text-align: left;
  canvas {
    width: 100%;
    height: 100%;
  }
`;

export default StyledPoseDotter;
