'use strict';

var _ = require('underscore');

module.exports.generateFib = function generateFib(limit) {
  var fibonacci = [1, 2];
  var next = 0;
  for (var i = 2; next < limit; i++) {
    next = fibonacci[i-1]+fibonacci[i-2];
    if (next < limit) {
      fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
    }
  }
  return fibonacci;
};

module.exports.sumOfFibonacci = function sumOfFibonacci(limit) {
  var fibonacci = module.exports.generateFib(limit);
  var i = 0;
  var sum = 0;
  while (fibonacci[i] < limit) {
    sum = fibonacci[i]%2 ===0 ? sum+fibonacci[i] : sum;
    i++
  }
  return sum;
};



