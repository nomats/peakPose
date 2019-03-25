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
    const criteria_1 = "Horizontal Arms";
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

    var kneeAngle = this._angle(
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position
    );

    const criteria_2 = "Knee at 90";
    const check_2 = kneeAngle > 85 && kneeAngle < 115;
    const isCorrect = check_1 && check_2;
    return [isCorrect, [[check_1, criteria_1], [check_2, criteria_2]]];
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

  isGoddess(){
    const criteria_1 = "both knees are bend and hips are open";
    const leftKneeAngle = this._angle(this.bodypart("leftHip").position,
                                      this.bodypart("leftKnee").position,
                                      this.bodypart("leftAnkle").position
                                    );
    const rightKneeAngle = this._angle(this.bodypart("rightHip").position,
                                      this.bodypart("rightKnee").position,
                                      this.bodypart("rightAnkle").position
                                    );

    const check_1 = leftKneeAngle <= 130 && rightKneeAngle <= 130;

    const criteria_2 = "wrists above elbows"
    const check_2 = this.bodypart("leftWrist").position['y'] < this.bodypart("leftElbow").position['y'] &&
                   this.bodypart("rightWrist").position['y'] < this.bodypart("rightElbow").position['y'];

    const criteria_3 = "elbows above hips"
    const check_3 = this.bodypart("leftHip").position['y'] > this.bodypart("leftElbow").position['y'] &&
                   this.bodypart("rightHip").position['y'] > this.bodypart("rightElbow").position['y'];

    const criteria_4 = "both arms are bend"
    const leftElbowAngle = this._angle(this.bodypart("leftWrist").position,
                                      this.bodypart("leftElbow").position,
                                      this.bodypart("leftShoulder").position
                                    );
    const rightElbowAngle = this._angle(this.bodypart("rightWrist").position,
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
  };

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
}

export default Pose;
