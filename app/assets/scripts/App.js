var $ = require('jquery');

// with the node way to import (before ES6)
// var Person = require('./modules/Person');

import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + "now owes $0 in taxes")
  }
}

var john = new Person("John Doe", "green");
john.greet();

var jane = new Adult("Jane Smith", "violet");
jane.greet();
jane.payTaxes();
console.log( jane.favoriteColor.toString() );
