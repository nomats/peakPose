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

it('#bodypartPosition can get leftEye position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftEye")).toEqual({x: 884.5536936801585, y: 120.80305946448948})
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

it('#bodypartPosition can get rightElbow position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightElbow")).toEqual({x: 764.4417666238955, y: 370.7695001932421})
});

it('#bodypartPosition can get leftWrist position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftWrist")).toEqual({x: 998.4647097518192, y: 498.58430285055033})
});

it('#bodypartPosition can get rightWrist position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightWrist")).toEqual({x: 730.0744491862656, y: 504.11775658633326})
});

it('#bodypartPosition can get leftHip position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftHip")).toEqual({x: 914.5591358335499, y: 481.72699298117277})
});

it('#bodypartPosition can get rightHip position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightHip")).toEqual({x: 810.6170763424182, y: 486.88238101235834})
});

it('#bodypartPosition can get leftKnee position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftKnee")).toEqual({x: 899.8785408004159, y: 702.4112093041447})
});

it('#bodypartPosition can get rightKnee position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightKnee")).toEqual({x: 824.2542163745777, y: 703.2182234729278})
});

it('#bodypartPosition can get leftAnkle position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("leftAnkle")).toEqual({x: 880.5404146634615, y: 882.1650988755154})
});

it('#bodypartPosition can get rightAnkle position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypartPosition("rightAnkle")).toEqual( {x: 849.9319304468231, y: 882.6055469670201})
});

///make bodypart hash
