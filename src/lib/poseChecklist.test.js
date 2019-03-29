import sample from "../../spec/posenet_sample/warrior2_pose_testing";
import Pose from "./posenetWrapper";

it("#isWarrior2 returns message list for correct pose", () => {
  var input = sample["correct"][0];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [true, "Arms parallel to the ground"],
    [true, "Knee bent and stacked over foot"]
  ]);
});

it("#isWarrior2 returns message list for incorrect pose", () => {
  var input = sample["nearly"][0];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [false, "Knee bent and stacked over foot"],
    [true, "Right knee bent and stacked over right foot"]
  ]);
});

it("#isWarrior2 returns message list for incorrect pose", () => {
  var input = sample["nearly"][1];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [true, "Knee bent and stacked over foot"],
    [false, "Right knee bent and stacked over right foot"]
  ]);
});
