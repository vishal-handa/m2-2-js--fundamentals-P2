// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers
  let sum=0;
  for(let i=0;i<grades.length;i++){
    sum=sum+grades[i];
  }
  let avg=Math.round(sum/grades.length);
  return avg;
  // let sum = grades.reduce(function (a, b) {
  //   return a + b;
  // });
  // return Math.round(sum / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(calculateAverage([76, 60, 83, 100, 78]));

// Create more test cases.
console.log(calculateAverage([-76, -60, -83, -100, -78]));
// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
