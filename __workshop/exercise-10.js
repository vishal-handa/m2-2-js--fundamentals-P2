// Exercise 10
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns true if every element of list is of length at least 5.
// Otherwise, it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function allLong(list) {
  // list is an array of strings
  // return list.every(function (word) {
  //   return word.length > 4;
  // });
  let newstring=list.every(function(word){
    let newarray= word.length>4;
    return newarray;
  });
  return newstring;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(allLong(["Scott", "Bob", "Ric", "Jim"]));
console.log(
  allLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

// Create more test cases.
console.log(allLong(["Kirk", "Dave", "John", "Luke"]));
// This is needed for automated testing (more on that later)
module.exports = allLong;
