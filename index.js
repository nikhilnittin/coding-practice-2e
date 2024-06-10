let factorialOfNumber = require("../factorial/index.js");
let ratioOfTwoNumbers = require("../ratio/index.js");
function ratioAndFactorial(num1, num2, num) {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num),
  };
}
module.exports = ratioAndFactorial;
