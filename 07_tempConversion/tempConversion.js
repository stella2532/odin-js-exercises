const ftoc = function(faren) {
  let cels = Math.round((faren - 32) * 5/9 * 10) / 10; 
  return cels;
};

const ctof = function(cels) {
  let faren = Math.round(((cels * 9/5) + 32) * 10) / 10;
  return faren;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
