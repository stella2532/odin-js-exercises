const sumAll = function(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || a < 0 || b < 0) {
        return 'ERROR';
    }

    let big = a > b ? a : b ;
    let small = a < b ? a : b ; 
    let result = 0;
    for (let i = small ; i <= big ; i++) {
        result += i;
    }
    return result;
};

/* answer key

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

*/


// Do not edit below this line
module.exports = sumAll;
