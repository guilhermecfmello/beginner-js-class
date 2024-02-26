// JS words with 32 bit-signed, examples below are represented in 4 bits unsigned

// & (bitwise AND)
var a = 1
var b = 5

console.log(a & b)
// a = 0001
// b = 0101
// a & b == 1

// |  (bitwise OR)
console.log(a | b)
// a | b == 0101 == 5 decimal

// ~ (bitwise NOT)
console.log(~b)
// bitwise NOT in b
// b == 0101 -> apply ~ -> 1010 == 10
// Result in this case will be -6 because: ~00000000000000000000000000000101 will return 11111111111111111111111111111010

// ^ (bitwise XOR)
console.log(b ^ 1)
// b = 0101
// 1 = 0001
// result = 0100 == 4

// << (leftshift)
a = 100
console.log(a << 1)

// >> (rightshift)
console.log(a >> 1)

// >>> (unsigned rightshift)
console.log(a >>> 1)
