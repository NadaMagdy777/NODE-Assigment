var module1 = require('./Task1');
var module2 = require('./Task2');
console.log(module1.Add(10,20));
console.log(module1.Sub(50,10));
console.log(module1.Mult(5,2));

console.log(module2.getAge("Nada", new Date(2000,20,2)));
console.log(module2.getAge("Magdy", new Date(2023,3,25)));