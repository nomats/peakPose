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

  isStraight(points, margin=0.9){
    var goodness = this._regHandler.coefficientOfDetermination(points)
    console.log("goodness:")
    console.log(goodness)
    console.log((goodness > margin))
    return (goodness > margin)
  }
  isHorizontal(points, margin=0.1){
    var gradient = this._regHandler.b_1(points)
    console.log("gradient:")
    console.log(gradient)
    console.log((gradient < margin) && (gradient > -1*margin))
    return (gradient < margin) && (gradient > -1*margin)
  }
}

export default MathModels;
