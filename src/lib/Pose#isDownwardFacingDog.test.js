import sample from '../../spec/posenet_sample/down_dog_pose_testing';
import Pose from './posenetWrapper';


it('#isDownwardFacingDog can recognise correct position', () => {
  var input = sample['correct'][0]
  var subject = new Pose(input)
  expect(subject.isDownwardFacingDog()).toEqual(true)
});

it('#isDownwardFacingDog can recognise correct position', () => {
  var input = sample['correct'][1]
  var subject = new Pose(input)
  expect(subject.isDownwardFacingDog()).toEqual(true)
});

it('#isDownwardFacingDog can recognise incorrect position', () => {
  console.log("bad")
  var input = sample['incorrect'][0]
  var subject = new Pose(input)
  expect(subject.isDownwardFacingDog()).toEqual(false)
});

it('#isDownwardFacingDog can recognise incorrect position', () => {
  console.log("bad")
  var input = sample['incorrect'][1]
  var subject = new Pose(input)
  expect(subject.isDownwardFacingDog()).toEqual(false)
});

it('#isDownwardFacingDog can recognise incorrect position', () => {
  console.log("bad")
  var input = sample['incorrect'][2]
  var subject = new Pose(input)
  expect(subject.isDownwardFacingDog()).toEqual(false)
});