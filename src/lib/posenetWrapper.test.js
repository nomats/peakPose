import sample from '../../spec/posenet_sample/neutral_pose_testing';
import Pose from './posenetWrapper';

it('can create a pose class', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.source).toEqual(input)
});

it('#bodypart can get nose position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("nose").position).toEqual({x: 867.082363200039, y: 139.34810966428796})
});

it('#bodypart can get leftEye position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftEye").position).toEqual({x: 884.5536936801585, y: 120.80305946448948})
});

it('#bodypart can get rightEye position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightEye").position).toEqual({x: 849.8897991854535, y: 118.8806278152376})
});

it('#bodypart can get leftEar position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftEar").position).toEqual({x: 905.9810636207121, y: 131.71076510623712})
});

it('#bodypart can get rightEar position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightEar").position).toEqual({x: 833.1177493787358, y: 134.85277551082618})
});

it('#bodypart can get leftShoulder position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftShoulder").position).toEqual({x: 939.0765205748116, y: 242.1837124414523})
});

it('#bodypart can get rightShoulder position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightShoulder").position).toEqual({x: 793.9800185364151, y: 243.4584244906692})
});

it('#bodypart can get leftElbow position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftElbow").position).toEqual({x: 966.0234542497726, y: 371.36710985810515})
});

it('#bodypart can get rightElbow position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightElbow").position).toEqual({x: 764.4417666238955, y: 370.7695001932421})
});

it('#bodypart can get leftWrist position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftWrist").position).toEqual({x: 998.4647097518192, y: 498.58430285055033})
});

it('#bodypart can get rightWrist position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightWrist").position).toEqual({x: 730.0744491862656, y: 504.11775658633326})
});

it('#bodypart can get leftHip position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftHip").position).toEqual({x: 914.5591358335499, y: 481.72699298117277})
});

it('#bodypart can get rightHip position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightHip").position).toEqual({x: 810.6170763424182, y: 486.88238101235834})
});

it('#bodypart can get leftKnee position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftKnee").position).toEqual({x: 899.8785408004159, y: 702.4112093041447})
});

it('#bodypart can get rightKnee position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightKnee").position).toEqual({x: 824.2542163745777, y: 703.2182234729278})
});

it('#bodypart can get leftAnkle position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("leftAnkle").position).toEqual({x: 880.5404146634615, y: 882.1650988755154})
});

it('#bodypart can get rightAnkle position', () => {
  const input = sample['correct'][0]
  const subject = new Pose(input)
  expect(subject.bodypart("rightAnkle").position).toEqual( {x: 849.9319304468231, y: 882.6055469670201})
  console.log(subject.bodypart("rightAnkle").position)
});

it('#isMountainPose can recognise position', () => {
  var input = sample['correct'][0]
  var subject = new Pose(input)
  expect(subject.isMountainPose()).toEqual(true)
  input = sample['correct'][1]
  subject = new Pose(input)
  expect(subject.isMountainPose()).toEqual(true)
});

it('#isMountainPose can recognise wrong position', () => {
  var input = sample['incorrect'][0]
  var subject = new Pose(input)
  expect(subject.isMountainPose()).toEqual(false)
  input = sample['incorrect'][1]
  subject = new Pose(input)
  expect(subject.isMountainPose()).toEqual(false)
  input = sample['incorrect'][2]
  subject = new Pose(input)
  expect(subject.isMountainPose()).toEqual(false)
  input = sample['incorrect'][3]
  subject = new Pose(input)
  expect(subject.isMountainPose()).toEqual(false)
});
///make bodypart hash
