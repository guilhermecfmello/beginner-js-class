// More used in real-life application, when we have a lot of classes
// typeof
// typeof	Returns the type of a variable
console.log(typeof 1)
console.log(typeof "1")
console.log(typeof [1])
console.log(typeof (1 == 1))
console.log(typeof {"age": 1})

// instanceof	Returns true if an object is an instance of an object type
// Is instance of something?

// Define a constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}
  
// Create an instance of the Car constructor
var myCar = new Car('Toyota', 'Camry');

// Use instanceof to check if an object is an instance of a particular class or constructor
if (myCar instanceof Car) {
console.log('myCar is an instance of Car');
} else {
console.log('myCar is not an instance of Car');
}