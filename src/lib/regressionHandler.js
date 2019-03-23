class RegressionHandler {
  constructor(){};

  average(data) {
   var xCum = 0
   var yCum = 0
   for(var i = 0; i < data.length; i++){
     xCum += data[i]['x']
     yCum += data[i]['y']
   }
   var xBar = xCum / data.length
   var yBar = yCum / data.length
   console.log([xBar,yBar])
   return [xBar,yBar]
  }

  s_xx(data) {
   var sum = 0;
   var xBar;
   var yBar;
   [xBar, yBar] = this.average(data)
     for(var i = 0; i < data.length; i++){
       sum += (data[i]['x'] - xBar)**2
   }
   console.log("s_xx")
   console.log(sum)
   return sum
  }

  s_yy(data) {
   var sum = 0;
   var xBar;
   var yBar;
   [xBar, yBar] = this.average(data)
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

}

export default RegressionHandler
