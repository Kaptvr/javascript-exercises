const repeatString = function(input, number) {

  if (number < 0) {
    return "ERROR"
  }

  if (number == 0) {
    return ''
  }

  let string = input;

  for (let i = 0; i < number - 1; i++) {
    string += input;
  }

  return string;
};

// Do not edit below this line
module.exports = repeatString;
