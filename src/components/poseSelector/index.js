import React from 'react';
import styled from 'styled-components';
import StyledPoseDetails from '../poseDetails';

class PoseSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null, details: null, src: null,
    };
  }

  handleClick(id, details, src) {
    this.setState({
      active: id,
      details,
      src,
    });
    this.props.getChosenPose(id);
  }

  render() {
    const { active } = this.state;
    const poseInfo = this.state;
    return (
      <div className={this.props.className}>
        {POSES.map(({
          id, pose, details, src,
        }) => (
          <button key={id} onClick={() => this.handleClick(id, details, src)}>
            {pose}
            {id === active && details && <StyledPoseDetails poseInfo={poseInfo} />}
          </button>
        ))}
      </div>
    );
  }
}

const POSES = [
  {
    id: 'Chair Pose',
    pose: 'Chair Pose',
    details: 'this is chair pose',
    src: 'image.jpeg',
  },
  {
    id: 'Warrior Two',
    pose: 'Warrior Two',
    details: 'this is warrior two pose',
    src: 'image2.jpeg',
  },
  {
    id: 'Goddess',
    pose: 'Goddess',
    details: 'this is goddess pose',
    src: 'image3.jpeg',
  },
  {
    id: 'Tree Pose',
    pose: 'Tree',
    details: 'this is tree pose',
    src: 'image4.jpeg',
  },
  {
    id: 'Mountain Pose',
    pose: 'Mountain',
    details: 'this is mountain pose',
    src: 'image5.jpeg',
  },
];

const StyledPoseSelector = styled(PoseSelector)`
  button {
    color: Black
  }
`;
export default StyledPoseSelector;
