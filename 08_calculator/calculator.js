const add = function(a,b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a,b) {
  let minus = a - b;
  return minus;
};

const sum = function(arr) {
  /* 
  let finalSum = 0;
  for (i = 0; i < arr.length; i++) {
    finalSum += Number(arr[i]);
  }
  return finalSum;
  */

  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  /* 
  let mult = 1;
  for (i = 0; i < arr.length; i++) {
    mult *= Number(arr[i]);
  }
  return mult; 
  */
  return arr.length ? arr.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;};

const power = function(a, x) {
	/*
  let result = 1;
  for (i = x; i > 0; i--) {
    result *= a;
  }
  return result;
  */
 return Math.pow(a, x);
};

const factorial = function(a) {
	let fact = 1;
  for (i = a; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
