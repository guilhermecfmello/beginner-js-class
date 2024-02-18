// Primary

// String
var name, lastName;
name = "Elodie";
lastName = "Derbois";

// Number (Can be integer or float)
var age = 17;
var timeToRetire = 40;
var height = 1.6;

// Boolean
var eloIsMajor = (age >= 18);
console.log(eloIsMajor);
console.log(typeof(eloIsMajor));

// Undefined and Null
var eloIsMillionare;
var nullValue = null;
console.log(typeof(eloIsMillionare));

// Structured type

// Object
var person = {
    nome: "Maria",
    idade: 25,
    cidade: "Pau"
};
console.log(person);
console.log(typeof(person));
console.log(typeof(person.nome));

// Array: Collection of itens of any type
var nameArray = ["Maria", "Elodie", "Gui"]
console.log("Name array type: " + typeof(nameArray));
console.log(nameArray);
console.log(nameArray[0]);

// Dynamic typing
var carBrand = "Porche";
carBrand = ["Porche", "Ferrari"];
console.log(carBrand);
console.log(typeof(carBrand));