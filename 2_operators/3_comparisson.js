// ***** Comparison Operators *****

// Equal to
console.log(1 == 2)

// Equal value and type
var a = 1
var b = "1"
console.log(a === b)

// not equal
console.log(5 != 5)

// not equal value or not equal type
var c = "true"
var d = true
console.log(c === d)

// greater than
var e = 10
console.log(e > 10)

// less than
var f = 1192
console.log(f < 999999)

// greater than or equal to
var g = 3
console.log(g >= 2)

// less than or equal to
var h = 5
console.log(g <= 12)

// ternary operator (expression) ? (case true) : (case false)
let i = 7
x = (i % 2) == 1 ? "odd" : "even"

console.log("i is " + x)