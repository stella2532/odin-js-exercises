const reverseString = function(string) {
    let length = string.length;
    let output = '';

    for (let i = (length - 1); i > -1; i--) {
        output = output + string.charAt(i);
    }
    return output;

    // return string.split('').reverse().join('');

};

// Do not edit below this line
module.exports = reverseString;
