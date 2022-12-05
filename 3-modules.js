// Common JS, every file is now module (by default)
// Modules - Encapsulated Code (only share Minimum)

const names = require('./4-namesModule');
const sayHi = require('./5-utilsModule');
const data = require('./6-alternative-flavor');
// Module calls

//console.log(names);
sayHi('Howdy!')
sayHi(names.peter)
sayHi(names.john)
console.log(data)

