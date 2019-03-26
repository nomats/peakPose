import sample from "../../spec/posenet_sample/warrior2_pose_testing";
import Pose from "./posenetWrapper";

it("#isWarrior2 returns message list for correct pose", () => {
  var input = sample["correct"][0];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [true, "keep arms parrallel to the ground"],
    [true, "Right knee bent and stacked over right foot"]
  ]);
});

it("#isWarrior2 returns message list for incorrect pose", () => {
  var input = sample["nearly"][0];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [false, "keep arms parrallel to the ground"],
    [true, "Right knee bent and stacked over right foot"]
  ]);
});

it("#isWarrior2 returns message list for incorrect pose", () => {
  var input = sample["nearly"][1];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [true, "keep arms parrallel to the ground"],
    [false, "Right knee bent and stacked over right foot"]
  ]);
});
