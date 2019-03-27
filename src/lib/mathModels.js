import RegressionHandler from './regressionHandler';

class MathModels {
  constructor() {
    this._regHandler = new RegressionHandler();
  }

  angle(p_edge1, p_middle, p_edge2) {
    // Note: rounds to one degree
    const a = Math.sqrt((p_edge1.x - p_middle.x) ** 2 + (p_edge1.y - p_middle.y) ** 2);
    const b = Math.sqrt((p_edge2.x - p_middle.x) ** 2 + (p_edge2.y - p_middle.y) ** 2);
    const c = Math.sqrt((p_edge2.x - p_edge1.x) ** 2 + (p_edge2.y - p_edge1.y) ** 2);
    return Math.round(Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)) * (360 / (Math.PI * 2)));
  }

  isStraight(points, margin = 10) {
    let result = true;
    const b_1 = this._regHandler.b_1(points);
    const b_0 = this._regHandler.b_0(points, b_1);
    const { yHat } = this._regHandler;
    for (let i = 0; i < points.length; i++) {
      const c_o = points[i].y + points[i].x / b_1;
      const x_i = (b_1 * (c_o - b_0)) / ((b_1 ** 2) + 1);
      const y_i = yHat(x_i, b_1, b_0);
      const distance = Math.sqrt((points[i].y - y_i) ** 2 + (points[i].x - x_i) ** 2);
      if (distance > margin) {
        result = false;
      }
    }
    return result;
  }

  isHorizontal(points, margin = 5) {
    let result = !(points.length < 2);
    const average = this._regHandler.average(points)[1];
    for (let i = 0; i < points.length; i++) {
      if ((points[i].y > average + margin) || (points[i].y < (average - margin))) {
        result = false;
      }
    }
    return result;
  }

  isVertical(points, margin = 5) {
    let result = !(points.length < 2);
    const average = this._regHandler.average(points)[0];
    for (let i = 0; i < points.length; i++) {
      if ((points[i].x > average + margin) || (points[i].x < (average - margin))) {
        result = false;
      }
    }
    return result;
  }
}

export default MathModels;
