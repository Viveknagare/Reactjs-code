var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newarr = numbers.map(function (x) {
  return x * 2;
});
console.log(newarr);

// implementation of map using foreach
var arr2 = [];
numbers.forEach(function (x) {
  arr2.push(x * 2);
});

console.log(arr2);

// //Filter - Create a new array by keeping the items that return true.
const newarr1 = numbers.filter(function (x) {
  return x > 10;
});

console.log(newarr1);

//filter using for each
var arr = [];
numbers.forEach(function (x) {
  if (x > 10) {
    arr.push(x);
  }
});
console.log(arr);
//Reduce - Accumulate a value by doing something to each item in an array.
var sum = numbers.reduce(function (accumulator, currentnumber) {
  return accumulator + currentnumber;
});
console.log(sum);
//Find - find the first item that matches from an array.

var number1 = numbers.find(function (num) {
  return num > 10;
});
console.log(number1);

//FindIndex - find the index of the first item that matches.

var number2 = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(number2);

//make the emojipedia array only meaning array and with maximum letters of 100

import emojipedia from "./emojipedia";

var meaning = emojipedia.map(function (emojientry) {
  return emojientry.meaning.substring(0, 100);
});

console.log(meaning);
