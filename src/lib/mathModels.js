import RegressionHandler from './regressionHandler'

class MathModels{
  constructor() {
    this._regHandler = new RegressionHandler()
    };

  angle(p_edge1, p_middle, p_edge2){
    //Note: rounds to one degree
    var a = Math.sqrt((p_edge1['x']-p_middle['x'])**2 + (p_edge1['y']-p_middle['y'])**2)
    var b = Math.sqrt((p_edge2['x']-p_middle['x'])**2 + (p_edge2['y']-p_middle['y'])**2)
    var c = Math.sqrt((p_edge2['x']-p_edge1['x'])**2 + (p_edge2['y']-p_edge1['y'])**2)
    return Math.round(Math.acos((a**2 + b**2 - c**2)/(2*a*b))*(360/(Math.PI * 2)))
  }

  isStraight(points, margin=10){
    var result = true
    var b_1 = this._regHandler.b_1(points)
    var b_0 = this._regHandler.b_0(points, b_1)
    var b_1Inverted = -1*(1/b_1)
    const yHat = this._regHandler.yHat
    for(var i = 0; i < points.length; i++){
      var c_o = points[i]['y'] + points[i]['x']/b_1
      var x_i = (b_1*(c_o - b_0))/((b_1**2)+1)
      var y_i = yHat(x_i,b_1,b_0)
      var distance = Math.sqrt((points[i]['y']-y_i)**2 + (points[i]['x']-x_i)**2)
      if(distance > margin ){
        result = false
      }
      console.log("intercept")
      console.log(distance>margin)
      console.log("distance")
      console.log(distance)
      console.log(x_i)
      console.log(y_i)
      console.log("original coordinate")
      console.log(points[i]['x'])
      console.log(points[i]['y'])
    }
    return result
  }
  isHorizontal(points, margin=5){
    var result = points.length < 2 ? false : true
    var average = this._regHandler.average(points)[1]
    for(var i = 0; i < points.length ; i++ ){
      if((points[i]['y']>average+margin) || (points[i]['y']<(average-margin))){
        result = false
      };
    };
    return result
  }
}

export default MathModels;
