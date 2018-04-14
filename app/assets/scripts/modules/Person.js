// function Person(fullName, favColor) {
//   this.name = fullName;
//   this.favoriteColor = favColor;
// 	this.greet = function() {
//     console.log("Hello, my name is "+ this.name 
//     + " and my favorite color is" + this.favoriteColor)
// 	}
// } 

// With E6 We can use the keyword class

class Person {
  constructor (fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Shalu, my name is "+ this.name 
    + " and my favorite color is " + this.favoriteColor)
  }
}

// with the node way to import (before ES6)
// module.exports = Person;

export default Person;