class RegressionHandler {
  average(data) {
    let xCum = 0;
    let yCum = 0;
    for (let i = 0; i < data.length; i++) {
      xCum += data[i].x;
      yCum += data[i].y;
    }
    const xBar = xCum / data.length;
    const yBar = yCum / data.length;
    return [xBar, yBar];
  }

  s_xx(data) {
    let sum = 0;
    let xBar;
    xBar = this.average(data)[0];
    for (let i = 0; i < data.length; i++) {
      sum += (data[i].x - xBar) ** 2;
    }
    return sum;
  }

  s_xy(data) {
    let xBar;
    let yBar;
    let sum = 0;
    [xBar, yBar] = this.average(data);
    for (let i = 0; i < data.length; i++) {
      sum += (data[i].x - xBar) * (data[i].y - yBar);
    }
    return sum;
  }

  b_1(data) {
    return (this.s_xy(data) / this.s_xx(data));
  }

  b_0(data, b_1) {
    let xBar;
    let yBar;
    [xBar, yBar] = this.average(data);
    return yBar - (this.b_1(data) * xBar);
  }

  yHat(x, b_1, b_0) {
    return (b_0 + b_1 * x);
  }
}

export default RegressionHandler;
