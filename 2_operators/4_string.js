// ==	equal to
var a = "elo"
var b = "Elo"
console.log(a==b)

// ===	equal value and equal type
var number = 1
var numberAsString = "1"
console.log(numer === numberAsString)

// !=	not equal
var c = "elo"
var d = "elo"
console.log(c != d)

// !==	not equal value or not equal type
console.log(number !== numberAsString)

// >	greater than (Lexicographic order) Check: https://en.wikipedia.org/wiki/Lexicographic_order
console.log(a < b)
// Same for below:
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

// String addition (concatenation)
var firstName = "Elo"
var lastName = "Derbois"
var fullName = firstName + " " + lastName
console.log(fullName)

// Adding String and number
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;