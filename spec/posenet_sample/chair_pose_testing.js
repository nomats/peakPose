// good resources: https://www.yogabaron.com/yoga-poses

const chair1 = {
  // https://imgix.bustle.com/lovelace/uploads/556/7eee1ea0-7f9a-0133-9f11-0af7184f89fb.jpg?w=646&fit=max&auto=format&q=70
  score: 0.7315048768239862,
  keypoints: [
    {score: 0.9707838296890259, part: "nose", position: {x: 355.2852357288016, y: 143.2025293843397}},
    {score: 0.6072254776954651, part: "leftEye", position: {x: 349.67551895094067, y: 137.04136339229214}},
    {score: 0.9306417107582092, part: "rightEye", position: {x: 346.5226039232866, y: 136.36247714509102}},
    {score: 0.22097119688987732, part: "leftEar", position: {x: 345.48256419529423, y: 147.55306079900154}},
    {score: 0.8479042053222656, part: "rightEar", position: {x: 333.1816969066394, y: 152.58607126396393}},
    {score: 0.8479042053222656, part: "rightEar", position: {x: 333.1816969066394, y: 152.58607126396393}},
    {score: 0.4532324969768524, part: "leftShoulder", position: {x: 355.97357995339274, y: 179.89985015013508}},
    {score: 0.6498027443885803, part: "rightShoulder", position: {x: 342.8119445990922, y: 184.57632864598546}},
    {score: 0.4284423291683197, part: "leftElbow", position: {x: 408.5187244831216, y: 150.70245979285315}},
    {score: 0.4172557592391968, part: "rightElbow", position: {x: 401.97045698789793, y: 152.45427373488002}},
    {score: 0.2392171323299408, part: "leftWrist", position: {x: 471.18095687913745, y: 97.42935040435316}},
    {score: 0.28530845046043396, part: "rightWrist", position: {x: 470.2677707375024, y: 93.42845707593305}},
    {score: 0.2617388069629669, part: "leftHip", position: {x: 312.4893620095892, y: 332.6923079921449}},
    {score: 0.4266742467880249, part: "rightHip", position: {x: 276.61863161841654, y: 336.37953732689596}},
    {score: 0.44272807240486145, part: "leftKnee", position: {x: 370.9589160194278, y: 429.4785543186271}},
    {score: 0.4872470200061798, part: "rightKnee", position: {x: 364.01157101069657, y: 432.55448509525286}},
    {score: 0.4276803433895111, part: "leftAnkle", position: {x: 326.5642756286811, y: 552.6702759169344}},
    {score: 0.35740622878074646, part: "rightAnkle", position: {x: 324.744474797234, y: 557.0407827026747}},
  ]
};

const chair2 = {
  // https://www.yogabaron.com/wp-content/uploads/2018/12/Chair-pose-Utkatasana-yoga-pose-dec21.jpg
  score: 0.6993857687887024,
  keypoints: [
    {score: 0.9886011481285095, part: "nose", position: {x: 456.3802106625566, y: 175.82392548651282}},
    {score: 0.9864727258682251, part: "leftEye", position: {x: 466.0695829302351, y: 162.1453881983306}},
    {score: 0.4574292302131653, part: "rightEye", position: {x: 457.19321482055284, y: 160.82290864326583}},
    {score: 0.9701047539710999, part: "leftEar", position: {x: 503.3304239908854, y: 165.34132161130847}},
    {score: 0.03942149132490158, part: "rightEar", position: {x: 479.1737819208163, y: 169.87993635641976}},
    {score: 0.9364685416221619, part: "leftShoulder", position: {x: 523.704038055515, y: 220.57582003249968}},
    {score: 0.7363529801368713, part: "rightShoulder", position: {x: 548.1733008649119, y: 215.41530985227772}},
    {score: 0.9608045816421509, part: "leftElbow", position: {x: 432.19205287089596, y: 325.92417296749244}},
    {score: 0.334509938955307, part: "rightElbow", position: {x: 442.48088967391635, y: 321.3360976405307}},
    {score: 0.5948565006256104, part: "leftWrist", position: {x: 438.9963098448756, y: 295.6842004173478}},
    {score: 0.4291905462741852, part: "rightWrist", position: {x: 449.80521946606973, y: 285.684351470149}},
    {score: 0.8781918287277222, part: "leftHip", position: {x: 642.4608572606356, y: 360.76431734940894}},
    {score: 0.770982563495636, part: "rightHip", position: {x: 651.6379563756449, y: 359.3092367682658}},
    {score: 0.9418330192565918, part: "leftKnee", position: {x: 472.1339496838341, y: 416.64903360593246}},
    {score: 0.6240425109863281, part: "rightKnee", position: {x: 482.41495511539256, y: 416.8738321039518}},
    {score: 0.6946778893470764, part: "leftAnkle", position: {x: 563.1551266488999, y: 550.253793267417}},
    {score: 0.5456178188323975, part: "rightAnkle", position: {x: 568.8056989533136, y: 546.4415521449006}},
  ]
};

const chair3 = {
  // https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/ftr/PulseSquats.jpg
  score: 0.6454885737860904,
  keypoints: [
    {score: 0.9163626432418823, part: "nose", position: {x: 312.9286755112341, y: 240.67451028384488}},
    {score: 0.9423770308494568, part: "leftEye", position: {x: 333.1174691597422, y: 222.70624172138326}},
    {score: 0.5378872156143188, part: "rightEye", position: {x: 311.9385047208638, y: 225.29783553870388}},
    {score: 0.8401957154273987, part: "leftEar", position: {x: 359.0513976137537, y: 242.59730825450038}},
    {score: 0.11446713656187057, part: "rightEar", position: {x: 318.68201962135674, y: 233.96823537769677}},
    {score: 0.7725200057029724, part: "leftShoulder", position: {x: 363.64716850908616, y: 303.57939586277575}},
    {score: 0.43569061160087585, part: "rightShoulder", position: {x: 400.7709917938917, y: 298.3854879570524}},
    {score: 0.7180466055870056, part: "leftElbow", position: {x: 287.93370158892316, y: 230.48160993374458}},
    {score: 0.7122392058372498, part: "rightElbow", position: {x: 269.93473994761626, y: 236.58534534319952}},
    {score: 0.31700125336647034, part: "leftWrist", position: {x: 179.97128332047689, y: 154.0654084947374}},
    {score: 0.7793921828269958, part: "rightWrist", position: {x: 176.37977381299558, y: 149.98552071175922}},
    {score: 0.5860326886177063, part: "leftHip", position: {x: 529.3148259569582, y: 474.92282067275625}},
    {score: 0.386940062046051, part: "rightHip", position: {x: 537.0204223480605, y: 481.56878612487293}},
    {score: 0.9210743308067322, part: "leftKnee", position: {x: 365.3547957651038, y: 578.8759889680196}},
    {score: 0.50760817527771, part: "rightKnee", position: {x: 389.07604093860806, y: 582.4660745429476}},
    {score: 0.8227372169494629, part: "leftAnkle", position: {x: 399.9092904944669, y: 751.7956742284097}},
    {score: 0.6627336740493774, part: "rightAnkle", position: {x: 438.0315245059957, y: 752.0287291157213}},
  ]
};

// const chair4 = {
//   //https://scontent-lga3-1.cdninstagram.com/vp/560695e4bc78975bee7519049e270266/5CF05FB7/t51.2885-15/sh0.08/e35/s750x750/51658320_2297351986982691_3477701556440440214_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&ig_cache_key=MTk4MTA3OTcxNzEzMzk4MDE2Ng%3D%3D.2
//   score: 0.609935412512106,
//   keypoints: [
//     0: {score: 0.6219176650047302, part: "nose", position: {…}},
//     1: {score: 0.6198150515556335, part: "leftEye", position: {…}},
//     2: {score: 0.500283420085907, part: "rightEye", position: {…}},
//     3: {score: 0.3365033268928528, part: "leftEar", position: {…}},
//     4: {score: 0.15198613703250885, part: "rightEar", position: {…}},
//     5: {score: 0.6156299710273743, part: "leftShoulder", position: {…}},
//     6: {score: 0.4357040822505951, part: "rightShoulder", position: {…}},
//     7: {score: 0.5757982730865479, part: "leftElbow", position: {…}},
//     8: {score: 0.5396974682807922, part: "rightElbow", position: {…}},
//     9: {score: 0.7637608051300049, part: "leftWrist", position: {…}},
//     10: {score: 0.7773314714431763, part: "rightWrist", position: {…}},
//     11: {score: 0.6680712103843689, part: "leftHip", position: {…}},
//     12: {score: 0.594380795955658, part: "rightHip", position: {…}},
//     13: {score: 0.9256381988525391, part: "leftKnee", position: {…}},
//     14: {score: 0.7165542244911194, part: "rightKnee", position: {…}},
//     15: {score: 0.8387916684150696, part: "leftAnkle", position: {…}},
//     16: {score: 0.687038242816925, part: "rightAnkle", position: {…}},
//   ]
// };

const jogging = {
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_J8PApA0cY3U1MpiNW5ShrZm892ck6uXv4Z22233Cr7y9nr-bQ
  score: 0.7591513658271116,
  keypoints: [
    {score: 0.8208369612693787, part: "nose", position: {x: 112.9729713361288, y: 45.419958940486325}},
    {score: 0.6215441823005676, part: "leftEye", position: {x: 116.37426454996326, y: 40.1492246647471}},
    {score: 0.675020158290863, part: "rightEye", position: {x: 110.62613910006495, y: 39.21193584953387}},
    {score: 0.2851715385913849, part: "leftEar", position: {x: 116.81461137594637, y: 42.11194244856687}},
    {score: 0.36851727962493896, part: "rightEar", position: {x: 107.30304914651458, y: 41.753909022537705}},
    {score: 0.7529629468917847, part: "leftShoulder", position: {x: 119.51983540328509, y: 62.5593033033548}},
    {score: 0.8935678005218506, part: "rightShoulder", position: {x: 98.38288690626008, y: 62.89469335497041}},
    {score: 0.7445210814476013, part: "leftElbow", position: {x: 118.45029653962126, y: 82.75094179763008}},
    {score: 0.7901288866996765, part: "rightElbow", position: {x: 83.9251941012353, y: 84.2798606636598}},
    {score: 0.8639600276947021, part: "leftWrist", position: {x: 119.0177789668447, y: 93.69194777970462}},
    {score: 0.798000156879425, part: "rightWrist", position: {x: 87.68339255421432, y: 92.88381202933715}},
    {score: 0.9266843795776367, part: "leftHip", position: {x: 114.71183914499186, y: 104.21590510102892}},
    {score: 0.923690676689148, part: "rightHip", position: {x: 97.74776635710727, y: 102.33429289355722}},
    {score: 0.9220161437988281, part: "leftKnee", position: {x: 108.79060116010844, y: 145.39900907536145}},
    {score: 0.9092441201210022, part: "rightKnee", position: {x: 93.19905841473452, y: 136.12141068448727}},
    {score: 0.8551506996154785, part: "leftAnkle", position: {x: 106.4342479115909, y: 171.8760952507098}},
    {score: 0.7545561790466309, part: "rightAnkle", position: {x: 96.13888337440098, y: 168.46458199097938}},
  ]
};

const palmTree = {
  //https://www.yogabaron.com/wp-content/uploads/2018/12/Palm-tree-upward-salute-yoga-pose-dec21.jpg
  score: 0.5893799145432079,
  keypoints: [
    {score: 0.3677683472633362, part: "nose", position: {x: 335.5300565600635, y: 275.8763566061715}},
    {score: 0.4990784227848053, part: "leftEye", position: {x: 343.10959138620785, y: 271.62623643726573}},
    {score: 0.150663822889328, part: "rightEye", position: {x: 342.43261694188567, y: 273.4544970551012}},
    {score: 0.7372156977653503, part: "leftEar", position: {x: 371.0785526145152, y: 312.58478477216585}},
    {score: 0.1990119069814682, part: "rightEar", position: {x: 435.52437058876694, y: 335.7512815006054}},
    {score: 0.5021392703056335, part: "leftShoulder", position: {x: 339.6716050698723, y: 397.91876905209546}},
    {score: 0.4424808919429779, part: "rightShoulder", position: {x: 341.2074006539235, y: 386.8401685578058}},
    {score: 0.4639723002910614, part: "leftElbow", position: {x: 300.8667237801811, y: 284.5097302588347}},
    {score: 0.5733140110969543, part: "rightElbow", position: {x: 305.67999672841734, y: 281.98546046557084}},
    {score: 0.4386829435825348, part: "leftWrist", position: {x: 276.6444553551779, y: 147.77634662853964}},
    {score: 0.7005304098129272, part: "rightWrist", position: {x: 274.12224199690326, y: 144.8187832223292}},
    {score: 0.8815150260925293, part: "leftHip", position: {x: 324.50317137198186, y: 609.0520363685869}},
    {score: 0.8741539120674133, part: "rightHip", position: {x: 316.2367454237141, y: 609.2373893951701}},
    {score: 0.873045027256012, part: "leftKnee", position: {x: 335.6776400591046, y: 774.0809735925027}},
    {score: 0.8644813299179077, part: "rightKnee", position: {x: 336.4562681263361, y: 774.2499663451007}},
    {score: 0.7479796409606934, part: "leftAnkle", position: {x: 365.3831865705954, y: 932.3763264213395}},
    {score: 0.7034255862236023, part: "rightAnkle", position: {x: 363.23396924515845, y: 930.4576087072259} },
  ]
};

const mountainPose = {
  // https://www.yogabaron.com/wp-content/uploads/2018/12/Tadasana-mountain-yoga-pose-dec21.jpg
  score: 0.955197769052842,
  keypoints: [
    {score: 0.9976508021354675, part: "nose", position: {x: 511.05137667551963, y: 126.45921764719174}},
    {score: 0.9939570426940918, part: "leftEye", position: {x: 517.8058013440664, y: 118.79655005226671}},
    {score: 0.9921988844871521, part: "rightEye", position: {x: 500.01999899605727, y: 117.3580407616598}},
    {score: 0.7737576365470886, part: "leftEar", position: {x: 535.4552343255634, y: 131.45084496235222}},
    {score: 0.8435196876525879, part: "rightEar", position: {x: 483.84085159064085, y: 130.27143574336645}},
    {score: 0.9979614019393921, part: "leftShoulder", position: {x: 554.6716189755829, y: 187.60139265770403}},
    {score: 0.9962913990020752, part: "rightShoulder", position: {x: 469.4365290466499, y: 194.519687706316}},
    {score: 0.9886930584907532, part: "leftElbow", position: {x: 571.4666729032808, y: 266.5490317392637}},
    {score: 0.974977970123291, part: "rightElbow", position: {x: 454.5579799759054, y: 267.2668702645561}},
    {score: 0.9388396143913269, part: "leftWrist", position: {x: 574.1323557821019, y: 334.64925293951205}},
    {score: 0.979290783405304, part: "rightWrist", position: {x: 446.97686739057025, y: 336.186184489751}},
    {score: 0.9744642376899719, part: "leftHip", position: {x: 543.2488985150774, y: 333.3683743083501}},
    {score: 0.9809522032737732, part: "rightHip", position: {x: 481.0374084662797, y: 334.22228316186175}},
    {score: 0.9935455918312073, part: "leftKnee", position: {x: 525.1696839139469, y: 450.0315491582306}},
    {score: 0.9860374331474304, part: "rightKnee", position: {x: 489.5271759983907, y: 453.63397425569036}},
    {score: 0.9320444464683533, part: "leftAnkle", position: {x: 513.6898741915219, y: 567.7371725470007}},
    {score: 0.8941798806190491, part: "rightAnkle", position: {x: 507.24991462683755, y: 569.4951569770183}}
  ]
};

module.exports = {
  correct: [chair1, chair2, chair3],
  incorrect: [jogging, palmTree, mountainPose]
}
