import React from "react";
import styled from "styled-components";
import StyledPoseDetails from "../poseDetails";

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
    });
    this.props.getChosenPose(id);
  }

  displayAccordion() {
    this.setState(prevState => ({
      displayAccordion: !prevState.displayAccordion
    }));
  }

  render() {
    const {activePose} = this.state;
    const poseInfo = this.state;
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
        <i class="material-icons md-48" onClick={this.displayAccordion}>{this.state.displayAccordion ? "close" : "accessibility_new"}</i>
        {accordion}
      </div>
    );
  }
}

const POSES = [
  {
    id: "Chair Pose",
    pose: "Chair Pose",
    details: "Chair Pose clearly works the muscles of the arms and legs, but it also stimulates the diaphragm and heart",
    src: "chair_pose.png"
  },
  {
    id: "Warrior Two",
    pose: "Warrior Two",
    details: "Warrior II strengthens the legs, opens the hips and chest. The pose develops concentration, balance and groundedness. This pose improves circulation and respiration and energizes the entire body",
    src: "warrior_two.png"
  },
  {
    id: "Goddess",
    pose: "Goddess",
    details: "Goddess pose to help you harness the forces of the Universe while stretching and toning your core. This pose helps each of us connect to our inherent inner goddess, finding a common space with this powerful feminine energy.",
    src: "goddess.png"
  },
  {
    id: "Tree Pose",
    pose: "Tree Pose",
    details: "Tree pose increases balance, focus, memory and concentration and strengthens the ankles and knees.",
    src: "tree_pose.png"
  },
  {
    id: "Mountain Pose",
    pose: "Mountain",
    details: "The foundation of all standing poses, Mountain Pose makes a great a starting position, resting pose, or tool to improve posture.",
    src: "mountain_pose.png"
  }
];

const StyledPoseSelector = styled(PoseSelector)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

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
    width: 100%;
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
    background: #A33265;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
      background: #FF8F4F;

      .pose-title {
        color: #A33265;
      }
    }

    &.active {
      flex: 5;
      background: #FF8F4F;
      cursor: default;

      h2 {
        color: #A33265;
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
      color: #FF8F4F;

      h2 {
        margin: 0;
        transform: rotate(-90deg);
        white-space: nowrap;
      }
    }
  }

  .material-icons.md-48 {
    padding: 50px;
    font-size: 60px;
    z-index: 3;
        position: absolute;
    color: #FFA9A8;
  }
`;
export default StyledPoseSelector;
