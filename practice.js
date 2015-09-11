Number.prototype.plus = function ( num ) {//足し算
  return this + num;
};
Number.prototype.minus = function ( num ) {//引き算
  return this - num;
};
Number.prototype.divide = function ( num ) {//割り算
  return this / num;
};
Number.prototype.multiply = function ( num ) {//掛け算
  return this * num;
};
Number.prototype.mod = function ( num ) {//商を出す
  return this % num;
};
var number = 100;
var result1 = number.plus(1000);
var result2 = number.minus(10);
var result3 = number.divide(20);
var result3 = number.multiply(5);
var result3 = number.mod(30);
console.log(result1);
console.log(result2);
