/* Test Dependencies */
var assert = require('assert');
var expect = require('chai').expect;
var _ = require('underscore');
var rosie = require('rosie');

/* Problems */
var two = require('./problem-2.js');
var seven = require('./problem-7.js');
var eight = require('./problem-8.js');
var pascals = require('./pascals-triangle.js');
var maxDiff = require('./max-diff.js');

/* Specs */

/* 2 */
describe('Problem 2', function() {

  it('should generate the fibonacci sequence', function() {
    expect(two.generateFib(10)).to.deep.equal([1,2,3,5,8]);
  });

  it('should generate the fibonacci sequence with a limit', function() {
    expect(two.generateFib(100)).to.deep.equal([1,2,3,5,8,13,21,34,55,89]);
  });

  it('should generate the sum of the even fibonacci numbers', function() {
    expect(two.sumOfFibonacci(4000000)).to.deep.equal(4613732);
  });

});

/* 7 */
describe('Problem 7', function() {

  it('should find the 10001st prime number', function() {
    assert.equal(seven.findPrime(10001), 104743);
  });

  it('should be able to catch all prime numbers', function() {
    assert.equal(seven.isPrime(2), true);
    assert.equal(seven.isPrime(3), true);
    assert.equal(seven.isPrime(5), true);
    assert.equal(seven.isPrime(7), true);
    assert.equal(seven.isPrime(10), false);
    assert.equal(seven.isPrime(11), true);
    assert.equal(seven.isPrime(13), true);
  });

});

/* 8 */
describe('Problem 8', function() {

  var num = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450;

  it('should work', function() {
    assert.equal(eight.greatestProduct(num), Infinity);
  });

});

/* Pascals Triangle */

describe('Pascals Triangle', function() {

  it('should find out N lines of pascals triangle', function() {
    var fourLinesOfTriangle = [
      [1],
      [1,1],
      [1,2,1],
      [1,3,3,1],
      [1,4,6,4,1]
    ];

    assert.deepEqual(pascals.findTriangle(1)[0], fourLinesOfTriangle[0]);
    assert.deepEqual(pascals.findTriangle(1).length, 1);

    assert.deepEqual(pascals.findTriangle(2)[1], fourLinesOfTriangle[1]);
    assert.deepEqual(pascals.findTriangle(2).length, 2);

    assert.deepEqual(pascals.findTriangle(3)[2], fourLinesOfTriangle[2]);
    assert.deepEqual(pascals.findTriangle(3).length, 3);

    assert.deepEqual(pascals.findTriangle(4)[3], fourLinesOfTriangle[3]);
    assert.deepEqual(pascals.findTriangle(4).length, 4);
  });

  it('should find out N lines of pascals triangle', function() {
    var fourLinesOfTriangle = [
      [1],
      [1,1],
      [1,2,1],
      [1,3,3,1],
      [1,4,6,4,1]
    ];

    assert.deepEqual(pascals.findTriangleRecursive(1)[0], fourLinesOfTriangle[0]);
    assert.deepEqual(pascals.findTriangleRecursive(1).length, 1);

    assert.deepEqual(pascals.findTriangleRecursive(2)[1], fourLinesOfTriangle[1]);
    assert.deepEqual(pascals.findTriangleRecursive(2).length, 2);

    assert.deepEqual(pascals.findTriangleRecursive(3)[2], fourLinesOfTriangle[2]);
    assert.deepEqual(pascals.findTriangleRecursive(3).length, 3);

    assert.deepEqual(pascals.findTriangleRecursive(4)[3], fourLinesOfTriangle[3]);
    assert.deepEqual(pascals.findTriangleRecursive(4).length, 4);
  });

});


/* Max Diff */

describe('Max Diff', function() {
  it('should return the max diff of the largest number and the smallest number in index order', function() {
    assert.deepEqual(maxDiff.maxDiffOf([2,3,10,2,4,8,1]), 8);
    assert.deepEqual(maxDiff.maxDiffOf([7,9,5,6,3,2]), 2);
    assert.deepEqual(maxDiff.maxDiffOf([12,9,5,10,3,2]), 5);
    assert.deepEqual(maxDiff.maxDiffOf([2,3,10,2,4,8,1,3,13]), 12);
    assert.deepEqual(maxDiff.maxDiffOf([2,3,4,5,4,3,2,1,2,3,4,5,6,7]), 6);
    assert.deepEqual(maxDiff.maxDiffOf([1,2,3,4,3,5]), 4);
  });

  it('should return -1 if no max diff', function() {
    assert.deepEqual(maxDiff.maxDiffOf([]), -1);
    assert.deepEqual(maxDiff.maxDiffOf([2]), -1);
    assert.deepEqual(maxDiff.maxDiffOf([4,4,4,4,4]), -1);
    assert.deepEqual(maxDiff.maxDiffOf([10,9,8,7]), -1);
  });
});
