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
      this.drawPose(ctx);
    }, 500);

    // drawME = () => {
    //   console.log("in here");
    //   console.log(this.props.pose);
    //   ctx.font = "40px Courier";
    //   ctx.fillText("*", 210, 75);
  }

  drawPose(ctx) {
    console.log("in here");

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
    // console.log("POSE", this.props.pose && this.props.pose.source);
    return (
      <div>
        <canvas ref="canvas" width={640} height={480} />
      </div>
    );
  }
}

const StyledPoseDotter = styled(PoseDotter)``;

export default StyledPoseDotter;
