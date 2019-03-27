import sample from '../../spec/posenet_sample/warrior2_pose_testing';
import Pose from './posenetWrapper';

it('#isWarrior2 can recognise correct position', () => {
  const input = sample.correct[0];
  const subject = new Pose(input);
  expect(subject.isWarrior2()[0]).toEqual(true);
});

it('#isWarrior2 can recognise correct position', () => {
  const input = sample.correct[1];
  const subject = new Pose(input);
  expect(subject.isWarrior2()[0]).toEqual(true);
});

it('#isWarrior2 can recognise incorrect position', () => {
  console.log('bad');
  const input = sample.incorrect[0];
  const subject = new Pose(input);
  expect(subject.isWarrior2()[0]).toEqual(false);
});

it('#isWarrior2 can recognise incorrect position', () => {
  console.log('bad');
  const input = sample.incorrect[1];
  const subject = new Pose(input);
  expect(subject.isWarrior2()[0]).toEqual(false);
});

it('#isWarrior2 can recognise incorrect position', () => {
  console.log('bad');
  const input = sample.incorrect[2];
  const subject = new Pose(input);
  expect(subject.isWarrior2()[0]).toEqual(false);
});
