class RegressionHandler {

  average(data) {
   var xCum = 0
   var yCum = 0
   for(var i = 0; i < data.length; i++){
     xCum += data[i]['x']
     yCum += data[i]['y']
   }
   var xBar = xCum / data.length
   var yBar = yCum / data.length
   return [xBar,yBar]
  }

  s_xx(data) {
   var sum = 0;
   var xBar;
   xBar = this.average(data)[0]
     for(var i = 0; i < data.length; i++){
       sum += (data[i]['x'] - xBar)**2
   }
   return sum
  }

  s_yy(data) {
   var sum = 0;
   var yBar;
   yBar = this.average(data)[1]
     for(var j = 0; j < data.length; j++){
       sum += (data[j]['y'] - yBar)**2
   }
   return sum
  }

  s_xy(data) {
    var xBar;
    var yBar;
    var sum = 0;
    [xBar, yBar] = this.average(data);
    for(var i = 0; i < data.length; i++){
       sum += (data[i]['x'] - xBar)*(data[i]['y'] - yBar)
    }
    return sum
  }

  r(data) {
   return (this.s_xy(data)/(Math.sqrt(this.s_xx(data)*this.s_yy(data))))
  }

  b_1(data){
    return (this.s_xy(data)/this.s_xx(data));
  }

  b_0(data, b_1) {
    var xBar;
    var yBar;
    [xBar, yBar] = this.average(data);
    return yBar -(this.b_1(data)*xBar)
  }

  yHat(x,b_1,b_0){
    return (b_0 + b_1*x)
  }

  ssr(data){
    var yBar = this.average(data)[1];
    var b_1 = this.b_1(data);
    var b_0 = this.b_0(data, b_1);
    var sum = 0;
    for(var i = 0; i < data.length; i++){
       sum += (this.yHat(data[i]['x'],b_1,b_0) - yBar)**2
    }
    return sum
  }
  coefficientOfDetermination(data){
    var ssr = this.ssr(data)
    var ss_y = this.s_yy(data)
    return ssr/ss_y
  }

}

export default RegressionHandler
