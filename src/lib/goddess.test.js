import Pose from './posenetWrapper';
import sample from '../../spec/posenet_sample/goddess_pose_testing';

it('#isGoddess can recognise position', () => {
  var input = sample['correct'][0]
  var subject = new Pose(input)
  console.log("correct 0")
  expect(subject.isGoddess()).toEqual(true)
  input = sample['correct'][1]
  subject = new Pose(input)
  console.log("correct 1")
  expect(subject.isGoddess()).toEqual(true)
  input = sample['correct'][2]
  subject = new Pose(input)
  console.log("correct 2")
  expect(subject.isGoddess()).toEqual(true)
});

it('#isGoddess can recognise wrong position', () => {
  var input = sample['incorrect'][0]
  var subject = new Pose(input)
    console.log("mountain")
  expect(subject.isGoddess()).toEqual(false)
  input = sample['incorrect'][1]
  subject = new Pose(input)
  console.log("warrior2")
  expect(subject.isGoddess()).toEqual(false)
  input = sample['incorrect'][2]
  subject = new Pose(input)
  console.log("garland")
  expect(subject.isGoddess()).toEqual(false)
});
