const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkNumberIsPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};

PrimeChecker.prototype.checkNumberIsPrime = function (number) {
 for(var i = 2; i < number; i++) {
   if(number % i === 0) {
     return false;
   }
 }
 return number > 1;
};

module.exports = PrimeChecker;
