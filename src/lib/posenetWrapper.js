class Pose{
  constructor(posenet_object) {
    this.source = posenet_object;
    this._bodypartIndexLookup = {
      "nose" : 0, "leftEye" : 1, "rightEye" : 2,
      "leftEar" : 3, "rightEar" : 4, "leftShoulder" : 5,
      "rightShoulder" : 6, "leftElbow" : 7, "rightElbow" : 8,
      "leftWrist" : 9, "rightWrist" : 10, "leftHip" : 11,
      "rightHip" : 12, "leftKnee" : 13, "rightKnee" : 14,
      "leftAnkle" : 15, "rightAnkle" : 16
    }
  }
  bodypartPosition(bodypart){
    return this.source['keypoints'][this._bodypartIndexLookup[bodypart]]['position'];
  }
};

module.exports = Pose
