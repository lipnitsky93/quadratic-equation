module.exports = function solveEquation(equation) {
  var arr = [];
  var firstMultiply = equation.indexOf('*');
  var secondMultiply = equation.lastIndexOf('*');
  var a = +equation.slice(0, firstMultiply);
  var preb = equation.slice(firstMultiply + 6, secondMultiply);
  var prec = equation.slice(secondMultiply + 4);

  if (preb.charAt(0) == '-') {
      b = +preb.slice(1) * -1;
  } else {
      b = +preb.slice(1);
  }

  if (prec.charAt(0) == '-') {
      c = +prec.slice(1) * -1;
  } else {
      c = +prec.slice(1);
  }
  
  
  var d = Math.pow(b, 2) - 4 * a * c;
  
  var x1 = Math.round((- b + Math.sqrt(d)) / (2 * a));
  var x2 = Math.round((- b - Math.sqrt(d)) / (2 * a));
  
  arr.push(x1);
  arr.push(x2);
                           
    var n = arr.length;
    for (var i = 0; i < n-1; i++) {
      for (var j = 0; j < n-1-i; j++) {
         if (arr[j+1] < arr[j]) {
            var t = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = t; 
         }
        }
     }                     
  
  return arr;
}
