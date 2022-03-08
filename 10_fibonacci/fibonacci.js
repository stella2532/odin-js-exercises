const fibonacci = function(x) {
    if (x < 0) return 'OOPS';
    if (Number(x) === 0) return '0';

    let fib = [1, 1];
    for (i = 1; i < Number(x); i++) {
        let sum = fib[i] + fib[i-1];
        fib.push(sum);
    }
    return fib[Number(x)-1];
};

/* answer key
const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};
*/

// Do not edit below this line
module.exports = fibonacci;
