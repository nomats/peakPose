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

it('#bodypartPosition can get rightEye position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightEye")).toEqual({x: 849.8897991854535, y: 118.8806278152376})
});

it('#bodypartPosition can get leftEar position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftEar")).toEqual({x: 905.9810636207121, y: 131.71076510623712})
});

it('#bodypartPosition can get rightEar position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightEar")).toEqual({x: 833.1177493787358, y: 134.85277551082618})
});

it('#bodypartPosition can get leftShoulder position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftShoulder")).toEqual({x: 939.0765205748116, y: 242.1837124414523})
});

it('#bodypartPosition can get rightShoulder position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightShoulder")).toEqual({x: 793.9800185364151, y: 243.4584244906692})
});

it('#bodypartPosition can get leftElbow position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftElbow")).toEqual({x: 966.0234542497726, y: 371.36710985810515})
});

///make bodypart hash
