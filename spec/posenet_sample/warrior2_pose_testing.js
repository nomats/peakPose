
const warrior2 = {
  //https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_800/MTQ2MTgwNzI1MzYyNDAyODQ4/pw-anatomy_277_02_fnl-warrior-ii.webp
  //NOTE! posenet struggles with this pose. This particulr pose has very heavy
  //errors on the left leg, but since we currently aren't testing in in warrior 2 it's acceptable
  score: 0.7844882020178963,
  keypoints: [
    {score: 0.9888758659362793, part: "nose", position: {x: 362.21140675730516, y: 69.62346649169922}},
    {score: 0.9779614210128784, part: "leftEye", position: {x: 370.57439630681813, y: 58.37096405029297}},
    {score: 0.8901190161705017, part: "rightEye", position: {x: 356.6607903814935, y: 54.992034912109375}},
    {score: 0.9734868407249451, part: "leftEar", position: {x: 405.084180955763, y: 62.85505294799805}},
    {score: 0.1784474104642868, part: "rightEar", position: {x: 365.5865716314935, y: 65.12577056884766}},
    {score: 0.9910054206848145, part: "leftShoulder", position: {x: 423.6183860085227, y: 112.3545913696289}},
    {score: 0.9821950793266296, part: "rightShoulder", position: {x: 354.2558783989448, y: 113.12765502929688}},
    {score: 0.7708472013473511, part: "leftElbow", position: {x: 503.266696682224, y: 119.97327423095703}},
    {score: 0.8619135618209839, part: "rightElbow", position: {x: 287.1264014306006, y: 119.65786743164062}},
    {score: 0.41727522015571594, part: "leftWrist", position: {x: 171.41788631290584, y: 116.17415618896484}},
    {score: 0.5113655924797058, part: "rightWrist", position: {x: 175.19731001420453, y: 115.01646423339844}},
    {score: 0.9717625379562378, part: "leftHip", position: {x: 414.9010437804383, y: 249.87791442871094}},
    {score: 0.9499937295913696, part: "rightHip", position: {x: 354.9904880275974, y: 254.8887939453125}},
    {score: 0.7382885217666626, part: "leftKnee", position: {x: 265.9264819653003, y: 284.3259582519531}},
    {score: 0.8163376450538635, part: "rightKnee", position: {x: 249.34050324675323, y: 288.1562194824219}},
    {score: 0.7424349784851074, part: "leftAnkle", position: {x: 252.3123921976461, y: 411.506103515625}},
    {score: 0.5739893913269043, part: "rightAnkle", position: {x: 252.0919205306412, y: 407.5014953613281}}
  ]
};

module.exports = {
  correct: [warrior2]
}
