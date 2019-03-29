import React from "react";
import styled from "styled-components";
import StyledPoseDetails from "../poseDetails"

class PoseSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePose: null,
      details: null,
      src: null,
      displayAccordion: false,
      className: undefined
    };
    // this.updateClassName = this.updateClassName.bind(this);
    this.displayAccordion = this.displayAccordion.bind(this);
  }

  handleChoice(id, details, src) {
    this.setState({
      activePose: id,
      details: details,
      src: src,
    },
    () => {
      console.log("lol")
      // this.updateClassName(id);
    });
    this.props.getChosenPose(id);
  }

  displayAccordion() {
    this.setState({
      displayAccordion: !this.state.displayQuestions
    });
  }

  // updateClassName(id) {
  //   if (id === this.state.activePose) {
  //     this.setState({
  //       className: "active"
  //     },
  //     () => {
  //       console.log("className changed")
  //     });
  //   }
  // }

  render() {
    const {activePose} = this.state;
    const poseInfo = this.state;
    // const {className} = this.state;
    let accordion = null;

    if (this.state.displayAccordion) {
      accordion = (
        <div className={this.props.className}>
        <ul className="accordion">
          {POSES.map(({ id, pose, details, src }) => (
            <li className={this.state.activePose === id ? "active" : "false" } key={id} onClick={() => this.handleChoice(id, details, src)}>
                <div className="pose-title">
                  <h2>{pose}</h2>
                </div>
              {id === activePose && details && <StyledPoseDetails poseInfo={poseInfo} />}
            </li>
          ))}
          </ul>
        </div>
      )
    }
    return (
      <div className={this.props.className} id="poseSelector">
        <button id="hamburger-menu" onClick={this.displayAccordion}><span></span><span></span><span></span></button>
        {accordion}
      </div>
    );
  }
}

const POSES = [
  {
    id: "Chair Pose",
    pose: "Chair Pose",
    details: "this is chair pose",
    src: "image.jpeg"
  },
  {
    id: "Warrior Two",
    pose: "Warrior Two",
    details: "this is warrior two pose",
    src: "image2.jpeg"
  },
  {
    id: "Goddess",
    pose: "Goddess",
    details: "this is goddess pose",
    src: "image3.jpeg"
  },
  {
    id: "Tree Pose",
    pose: "Tree",
    details: "this is tree pose",
    src: "image4.jpeg"
  },
  {
    id: "Mountain Pose",
    pose: "Mountain",
    details: "this is mountain pose",
    src: "image5.jpeg"
  }
];

const StyledPoseSelector = styled(PoseSelector)`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato';
     -webkit-font-smoothing: antialiased;
  	-moz-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-rendering: optimizelegibility;
  }

  ul {
    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
  }

  li {
    flex: 1;
    display: flex;
    align-items: stretch;
    padding: 20px;
    background: #E74C3C;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
      background: darken(#E74C3C, 3);
    }

    &.active {
      flex: 5;
      background: #fff;
      cursor: default;

      h2 {
        color: #E74C3C;
      }

      .pose-content {
        flex: 4;
        opacity: 1;

        color: #E74C3C;
      }
    }

    .pose-title {
      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 0;
      text-align: center;
      color: white;

      h2 {
        margin: 0;
        transform: rotate(-90deg);
        white-space: nowrap;
      }
    }

    .pose-content {
      flex: 1;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      opacity: 0;
    }
  }

  #menu-wrapper {
    overflow: hidden;
    max-width: 100%;
    cursor: pointer;
  }

  #menu-wrapper #hamburger-menu {
    width: 30px;
    height: 30px;
    margin: 20px;
  }

  #menu-wrapper #hamburger-menu span {
      opacity: 1;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      left: 0;
      display: block;
      width: 100%;
      height: 3px;
      border-radius: 10px;
      color: black;
      background-color: blue;
      position: absolute;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .4s ease-in-out;
      transition: .4s ease-in-out;
  }

  button {
    color: Black
  }
`
;
export default StyledPoseSelector;
