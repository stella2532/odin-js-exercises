const removeFromArray = function(array, ...val) {
    let removed = val;
    const finalArray = array.filter((item) => !removed.includes(item));
    return finalArray;
};


/* Answer key 

// The easiest way to get an array of all of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (...args) {

    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    
    // create a new empty array
    const newArray = [];
    
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
  
  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.
  
  // var removeFromArray = function(...args) {
  //   const array = args[0]
  //   return array.filter(val => !args.includes(val))
  // }

  */
  
// Do not edit below this line
module.exports = removeFromArray;