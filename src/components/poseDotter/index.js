import React from "react";
import * as posenet from "@tensorflow-models/posenet";

class PoseDotter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: document.getElementsByTagName("video")[0]
    };
  }

  componentDidMount() {
    this.dotOverlay();
  }

  dotOverlay() {}

  render() {
    return hello;
  }
}

const StyledPoseDotter = styled(PoseDotter)``;

export default StyledPoseDotter;
