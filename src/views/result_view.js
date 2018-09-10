const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeResult = event.detail;
    this.displayResult(primeResult);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultMessage = document.querySelector('#result');
  if (result === false) {
    resultMessage.textContent = 'The number not prime.';
  } else {
    resultMessage.textContent = 'The number is prime.';
  };
};

module.exports = ResultView;
