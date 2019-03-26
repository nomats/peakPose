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

  isHalfMoonPose(){
    const criteria_1 = "right hand stacked below shoulder";
    const check_1 = 
      this.bodypart("rightWrist").position['y'] >
      this.bodypart("rightShoulder").position['y'];
    const criteria_2 = "left hand stacked above left shoulder";
    const check_2 = 
      this.bodypart("leftWrist").position['y'] <
      this.bodypart("leftShoulder").position['y'];
    const criteria_3 = "left leg and back are horizontal";
    const check_3 = this._isHorizontal(
      [
        this.bodypart("leftShoulder").position,
        this.bodypart("leftHip").position,
        this.bodypart("leftKnee").position,
        this.bodypart("leftAnkle").position
      ],
      15
    );
    const criteria_4 = "right ankle stacked below right hip";
    const check_4 = 
      this.bodypart("rightAnkle").position['y'] >
      this.bodypart("rightHip").position['y'];
    
    const isZen = check_1 && check_2 && check_3 && check_4;
    
    return [
      isZen,
      [
      [check_1, criteria_1],
      [check_2, criteria_2],
      [check_3, criteria_3],
      [check_4, criteria_4],
      ]
    ]
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
    const c6 = this._isStraight([this.bodypart("leftAnkle").position,
                                this.bodypart("leftKnee").position,
                                this.bodypart("leftHip").position])
    console.log("is straight:")
    console.log(c6)
    return (c1 && c2 && c3 && c4 && c5 )
  }

  _isPointBetween(point,boundary){
    boundary.sort(function(a,b){return a - b});
    const withinUpperBound = boundary[1] > point
    const withinLowerBound = boundary[0] < point
    return withinUpperBound && withinLowerBound
  }

  _isStraight(points){
    return this._mm.isStraight(points)
  }

  _angle(edge1,middle,edge2){
    return this._mm.angle(edge1,middle,edge2)
  }

  _isHorizontal(points){
    return this._mm.isHorizontal(points)
  }
};

export default Pose;
