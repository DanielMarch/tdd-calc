/*jshint unused: false*/

class Calculator{
  static add(x, y){
    return x + y;
  }

  static subtract(x, y){
    return x - y;
  }

  static multiply(x, y){
    return x * y;
  }

  static divide(x, y){
    return x / y;
  }

  static power(x, y){
    return Math.pow(x, y);
  }

  static sum(x){
    return x.reduce(function(prev, curr){return prev + curr;}, 0);
  }

  static addTwoFractions(x, y){
    var [nX, dX] = x.trim().split('/').map(n=>n*1);
    var [nY, dY] = y.trim().split('/').map(n=>n*1);

    var nX1 = dY * nX;
    var nY1 = dX * nY;

    var numerator = nX1 + nY1;
    var denominator = dX * dY;

    return `${numerator}/${denominator}`;
  }

  static addFractions(...numbers){
    return numbers.reduce((prev,curr)=>Calculator.addTwoFractions(prev,curr), numbers.pop());
  }
}

module.exports = Calculator;
