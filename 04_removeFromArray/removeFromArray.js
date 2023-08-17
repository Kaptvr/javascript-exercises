const removeFromArray = function() {
  
  for (let i = 0; i < arguments.length - 1; i++) {
    let j = 0;
    while (arguments[0][j] != undefined) {
      if (arguments[0][j] === arguments[i + 1]) {
        arguments[0].splice(j, 1);
        j--;
      }
      j++
    }
  }

  return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
