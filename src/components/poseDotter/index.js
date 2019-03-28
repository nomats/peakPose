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
    console.log(this.props.pose);
    for (var i = 0; i < array.length; i++) {
      array[i];
    }
    ctx.font = "40px Impact";
    ctx.fillText("*", 210, 75);
    ctx.fillText("*", 420, 75);
    ctx.fillText("*", 300, 320);
  }

  render() {
    console.log("POSE", this.props.pose && this.props.pose.source);
    return (
      <div>
        <canvas ref="canvas" width={640} height={480} />
        <img
          ref="image"
          src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          className="hidden"
          width={640}
          height={480}
        />
      </div>
    );
  }
}

const StyledPoseDotter = styled(PoseDotter)``;

export default StyledPoseDotter;
