import sample from "../../spec/posenet_sample/warrior2_pose_testing";
import Pose from "./posenetWrapper";

it("#isWarrior2 returns message list for correct pose", () => {
  var input = sample["correct"][0];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [true, "Horizontal Arms"],
    [true, "Knee at 90"]
  ]);
});

it("#isWarrior2 returns message list for incorrect pose", () => {
  var input = sample["nearly"][0];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [false, "Horizontal Arms"],
    [true, "Knee at 90"]
  ]);
});

it("#isWarrior2 returns message list for incorrect pose", () => {
  var input = sample["nearly"][1];
  var subject = new Pose(input);
  expect(subject.isWarrior2()[1]).toEqual([
    [true, "Horizontal Arms"],
    [false, "Knee at 90"]
  ]);
});
