import sample from '../../spec/posenet_sample/neutral_pose_testing';
import Pose from './posenetWrapper';

it('can create a pose class', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.source).toEqual(input)
});


///make bodypart hash
