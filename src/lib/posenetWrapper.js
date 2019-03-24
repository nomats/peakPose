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
    const c1 = this._isStraight([
      this.bodypart("rightWrist").position,
      this.bodypart("rightElbow").position,
      this.bodypart("rightShoulder").position,
      this.bodypart("leftShoulder").position,
      this.bodypart("leftElbow").position,
      this.bodypart("leftWrist").position
    ],0.7)
    // const c2 = this._isHorizontal([
    //   this.bodypart("rightWrist").position,
    //   this.bodypart("rightElbow").position,
    //   this.bodypart("rightShoulder").position,
    //   this.bodypart("leftShoulder").position,
    //   this.bodypart("leftElbow").position,
    //   this.bodypart("leftWrist").position
    // ], 5)
    return c1;
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

  _isPointBetween(point,boundary){
    boundary.sort(function(a,b){return a - b});
    const withinUpperBound = boundary[1] > point
    const withinLowerBound = boundary[0] < point
    return withinUpperBound && withinLowerBound
  }

  _isStraight(points,margin=0.9){
    return this._mm.isStraight(points,margin)
  }

  _angle(edge1,middle,edge2){
    return this._mm.angle(edge1,middle,edge2)
  }

  _isHorizontal(points,margin=0.1){
    return this._mm.isHorizontal(points,margin)
  }
};

export default Pose;
