'use strict';

module.exports.maxDiffOf = function maxDiffOf(arr) {
  var currentLowestIndex = 0;
  var maxDiff = 0;
  var diff = 0;
  for(var i = 0; i < arr.length; i++) {
    diff = arr[i] - arr[currentLowestIndex];
    if (diff > maxDiff && i > currentLowestIndex) {
      maxDiff = diff;
    }

    if(arr[i] < arr[currentLowestIndex]) {
      currentLowestIndex = i;
    }
  }

  return maxDiff || -1;
};
