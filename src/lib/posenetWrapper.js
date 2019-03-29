import Bodypart from "./bodypart";
import MathModels from "./mathModels";

class Pose {
  constructor(posenetObject) {
    this.source = posenetObject;
    this._mm = new MathModels();
    this._bodypartIndexLookup = {
      nose: 0,
      leftEye: 1,
      rightEye: 2,
      leftEar: 3,
      rightEar: 4,
      leftShoulder: 5,
      rightShoulder: 6,
      leftElbow: 7,
      rightElbow: 8,
      leftWrist: 9,
      rightWrist: 10,
      leftHip: 11,
      rightHip: 12,
      leftKnee: 13,
      rightKnee: 14,
      leftAnkle: 15,
      rightAnkle: 16
    };
  }

  bodypart(bodypart) {
    return new Bodypart(
      this.source["keypoints"][this._bodypartIndexLookup[bodypart]]
    );
  }

  isWarrior2() {
    const criteria_1 = "Arms parallel to the ground";
    const check_1 = this._isHorizontal(
      [
        this.bodypart("rightWrist").position,
        this.bodypart("rightElbow").position,
        this.bodypart("rightShoulder").position,
        this.bodypart("leftShoulder").position,
        this.bodypart("leftElbow").position,
        this.bodypart("leftWrist").position
      ],
      15
    );

    const criteria_2 = "Knee bent and stacked over foot";
    var kneeAngle = this._angle(
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position
    );
    const check_2a = kneeAngle > 85 && kneeAngle < 115;
    const check_2b = this._isStacked(
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position
    );

    const isCorrect = check_1 && check_2a && check_2b;

    return [
      isCorrect,
      [[check_1, criteria_1], [check_2a && check_2b, criteria_2]]
    ];
  }

  isMountainPose() {
    const criteria_1 = "Arms by side, palms open";
    const check_1 = this._isHorizontal(
      [
        this.bodypart("rightWrist").position,
        this.bodypart("rightHip").position,
        this.bodypart("leftHip").position,
        this.bodypart("leftWrist").position
      ],
      25
    );

    const criteria_2 = "Stand straight";
    const check_2a = this._isPointBetween(
      this.bodypart("leftAnkle").position["x"],
      [
        this.bodypart("leftShoulder").position["x"],
        this.bodypart("rightShoulder").position["x"]
      ]
    );

    const check_2b = this._isPointBetween(
      this.bodypart("rightAnkle").position["x"],
      [
        this.bodypart("leftShoulder").position["x"],
        this.bodypart("rightShoulder").position["x"]
      ]
    );
    const check_2 = check_2a && check_2b

    const criteria_3 = "Feet together";
    const check_3 =
      this.bodypart("leftAnkle").position["x"] >
      this.bodypart("rightAnkle").position["x"];

    const isZen = check_1 && check_2 && check_3;

    return [
      isZen,
      [
        [check_1, criteria_1],
        [check_2, criteria_2],
        [check_3, criteria_3]
      ]
    ];
  }

  isTreePose() {
    // straight standing leg
    const criteria_1 = "Straight standing leg";
    const check_1 =
      this._isStraight([
        this.bodypart("leftAnkle").position,
        this.bodypart("leftKnee").position,
        this.bodypart("leftHip").position
      ]) ||
      this._isStraight([
        this.bodypart("rightAnkle").position,
        this.bodypart("rightKnee").position,
        this.bodypart("rightHip").position
      ]);
    // bent floating leg
    const criteria_2 = "Bend floating leg";
    var rightKneeAngle = this._angle(
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position
    );
    var leftKneeAngle = this._angle(
      this.bodypart("leftHip").position,
      this.bodypart("leftKnee").position,
      this.bodypart("leftAnkle").position
    );
    const check_2 = rightKneeAngle < 160 || leftKneeAngle < 160;
    // aligned hips
    const criteria_3 = "Hips aligned";
    const check_3 = this._isHorizontal([
      this.bodypart("leftHip").position,
      this.bodypart("rightHip").position
    ]);
    // aligned shoulders
    const criteria_4 = "Shoulders aligned";
    const check_4 = this._isHorizontal([
      this.bodypart("leftShoulder").position,
      this.bodypart("rightShoulder").position
    ]);
    const isZen = check_1 && check_2 && check_3 && check_4;
    return [
      isZen,
      [
        [check_1, criteria_1],
        [check_2, criteria_2],
        [check_3, criteria_3],
        [check_4, criteria_4]
      ]
    ];
  }

  isGoddess() {
    const criteria_1 = "Wide stance, stack knee over heel";
    const leftKneeAngle = this._angle(
      this.bodypart("leftHip").position,
      this.bodypart("leftKnee").position,
      this.bodypart("leftAnkle").position
    );
    const rightKneeAngle = this._angle(
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position
    );

    const check_1 = leftKneeAngle <= 130 && rightKneeAngle <= 130;

    const criteria_2 = "Cactus arms";
    const subCheck_2_1 =
      this.bodypart("leftWrist").position["y"] <
        this.bodypart("leftElbow").position["y"] &&
      this.bodypart("rightWrist").position["y"] <
        this.bodypart("rightElbow").position["y"];

    const subCheck_2_2 =
      this.bodypart("leftHip").position["y"] >
        this.bodypart("leftElbow").position["y"] &&
      this.bodypart("rightHip").position["y"] >
        this.bodypart("rightElbow").position["y"];

    const leftElbowAngle = this._angle(
      this.bodypart("leftWrist").position,
      this.bodypart("leftElbow").position,
      this.bodypart("leftShoulder").position
    );
    const rightElbowAngle = this._angle(
      this.bodypart("rightWrist").position,
      this.bodypart("rightElbow").position,
      this.bodypart("rightShoulder").position
    );
    const subCheck_2_3 = leftElbowAngle < 130 && rightElbowAngle < 130;

    const check_2 = subCheck_2_1 && subCheck_2_2 && subCheck_2_3;

    const isZen = check_1 && check_2;

    return [
      isZen,
      [
        [check_1, criteria_1],
        [check_2, criteria_2]
      ]
    ];
  }

  isChairPose() {
    const criteria_1 = "Sit down on a 'chair'";
    const subCheck_1_1 =
      this.bodypart("rightHip").position["y"] <
      this.bodypart("rightKnee").position["y"] &&
      this.bodypart("leftHip").position["y"] <
      this.bodypart("leftKnee").position["y"];

    const leftHipAngle = this._angle(
      this.bodypart("leftShoulder").position,
      this.bodypart("leftHip").position,
      this.bodypart("leftKnee").position
    );

    const rightHipAngle = this._angle(
      this.bodypart("rightShoulder").position,
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position
    );

    const subCheck_1_2 =
    leftHipAngle > 20 &&
    leftHipAngle < 150 &&
    rightHipAngle > 20 &&
    rightHipAngle < 150;

    const check_1 = subCheck_1_1 && subCheck_1_2;

    // Knees
    const criteria_2 = "Stack knees over heels";

    const leftKneeAngle = this._angle(
      this.bodypart("leftHip").position,
      this.bodypart("leftKnee").position,
      this.bodypart("leftAnkle").position
    );

    const rightKneeAngle = this._angle(
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position
    );

    const check_2 =
      leftKneeAngle > 20 &&
      leftKneeAngle < 150 &&
      rightKneeAngle > 20 &&
      rightKneeAngle < 150;

    const isZen = check_1 && check_2;

    return [
      isZen,
      [
        [check_1, criteria_1],
        [check_2, criteria_2]
      ]
    ];
  }

  _isPointBetween(point, boundary) {
    boundary.sort(function(a, b) {
      return a - b;
    });
    const withinUpperBound = boundary[1] > point;
    const withinLowerBound = boundary[0] < point;
    return withinUpperBound && withinLowerBound;
  }

  _isStraight(points, margin = 10) {
    return this._mm.isStraight(points, margin);
  }

  _angle(edge1, middle, edge2) {
    return this._mm.angle(edge1, middle, edge2);
  }

  _isHorizontal(points, margin = 10) {
    return this._mm.isHorizontal(points, margin);
  }

  _isStacked(points, margin = 10) {
    return this._mm.isVertical(points, margin);
  }
}

export default Pose;
