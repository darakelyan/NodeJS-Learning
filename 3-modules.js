// Common JS, every file is now module (by default)
// Modules - Encapsulated Code (only share Minimum)
// When you import a module, you actually invoke it 

const names = require('./4-namesModule');
const sayHi = require('./5-utilsModule');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')

// Module calls

console.log(names);
sayHi('Howdy!')
sayHi(names.peter)
sayHi(names.john)
console.log(data)