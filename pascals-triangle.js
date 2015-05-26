'use strict';
// var input = 4


module.exports.findTriangle = function findTriangle(requestedLines) {
  var triangle = [[1]];
  var lineNumber = 0;

  while(lineNumber < requestedLines) {
      var line = triangle[lineNumber-1];
      var nextLineLength = lineNumber;
      var nextLine = [1];

      if (lineNumber === 1) { // if its the second row
        triangle.push([1,1]);
      } else if (lineNumber > 1) { // if its at least the third row
        for(var i = 0; i < nextLineLength; i++) { // as long as i is less than the nextLineLength
            var firstNum = line[i];
            var secondNum = line[i+1];
            if (secondNum) {
                nextLine.push(firstNum+secondNum);
            } else {
                nextLine.push(1);
            }
        }
        triangle.push(nextLine);
      }
      lineNumber++;
  }
  return triangle;
};

module.exports.findTriangleRecursive = function findTriangleRecursive(requestedLines, triangle) {
  var triangle = triangle || [[1]];
  if (requestedLines < 2) return triangle; // We already have the top row

  var prevLine = triangle[triangle.length-1];
  var currentLine = [1];

  for (var i = 1; i < prevLine.length; i++) {
    currentLine[i] = prevLine[i] + prevLine[i-1];
  }
  currentLine.push(1);
  triangle.push(currentLine);

  return findTriangleRecursive(requestedLines-1, triangle);
};
