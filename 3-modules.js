// CommonJS, every file is module (by deafult)
// Modules - Encapsulated Code (only share minimum)

const john = 'john'
const peter = 'peter'

const sayHi = (name) =>
{
    console.log(`hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)
