'use strict';

var _ = require('underscore');

module.exports.findPrime = function findPrime(position) {
  var i = 0;
  var n = 1;
  var not = true;
    while (not) {
      if (module.exports.isPrime(n)) {
        i++;
        if (i === position) {
          not = false;
          return n;
        }
      }
      n++;
    }
};

module.exports.isPrime = function isPrime(n) {
  if (n === 2) {

    return true;

  } else if ((n%2 !== 0)) { //if n is not even, it might be prime
    var sqrt = Math.ceil(Math.sqrt(n));

    
    if (n%sqrt !== 0) { //it might be prime
      for (var i = 3; i <= sqrt; i++) {
        if (n%i === 0) {
          return false; //not a prime number
        }
      }
    } else {
      return false; //nope not prime
    }

  } else {
    return false; // nope not prime
  }

  return true; //yay its prime!
};

// start at 1
// is it a prime number ?
// -> yes // -> no, go to next number
// is it the nth prime number ?
// -> yes, you win!
// -> increment prime number counter
// go to next number


// is it a prime number?
// is it even and not two?
// take the square root
// find all the prime numbers between 2 and less than the square root
// divide the number by each of those numbers
// can the number be divided equally by those numbers?
// yes? its not prime
// no? YES ITS PRIME!

