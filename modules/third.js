var randomNumber = require('./random-number');
var conversion = require('./convert');
var minNum = 100;
var maxNum = 1000000;

//function1
function newRandomNumber() {
  return conversion(randomNumber(minNum, maxNum));
}


//function2
function acctBalance (){
   return ("Account balance: \n");
}

module.exports.newRandomNumber = newRandomNumber;
module.exports.acctBalance = acctBalance;
