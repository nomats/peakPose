import React from "react";

class VideoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videoSrc:null};
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
      this.handleVideo(stream)
    })
  }

  handleVideo(stream) {
    this.setState({ videoSrc: window.URL.createObjectURL(stream) });
  }

  videoError() {
    
  }

  render() { 
    
    return (
      <video id="Webcam" src={this.state.videoSrc} autoPlay="true"/>
    )
  }
}

export default VideoFeed;