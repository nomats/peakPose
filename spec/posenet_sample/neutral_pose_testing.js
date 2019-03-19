
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

const wrongSample4 = {
  //https://www.yogajournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ2MjI3ODcyMDE5ODUwODQ5/anatomy_287_3321_bjkforsacrum.jpg
  score: 0.8030242512331289,
  keypoints: [
    {score: 0.9887796640396118, part: "nose", position: {x: 277.97749603771774, y: 105.90823239185771}},
    {score: 0.9844920039176941, part: "leftEye", position: {x: 291.39027279713116, y: 98.02860097416112}},
    {score: 0.8567753434181213, part: "rightEye", position: {x: 276.69326331967216, y: 97.36582671618852}},
    {score: 0.9872686862945557, part: "leftEar", position: {x: 333.25797159163676, y: 103.24887685306737}},
    {score: 0.08654748648405075, part: "rightEar", position: {x: 290.987536821209, y: 106.77957078277088}},
    {score: 0.9889535903930664, part: "leftShoulder", position: {x: 372.17041215740267, y: 172.86653912653688}},
    {score: 0.9710161089897156, part: "rightShoulder", position: {x: 272.05162573642417, y: 168.18592759429433}},
    {score: 0.7416433691978455, part: "leftElbow", position: {x: 488.8314919393571, y: 181.3059422227203}},
    {score: 0.7779634594917297, part: "rightElbow", position: {x: 174.08858102266905, y: 172.19948440301613}},
    {score: 0.8925129771232605, part: "leftWrist", position: {x: 589.2039734887295, y: 163.6222689269019}},
    {score: 0.7824183106422424, part: "rightWrist", position: {x: 73.2115008244749, y: 167.50980014488346}},
    {score: 0.9606366753578186, part: "leftHip", position: {x: 347.9257002033171, y: 348.41993888479766}},
    {score: 0.9767878651618958, part: "rightHip", position: {x: 275.8223746878202, y: 343.4007208151896}},
    {score: 0.8408723473548889, part: "leftKnee", position: {x: 130.2132818503458, y: 376.2736105997054}},
    {score: 0.5863587856292725, part: "rightKnee", position: {x: 137.57498469118212, y: 376.69809009989757}},
    {score: 0.7472049593925476, part: "leftAnkle", position: {x: 125.03087878618084, y: 525.4517121862193}},
    {score: 0.4811806380748749, part: "rightAnkle", position: {x: 124.78814847352075, y: 520.7985979924437}}
    ]
};

const wrongSample5 = {
  //https://www.yogajournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ2MjI3ODcyMDE5ODUwODQ5/anatomy_287_3321_bjkforsacrum.jpg
  score: 0.8343080290976692,
  keypoints: [
    {score: 0.9939845204353333, part: "nose", position: {x: 603.0449841779488, y: 119.3960953219316}},
    {score: 0.8675385117530823, part: "leftEye", position: {x: 598.5365145991747, y: 108.45424107142858}},
    {score: 0.991159975528717, part: "rightEye", position: {x: 587.4442569721347, y: 107.96445862676057}},
    {score: 0.14152969419956207, part: "leftEar", position: {x: 589.7708157049796, y: 121.675631916499}},
    {score: 0.9699873924255371, part: "rightEar", position: {x: 549.8355600600427, y: 123.78752986670021}},
    {score: 0.9602205753326416, part: "leftShoulder", position: {x: 599.5398746116932, y: 200.89774585010062}},
    {score: 0.9680174589157104, part: "rightShoulder", position: {x: 502.99787843970233, y: 190.7816744215292}},
    {score: 0.8961775302886963, part: "leftElbow", position: {x: 709.7527587166172, y: 200.9477489939638}},
    {score: 0.9596440196037292, part: "rightElbow", position: {x: 391.09925221972367, y: 182.96126760563382}},
    {score: 0.7329257130622864, part: "leftWrist", position: {x: 828.0065628187592, y: 191.0167253521127}},
    {score: 0.8652724027633667, part: "rightWrist", position: {x: 273.3841983783846, y: 178.91285211267606}},
    {score: 0.8904120922088623, part: "leftHip", position: {x: 580.8620699647626, y: 380.4804451710262}},
    {score: 0.976862907409668, part: "rightHip", position: {x: 507.07776168687406, y: 371.40766473843064}},
    {score: 0.9263439774513245, part: "leftKnee", position: {x: 732.5042887611276, y: 439.6945108148894}},
    {score: 0.7051408886909485, part: "rightKnee", position: {x: 723.6363079852096, y: 439.8418636820926}},
    {score: 0.7858008742332458, part: "leftAnkle", position: {x: 684.055067113316, y: 582.9295774647887}},
    {score: 0.552217960357666, part: "rightAnkle", position: {x: 685.3879336575019, y: 585.2301307847083}}
  ]
};

const mountain2 = {
  // https://3i133rqau023qjc1k3txdvr1-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/Yoga_Mountain-Pose_Exercise-2.jpg
  score: 0.9393985481823192,
  keypoints: [
    {score: 0.9949293732643127, part: "nose", position: {x: 120.85647457248562, y: 77.18718334636857}},
    {score: 0.9946432113647461, part: "leftEye", position: {x: 132.08375071431254, y: 64.34899976612192}},
    {score: 0.9901210069656372, part: "rightEye", position: {x: 107.07546229938885, y: 69.57842176994392}},
    {score: 0.6708736419677734, part: "leftEar", position: {x: 146.00823454804473, y: 75.36387418223693}},
    {score: 0.7917882800102234, part: "rightEar", position: {x: 94.6805170918559, y: 70.82650621802406}},
    {score: 0.9984951019287109, part: "leftShoulder", position: {x: 162.9128338321225, y: 148.841501421633}},
    {score: 0.9956321120262146, part: "rightShoulder", position: {x: 79.24812065376031, y: 149.40684387747166}},
    {score: 0.9823945760726929, part: "leftElbow", position: {x: 182.2162801721594, y: 222.74201222647608}},
    {score: 0.9681554436683655, part: "rightElbow", position: {x: 65.8323967902215, y: 230.35827231618154}},
    {score: 0.962847888469696, part: "leftWrist", position: {x: 202.7510246025337, y: 319.9858193186532}},
    {score: 0.9543367028236389, part: "rightWrist", position: {x: 42.456236493456494, y: 324.75146106281113}},
    {score: 0.9760878086090088, part: "leftHip", position: {x: 150.93895151326944, y: 303.0178627756845}},
    {score: 0.9908208250999451, part: "rightHip", position: {x: 91.36842899532108, y: 308.98432989880047}},
    {score: 0.9603991508483887, part: "leftKnee", position: {x: 154.35161942702075, y: 451.32067168919383}},
    {score: 0.984632134437561, part: "rightKnee", position: {x: 105.02874869042701, y: 453.50353220711764}},
    {score: 0.878981351852417, part: "leftAnkle", position: {x: 132.3026451278519, y: 562.406811469424}},
    {score: 0.874636709690094, part: "rightAnkle", position: {x: 117.37911274668934, y: 565.1369391247234}},
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

module.exports = {
  correct: [mountain1, mountain2],
  incorrect: [wrongSample5, wrongSample4, goddess1, handsOnHips1]
}
