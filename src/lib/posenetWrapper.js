import Bodypart from './bodypart';

class Pose{
  constructor(posenetObject) {
    this.source = posenetObject;
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

  isMountainPose(){
    const c1 = this.bodypart("rightWrist").position['y'] > this.bodypart("rightHip").position['y']
    const c2 = this.bodypart("leftWrist").position['y'] > this.bodypart("leftHip").position['y']
    // lower body x-coordinates
    const c3 = this._isPointBetween(this.bodypart("leftAnkle").position['x'],[this.bodypart("leftHip").position['x'],this.bodypart("rightHip").position['x']])
    const c4 = this._isPointBetween(this.bodypart("rightAnkle").position['x'],[this.bodypart("leftHip").position['x'],this.bodypart("rightHip").position['x']])
    const c5 = this.bodypart("leftAnkle").position['x'] > this.bodypart("rightAnkle").position['x']
    return (c1 && c2 && c3 && c4 && c5 )
  }

  _isPointBetween(point,boundary){
    boundary.sort(function(a,b){return a - b});
    const withinUpperBound = boundary[1] > point
    const withinLowerBound = boundary[0] < point
    return withinUpperBound && withinLowerBound
  }
};

module.exports = Pose
