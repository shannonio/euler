//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var multiples = function(ofNum) {
  var final = 0;
  for (var i = ofNum-1; i > 0; i--) {
    if (i%3 === 0 || i%5 === 0) {
      final += i;
    }
  }
  return final;
};

//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var isPrime = function(i) {
  for (var j = i; j>0; j--) { //check if i is a prime number
    if (i%j === 0 & j !== 1 & j !== i) {
      return false;
    }
  }
  return true;
}

var primeFactors = function(num) {
  var pfs = [];
  for (var i = num; i>0; i--) {
    if (num%i === 0) {
      //num is divisble i
      if (isPrime(i)) {
        pfs.push(i);
      }
    }
  }
  return pfs;
};

console.log(primeFactors(13195));

