import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import styled from "styled-components";

class PoseDotter extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    const video = document.getElementsByTagName("video")[0];

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillText("*", 210, 75);
      ctx.fillText("*", 420, 75);
      ctx.fillText("*", 160, 180);
      ctx.fillText("*", 180, 200);
      ctx.fillText("*", 200, 220);
      ctx.fillText("*", 220, 240);
      ctx.fillText("*", 240, 260);
      ctx.fillText("*", 260, 280);
      ctx.fillText("*", 280, 300);
      ctx.fillText("*", 300, 320);

      ctx.fillText("*", 440, 180);
      ctx.fillText("*", 420, 200);
      ctx.fillText("*", 400, 220);
      ctx.fillText("*", 380, 240);
      ctx.fillText("*", 360, 260);
      ctx.fillText("*", 340, 280);
      ctx.fillText("*", 320, 300);
    };
  }
  render() {
    console.log("POSE", this.props.pose.source);
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
