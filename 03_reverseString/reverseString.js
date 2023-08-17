const reverseString = function(string) {

  let reverse = '';

  for (let i = 0, j = string.length - 1; i < string.length; i++, j--) {
    reverse += string[j];
  }

  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
