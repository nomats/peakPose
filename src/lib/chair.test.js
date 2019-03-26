import chairSample from '../../spec/posenet_sample/chair_pose_testing';
import Pose from './posenetWrapper';

it('#isChairPose can recognise wrong position', () => {
  var input = chairSample['incorrect'][0]
  var subject = new Pose(input)
  expect(subject.isChairPose()[0]).toEqual(false)
  input = chairSample['incorrect'][1]
  subject = new Pose(input)
  expect(subject.isChairPose()[0]).toEqual(false)
  input = chairSample['incorrect'][2]
  subject = new Pose(input)
  expect(subject.isChairPose()[0]).toEqual(false)
});

it('#isChairPose can recognise position', () => {
  var input = sample['correct'][0]
  var subject = new Pose(input)
  expect(subject.isChairPose()[0]).toEqual(true)
  input = sample['correct'][1]
  subject = new Pose(input)
  expect(subject.isChairPose()[0]).toEqual(true)
  input = sample['correct'][2]
  subject = new Pose(input)
  expect(subject.isChairPose()[0]).toEqual(true)
});
