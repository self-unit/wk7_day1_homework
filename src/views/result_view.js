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
  resultMessage.textContent = `The number is ${result} for Prime.`;
};

module.exports = ResultView;
