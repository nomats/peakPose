
const warriorTwo1 = {
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

const warriorTwo2 = {
  score: 0.7041914033539155,
  keypoints: [
    {score: 0.9933145642280579, part: "nose", position: {x: 352.93767755681813, y: 129.62726218678128}},
    {score: 0.9859431982040405, part: "leftEye", position: {x: 362.0659052861201, y: 117.53396417493019}},
    {score: 0.8400688171386719, part: "rightEye", position: {x: 349.8154043222402, y: 118.65606373344255}},
    {score: 0.9804317355155945, part: "leftEar", position: {x: 403.9972161627435, y: 120.8292568955466}},
    {score: 0.1612030416727066, part: "rightEar", position: {x: 352.8980126318993, y: 125.5865689452935}},
    {score: 0.9731451869010925, part: "leftShoulder", position: {x: 442.2649274553571, y: 189.54177083998826}},
    {score: 0.9874529838562012, part: "rightShoulder", position: {x: 349.6244039163961, y: 202.3905374402198}},
    {score: 0.4783990979194641, part: "leftElbow", position: {x: 449.67031503652595, y: 280.99868940787155}},
    {score: 0.45742180943489075, part: "rightElbow", position: {x: 355.6839742288961, y: 291.33835765802974}},
    {score: 0.22587648034095764, part: "leftWrist", position: {x: 680.111416903409, y: 563.1447907920196}},
    {score: 0.18905481696128845, part: "rightWrist", position: {x: 306.9588004768668, y: 201.19956566165914}},
    {score: 0.9826815724372864, part: "leftHip", position: {x: 440.9761186079545, y: 363.8836679428909}},
    {score: 0.9631907939910889, part: "rightHip", position: {x: 377.9837472098214, y: 370.83069774592036}},
    {score: 0.8389308452606201, part: "leftKnee", position: {x: 212.37569437398537, y: 416.0375220753322}},
    {score: 0.7433191537857056, part: "rightKnee", position: {x: 211.39087231128244, y: 415.63129056651275}},
    {score: 0.6226173043251038, part: "leftAnkle", position: {x: 207.47200309456167, y: 572.5858247465806}},
    {score: 0.5482024550437927, part: "rightAnkle", position: {x: 208.72656884131493, y: 565.4627539138556}}
  ]
  }

const mountain1 = {
  //https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1720/MTQ3MTUyNzM1MjQ1MzEzNDg2/mountainhp2_292_37362_cmyk.webp
  score: 0.9374673366546631,
  keypoints: [
    {score: 0.9984795451164246, part: "nose", position: {x: 867.082363200039, y: 139.34810966428796}},
    {score: 0.9976953268051147, part: "leftEye", position: {x: 884.5536936801585, y: 120.80305946448948}},
    {score: 0.995785653591156, part: "rightEye", position: {x: 849.8897991854535, y: 118.8806278152376}},
    {score: 0.8357583284378052, part: "leftEar", position: {x: 905.9810636207121, y: 131.71076510623712}},
    {score: 0.8865057826042175, part: "rightEar", position: {x: 833.1177493787358, y: 134.85277551082618}},
    {score: 0.9934952259063721, part: "leftShoulder", position: {x: 939.0765205748116, y: 242.1837124414523}},
    {score: 0.9838179349899292, part: "rightShoulder", position: {x: 793.9800185364151, y: 243.4584244906692}},
    {score: 0.9866327047348022, part: "leftElbow", position: {x: 966.0234542497726, y: 371.36710985810515}},
    {score: 0.989894688129425, part: "rightElbow", position: {x: 764.4417666238955, y: 370.7695001932421}},
    {score: 0.9488635063171387, part: "leftWrist", position: {x: 998.4647097518192, y: 498.58430285055033}},
    {score: 0.8745731115341187, part: "rightWrist", position: {x: 730.0744491862656, y: 504.11775658633326}},
    {score: 0.9217945337295532, part: "leftHip", position: {x: 914.5591358335499, y: 481.72699298117277}},
    {score: 0.9597892761230469, part: "rightHip", position: {x: 810.6170763424182, y: 486.88238101235834}},
    {score: 0.9720034003257751, part: "leftKnee", position: {x: 899.8785408004159, y: 702.4112093041447}},
    {score: 0.9774855375289917, part: "rightKnee", position: {x: 824.2542163745777, y: 703.2182234729278}},
    {score: 0.8457183837890625, part: "leftAnkle", position: {x: 880.5404146634615, y: 882.1650988755154}},
    {score: 0.7686517834663391, part: "rightAnkle", position: {x: 849.9319304468231, y: 882.6055469670201}},
  ]
};

const handsOnHips1 = {
  // https://www.dhresource.com/600x600/f2/albu/g6/M01/2A/74/rBVaSFu8DP6AGJl6AAICst4js4w436.jpg
  score: 0.9444622222115012,
  keypoints: [
    {score: 0.9980316758155823, part: "nose", position: {x: 297.65605992511894, y: 69.04847036183499}},
    {score: 0.9948192238807678, part: "leftEye", position: {x: 309.13835677308606, y: 55.663294280689065}},
    {score: 0.9929817914962769, part: "rightEye", position: {x: 283.0801993505352, y: 55.873033992146944}},
    {score: 0.8091188073158264, part: "leftEar", position: {x: 324.97710653654843, y: 64.2217444713553}},
    {score: 0.8415245413780212, part: "rightEar", position: {x: 272.13714494012214, y: 67.16588954199555}},
    {score: 0.9866852760314941, part: "leftShoulder", position: {x: 342.3489686114565, y: 126.42336518706746}},
    {score: 0.9926885366439819, part: "rightShoulder", position: {x: 248.84692129379323, y: 126.17020920486185}},
    {score: 0.9886897206306458, part: "leftElbow", position: {x: 400.87733285237346, y: 199.0904336157142}},
    {score: 0.9841790795326233, part: "rightElbow", position: {x: 193.20959599372836, y: 192.8676671222832}},
    {score: 0.9471879601478577, part: "leftWrist", position: {x: 354.20283017274005, y: 248.57322930464693}},
    {score: 0.9548919200897217, part: "rightWrist", position: {x: 232.6720716219047, y: 240.15573151796332}},
    {score: 0.9776188135147095, part: "leftHip", position: {x: 329.0292812466209, y: 276.8714667191555}},
    {score: 0.9759510159492493, part: "rightHip", position: {x: 261.47397579206313, y: 281.18800390962906}},
    {score: 0.9228923320770264, part: "leftKnee", position: {x: 329.1594825401438, y: 424.9675183147707}},
    {score: 0.9694175720214844, part: "rightKnee", position: {x: 255.2255175105428, y: 415.4939644889435}},
    {score: 0.8908283114433289, part: "leftAnkle", position: {x: 330.4288342749783, y: 549.8685104211721}},
    {score: 0.8283511996269226, part: "rightAnkle", position: {x: 246.65505696332988, y: 548.4341420104347}}
  ]
};

const goddess1 = {
  // https://i2.wp.com/www.feelgoodyogavictoria.com/fgyp/wp-content/uploads/2015/01/goddess-pose-deviasana.png?zoom=2&resize=376%2C396
  score: 0.8067714589483598,
  keypoints: [
    {score: 0.9885653853416443, part: "nose", position: {x: 313.5378910433095, y: 149.70232754066345}},
    {score: 0.9930859804153442, part: "leftEye", position: {x: 329.61143769356323, y: 135.6873429595447}},
    {score: 0.9864208698272705, part: "rightEye", position: {x: 297.7349576860945, y: 135.78329615358447}},
    {score: 0.8522735238075256, part: "leftEar", position: {x: 344.7119409674053, y: 145.61195300993373}},
    {score: 0.5619542002677917, part: "rightEar", position: {x: 284.36341710551136, y: 146.73185449819096}},
    {score: 0.9670693278312683, part: "leftShoulder", position: {x: 364.3139215392116, y: 226.3991557136911}},
    {score: 0.9734305739402771, part: "rightShoulder", position: {x: 263.5299365082263, y: 208.68862249655803}},
    {score: 0.9091839790344238, part: "leftElbow", position: {x: 471.7371297105451, y: 160.5766712126185}},
    {score: 0.8775482177734375, part: "rightElbow", position: {x: 152.4275840212623, y: 160.40436146220225}},
    {score: 0.2924434244632721, part: "leftWrist", position: {x: 141.10808494306428, y: 61.00912830790536}},
    {score: 0.5988689064979553, part: "rightWrist", position: {x: 144.23210250997099, y: 60.3763734973845}},
    {score: 0.9472538232803345, part: "leftHip", position: {x: 362.84028036052194, y: 413.3343275726819}},
    {score: 0.9489489197731018, part: "rightHip", position: {x: 271.9970390343592, y: 422.4259206803119}},
    {score: 0.8498261570930481, part: "leftKnee", position: {x: 513.5136606567003, y: 475.6993641837699}},
    {score: 0.68251633644104, part: "rightKnee", position: {x: 513.5431885050837, y: 476.5147185779009}},
    {score: 0.709509551525116, part: "leftAnkle", position: {x: 561.9560953776042, y: 633.6952253498015}},
    {score: 0.5762156248092651, part: "rightAnkle", position: {x: 77.75166345756745, y: 636.0843527872055}}
  ]
};

module.exports = {
  correct: [warriorTwo1,warriorTwo2],
  incorrect: [mountain1, handsOnHips1, goddess1]
}
