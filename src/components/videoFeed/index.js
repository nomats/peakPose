import React from "react";

class VideoFeed extends React.Component {
  componentDidMount() {
    let video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({video: true})
    .then((stream) => {
      video.srcObject = stream
    })
    .catch(this.videoError)
  }

  videoError() {
    alert("Webcam not working!")
  }

  render() {
    return (
      <video
      id="Webcam"
      autoPlay={true}
      />
    )
  }
}

export default VideoFeed;
