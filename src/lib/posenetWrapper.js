import Bodypart from './bodypart';
import MathModels from './mathModels'

class Pose{
  constructor(posenetObject) {
    this.source = posenetObject;
    this._mm = new MathModels();
    this._bodypartIndexLookup = {
      "nose" : 0, "leftEye" : 1, "rightEye" : 2,
      "leftEar" : 3, "rightEar" : 4, "leftShoulder" : 5,
      "rightShoulder" : 6, "leftElbow" : 7, "rightElbow" : 8,
      "leftWrist" : 9, "rightWrist" : 10, "leftHip" : 11,
      "rightHip" : 12, "leftKnee" : 13, "rightKnee" : 14,
      "leftAnkle" : 15, "rightAnkle" : 16
    };
  }

  bodypart(bodypart){
    return (new Bodypart(this.source['keypoints'][this._bodypartIndexLookup[bodypart]]))
  }

  isWarrior2(){
    const c1 = this._isHorizontal([
      this.bodypart("rightWrist").position,
      this.bodypart("rightElbow").position,
      this.bodypart("rightShoulder").position,
      this.bodypart("leftShoulder").position,
      this.bodypart("leftElbow").position,
      this.bodypart("leftWrist").position
    ],15)

    var kneeAngle = this._angle(
      this.bodypart("rightHip").position,
      this.bodypart("rightKnee").position,
      this.bodypart("rightAnkle").position,
    )
    const c2 = (kneeAngle > 85) && (kneeAngle < 115)
    return c1 && c2;
  }

  isMountainPose(){
  // var conditional =  new conditional([
  //this._isPointBetween(blah),
  //this._isHigherThan(blah),
  //this._isLowerThan(blah),
  //])
  // return conditional.isMet
  const c1 = this.bodypart("rightWrist").position['y'] > this.bodypart("rightHip").position['y']
  const c2 = this.bodypart("leftWrist").position['y'] > this.bodypart("leftHip").position['y']
  // lower body x-coordinates
  const c3 = this._isPointBetween(this.bodypart("leftAnkle").position['x'],[this.bodypart("leftShoulder").position['x'],this.bodypart("rightShoulder").position['x']])
  const c4 = this._isPointBetween(this.bodypart("rightAnkle").position['x'],[this.bodypart("leftShoulder").position['x'],this.bodypart("rightShoulder").position['x']])
  const c5 = this.bodypart("leftAnkle").position['x'] > this.bodypart("rightAnkle").position['x']

  return (c1 && c2 && c3 && c4 && c5 )
}

isGoddess(){
  const criteria1 = "both knees are bend and hips are open";
  const leftKneeAngle = this._angle(this.bodypart("leftHip").position,
                                    this.bodypart("leftKnee").position,
                                    this.bodypart("leftAnkle").position
                                  );
  const rightKneeAngle = this._angle(this.bodypart("rightHip").position,
                                    this.bodypart("rightKnee").position,
                                    this.bodypart("rightAnkle").position
                                  );
  console.log(leftKneeAngle);
  console.log(rightKneeAngle);
  const check1 = leftKneeAngle <= 130 && rightKneeAngle <= 130;

  const criteria2 = "wrists above elbows"
  const check2 = this.bodypart("leftWrist").position['y'] < this.bodypart("leftElbow").position['y'] &&
                 this.bodypart("rightWrist").position['y'] < this.bodypart("rightElbow").position['y'];
  console.log(check2);

  const criteria3 = "elbows above hips"
  const check3 = this.bodypart("leftHip").position['y'] > this.bodypart("leftElbow").position['y'] &&
                 this.bodypart("rightHip").position['y'] > this.bodypart("rightElbow").position['y'];
  console.log(check3);

  const criteria4 = "both arms are bend"
  const leftElbowAngle = this._angle(this.bodypart("leftWrist").position,
                                    this.bodypart("leftElbow").position,
                                    this.bodypart("leftShoulder").position
                                  );
  const rightElbowAngle = this._angle(this.bodypart("rightWrist").position,
                                    this.bodypart("rightElbow").position,
                                    this.bodypart("rightShoulder").position
                                  );
  console.log(leftElbowAngle);
  console.log(rightElbowAngle);
  const check4 = leftElbowAngle < 130 && rightElbowAngle < 130;

  return (check1 && check2 && check3 && check4)
};

  _isPointBetween(point,boundary){
    boundary.sort(function(a,b){return a - b});
    const withinUpperBound = boundary[1] > point
    const withinLowerBound = boundary[0] < point
    return withinUpperBound && withinLowerBound
  }

  _isStraight(points,margin=10){
    return this._mm.isStraight(points,margin)
  }

  _angle(edge1,middle,edge2){
    return this._mm.angle(edge1,middle,edge2)
  }

  _isHorizontal(points,margin=10){
    return this._mm.isHorizontal(points,margin)
  }
};

export default Pose;
