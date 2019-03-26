import sample from '../../spec/posenet_sample/chair_pose_testing';
import Pose from './posenetWrapper';

it('#isChairPose can recognise wrong position', () => {
  var input = sample['incorrect'][0]
  var subject = new Pose(input)
  // console.log("jogging");
  expect(subject.isChairPose()[0]).toEqual(false)
  input = sample['incorrect'][1]
  subject = new Pose(input)
  // console.log("palm tree");
  expect(subject.isChairPose()[0]).toEqual(false)
  input = sample['incorrect'][2]
  subject = new Pose(input)
  // console.log("mountain");
  expect(subject.isChairPose()[0]).toEqual(false)
});

it('#isChairPose can recognise position', () => {
  var input = sample['correct'][0]
  var subject = new Pose(input)
  // console.log("chair1")
  expect(subject.isChairPose()[0]).toEqual(true)
  input = sample['correct'][1]
  subject = new Pose(input)
  // console.log("chair2")
  expect(subject.isChairPose()[0]).toEqual(true)
  input = sample['correct'][2]
  subject = new Pose(input)
  // console.log("chair3")
  expect(subject.isChairPose()[0]).toEqual(true)
});
