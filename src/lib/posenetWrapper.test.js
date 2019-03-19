import sample from '../../spec/posenet_sample/neutral_pose_testing';
import Pose from './posenetWrapper';

it('can create a pose class', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.source).toEqual(input)
});

it('#bodypartPosition can get nose position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("nose")).toEqual({x: 867.082363200039, y: 139.34810966428796})
});

it('#bodypartPosition can get leftWrist position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftWrist")).toEqual({x: 998.4647097518192, y: 498.58430285055033})
});


///make bodypart hash
