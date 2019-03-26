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
    const criteria_1 = "keep arms parrallel to the ground";
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

    const criteria_2 = "Right knee bent and stacked over right foot";
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
    // var conditional =  new conditional([
    //this._isPointBetween(blah),
    //this._isHigherThan(blah),
    //this._isLowerThan(blah),
    //])
    // return conditional.isMet
    const criteria_1 = "Right hand below hip";
    const check_1 =
      this.bodypart("rightWrist").position["y"] >
      this.bodypart("rightHip").position["y"];
    const criteria_2 = "Left hand below hip";
    const check_2 =
      this.bodypart("leftWrist").position["y"] >
      this.bodypart("leftHip").position["y"];
    // lower body x-coordinates
    const criteria_3 = "Left foot between shoulders";
    const check_3 = this._isPointBetween(
      this.bodypart("leftAnkle").position["x"],
      [
        this.bodypart("leftShoulder").position["x"],
        this.bodypart("rightShoulder").position["x"]
      ]
    );
    const criteria_4 = "Right foot between shoulders";
    const check_4 = this._isPointBetween(
      this.bodypart("rightAnkle").position["x"],
      [
        this.bodypart("leftShoulder").position["x"],
        this.bodypart("rightShoulder").position["x"]
      ]
    );
    const criteria_5 = "Feet not crossed";
    const check_5 =
      this.bodypart("leftAnkle").position["x"] >
      this.bodypart("rightAnkle").position["x"];

    const isZen = check_1 && check_2 && check_3 && check_4 && check_5;

    return [
      isZen,
      [
        [check_1, criteria_1],
        [check_2, criteria_2],
        [check_3, criteria_3],
        [check_4, criteria_4],
        [check_5, criteria_5]
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
    console.log("c1" + check_1);
    // bent floating leg
    const criteria_2 = "Bent floating leg";
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
    console.log("l=" + leftKneeAngle + " r=" + rightKneeAngle);
    const check_2 = rightKneeAngle < 160 || leftKneeAngle < 160;
    console.log("c2" + check_2);
    // aligned hips
    const criteria_3 = "Hips aligned";
    const check_3 = this._isHorizontal([
      this.bodypart("leftHip").position,
      this.bodypart("rightHip").position
    ]);
    console.log("c3" + check_3);
    // aligned shoulders
    const criteria_4 = "Shoulders aligned";
    const check_4 = this._isHorizontal([
      this.bodypart("leftShoulder").position,
      this.bodypart("rightShoulder").position
    ]);
    console.log("c4" + check_4);
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
    const criteria_1 = "both knees are bend and hips are open";
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

    const criteria_2 = "wrists above elbows";
    const check_2 =
      this.bodypart("leftWrist").position["y"] <
        this.bodypart("leftElbow").position["y"] &&
      this.bodypart("rightWrist").position["y"] <
        this.bodypart("rightElbow").position["y"];

    const criteria_3 = "elbows above hips";
    const check_3 =
      this.bodypart("leftHip").position["y"] >
        this.bodypart("leftElbow").position["y"] &&
      this.bodypart("rightHip").position["y"] >
        this.bodypart("rightElbow").position["y"];

    const criteria_4 = "both arms are bend";
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
    const check_4 = leftElbowAngle < 130 && rightElbowAngle < 130;

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

  isChairPose() {
    const criteria_1 = "Hips are above knees";
    const check_1 =
      this.bodypart("rightHip").position["y"] <
        this.bodypart("rightKnee").position["y"] &&
      this.bodypart("leftHip").position["y"] <
        this.bodypart("leftKnee").position["y"];
    // console.log(check_1);

    // Knees
    const criteria_2 = "Knees are bent";

    const leftKneeAngle = this._angle(
      this.bodypart("leftHip").position,
      this.bodypart("leftKnee").position,
      this.bodypart("leftAnkle").position
    );
    // console.log("leftKneeAngle");
    // console.log(leftKneeAngle);

    const rightKneeAngle = this._angle(
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position
    );
    // console.log("rightKneeAngle");
    // console.log(rightKneeAngle);

    const check_2 =
      leftKneeAngle > 20 &&
      leftKneeAngle < 150 &&
      rightKneeAngle > 20 &&
      rightKneeAngle < 150;

    // Hips
    const criteria_3 = "Tail bone is tucked in and hips are folded";
    const leftHipAngle = this._angle(
      this.bodypart("leftShoulder").position,
      this.bodypart("leftHip").position,
      this.bodypart("leftKnee").position
    );
    // console.log("left hip angle");
    // console.log(leftHipAngle);

    const rightHipAngle = this._angle(
      this.bodypart("rightShoulder").position,
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position
    );
    // console.log("right hip angle")
    // console.log(rightHipAngle);

    const check_3 =
      leftHipAngle > 20 &&
      leftHipAngle < 150 &&
      rightHipAngle > 20 &&
      rightHipAngle < 150;

    const isZen = check_1 && check_2 && check_3;

    return [
      isZen,
      [[check_1, criteria_1], [check_2, criteria_2], [check_3, criteria_3]]
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
