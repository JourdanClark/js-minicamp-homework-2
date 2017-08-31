// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return x === y ? x : x > y ? x : y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch(language){
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 10 || num === 5;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  return num < 50 && num > 20;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return Number.isInteger(num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if(num % 3 === 0 && num % 5 === 0)
    return 'fizzbuzz';
  if(num % 3 === 0)
    return 'fizz';
  if(num % 5 === 0)
    return 'buzz';
  return num;
}

var primes = [];
function isPrime(num){
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

  //return false if number less than 2 or not whole.

  if(num>1 && num%1===0){
    if(num>2 && num%2===0) return false; //first
    var sqrt = Math.ceil(Math.sqrt(num));
    if(num%sqrt===0 && num!==sqrt) return false; //second
    if(primes.indexOf(num) > -1) return true;
    //this is where most of the magic happens
    for(var i=0;i<primes.length;i++){
      if(num%primes[i]===0) return false; //third
      if(primes[i]>sqrt){
        primes.push(num);
        return true;
      }
    }
    //backfills prime numbers if you start
    //higher than 2
    if(num>5){
      for(var j=2;j<num;j++)
        isPrime(j);
      return isPrime(num);
    }
    //this catches 2, 3, and 5
    primes.push(num);
    return true;
  }
  return false;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr instanceof Array ? arr.shift() : undefined;
}

function returnLast(arr) {
  // return the last item of the array
  return arr instanceof Array ? arr.pop() : undefined;
}

function getArrayLength(arr) {
  // return the length of the array
  return arr instanceof Array ? arr.length : undefined;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  if(!(arr instanceof Array))
    return undefined;
  return arr.map(function(x){
    return x + 1;
  });
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  if(!(arr instanceof Array))
    return undefined;
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  if(!(arr instanceof Array))
    return undefined;
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  if(!(words instanceof Array))
    return undefined;
  return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if(!(arr instanceof Array))
    return undefined;
  return arr.includes(item);

}

// function addNumbers(numbers) {
//   // numbers is an array of integers.
//   // add all of the integers and return the value
//   if(!(numbers instanceof Array))
//     return undefined;
//   return numbers.reduce((total, num) => total += num);
// }

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  if(!(numbers instanceof Array))
    return undefined;
  var total = 0;
  numbers.forEach(function(x){
    total += x;
  });
  return total;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  if(!(testScores instanceof Array))
    return undefined;
  var total = 0;
  testScores.forEach(function(x){
    total += x;
  });
  return total / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  if(!(numbers instanceof Array))
    return undefined;
  return numbers.sort(function(a, b){return a-b;}).pop();
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
