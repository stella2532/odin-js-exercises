const palindromes = function (str) {
    let palind = '';
    for (i = str.length; i > 0; i--) {
        palind += str.slice(i-1, i)
    }

    return str.toLowerCase().replace(/\W|_/g, '') === palind.toLowerCase().replace(/\W|_/g, '');
};

/* answer key
const palindromes = function(string) {
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
  };
  */

// Do not edit below this line
module.exports = palindromes;
