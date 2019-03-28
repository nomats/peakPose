import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import styled from "styled-components";

class PoseDotter extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    const video = document.getElementsByTagName("video")[0];
    var source = this.props.pose;
    setInterval(() => {
      this.drawPose(ctx, canvas);
    }, 500);
  }

  drawPose(ctx, canvas) {
    console.log("in here");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.props.result) {
      console.log(this.props.result[0]);
      ctx.fillStyle = this.props.result[0] ? "#00ff00" : "#ff0000";
    }

    if (this.props.pose) {
      for (var i = 0; i < this.props.pose.source.keypoints.length; i++) {
        let x = this.props.pose.source.keypoints[i].position["x"];
        let y = this.props.pose.source.keypoints[i].position["y"];
        console.log(x, ",", y);
        ctx.fillText("*", x, y);
      }
      ctx.fillText("*", 0, 0);
    }
    ctx.font = "40px Impact";
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={480} />
      </div>
    );
  }
}

const StyledPoseDotter = styled(PoseDotter)``;

export default StyledPoseDotter;
