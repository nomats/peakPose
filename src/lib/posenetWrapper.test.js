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
